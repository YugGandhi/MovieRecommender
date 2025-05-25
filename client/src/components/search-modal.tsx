import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { MovieService } from "@/lib/movie-service";
import MovieCard from "@/components/movie-card";
import type { Movie } from "@/types/movie";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
  onMovieSelect: (movie: Movie) => void;
}

export default function SearchModal({ open, onClose, onMovieSelect }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const { data: searchResults = [], isLoading } = useQuery({
    queryKey: ['/api/movies', 'search', debouncedQuery],
    queryFn: () => debouncedQuery ? MovieService.getMovies({ search: debouncedQuery }) : Promise.resolve([]),
    enabled: !!debouncedQuery,
  });

  const { data: allMovies = [] } = useQuery({
    queryKey: ['/api/movies'],
    queryFn: () => MovieService.getMovies(),
  });

  const handleMovieClick = (movie: Movie) => {
    onMovieSelect(movie);
    onClose();
    setSearchQuery("");
  };

  const popularMovies = allMovies
    .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
    .slice(0, 12);

  const recentMovies = allMovies
    .sort((a, b) => new Date(b.releaseDate || "").getTime() - new Date(a.releaseDate || "").getTime())
    .slice(0, 12);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden bg-gray-900 border-gray-700">
        <DialogTitle className="sr-only">Search Movies</DialogTitle>
        
        {/* Search Input */}
        <div className="sticky top-0 bg-gray-900 pb-4 border-b border-gray-700">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-400">🔍</span>
            </div>
            <Input
              type="text"
              placeholder="Search for movies, actors, directors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 text-lg py-3"
              autoFocus
            />
          </div>
        </div>

        {/* Search Results */}
        <div className="overflow-y-auto flex-1">
          {searchQuery && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">
                {isLoading ? "Searching..." : `Results for "${searchQuery}"`}
              </h3>
              
              {isLoading ? (
                <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="aspect-[2/3] bg-gray-800 rounded-lg animate-pulse"></div>
                  ))}
                </div>
              ) : searchResults.length > 0 ? (
                <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
                  {searchResults.slice(0, 12).map((movie) => (
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                      onClick={() => handleMovieClick(movie)}
                      className="scale-90"
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-4xl mb-2">🎬</div>
                  <p className="text-gray-400">No movies found for "{searchQuery}"</p>
                  <p className="text-sm text-gray-500 mt-1">Try different keywords or check the spelling</p>
                </div>
              )}
            </div>
          )}

          {/* Popular Movies (shown when no search) */}
          {!searchQuery && (
            <>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">🔥 Popular Movies</h3>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
                  {popularMovies.map((movie) => (
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                      onClick={() => handleMovieClick(movie)}
                      className="scale-90"
                    />
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">🆕 Recent Releases</h3>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
                  {recentMovies.map((movie) => (
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                      onClick={() => handleMovieClick(movie)}
                      className="scale-90"
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Quick Actions */}
        <div className="sticky bottom-0 bg-gray-900 pt-4 border-t border-gray-700">
          <div className="flex justify-between items-center text-sm text-gray-400">
            <span>Press ESC to close</span>
            <span>Click on any movie to see details</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}