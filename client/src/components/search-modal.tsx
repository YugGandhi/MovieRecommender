import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { MovieService } from "@/lib/movie-service";
import MovieCard from "@/components/movie-card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Movie } from "@/types/movie";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
  onMovieSelect: (movie: Movie) => void;
}

export default function SearchModal({ open, onClose, onMovieSelect }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

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

  const { data: allMovies = [], isLoading: isLoadingAll } = useQuery({
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

  const renderMovieGrid = (movies: Movie[], isLoading: boolean) => {
    if (isLoading) {
      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="aspect-[2/3] rounded-lg" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={() => handleMovieClick(movie)}
            className="scale-90 hover:scale-95 transition-transform"
          />
        ))}
      </div>
    );
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden bg-gray-900 border-gray-700">
        <DialogTitle className="sr-only">Search Movies</DialogTitle>
        
        {/* Search Input */}
        <div className="sticky top-0 bg-gray-900 pb-4 border-b border-gray-700 z-10">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-400">🔍</span>
            </div>
            <Input
              ref={inputRef}
              type="text"
              placeholder="Search for movies, actors, directors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 text-lg py-3 focus:ring-2 focus:ring-primary/50 transition-all"
              autoFocus
            />
          </div>
        </div>

        {/* Search Results */}
        <div className="overflow-y-auto flex-1 py-4">
          {searchQuery ? (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                {isLoading ? (
                  <>
                    <span className="animate-spin mr-2">⌛</span>
                    Searching...
                  </>
                ) : (
                  `Results for "${searchQuery}"`
                )}
              </h3>
              
              {searchResults.length > 0 ? (
                renderMovieGrid(searchResults.slice(0, 12), isLoading)
              ) : !isLoading && (
                <div className="text-center py-12">
                  <div className="text-4xl mb-3 animate-bounce">🎬</div>
                  <p className="text-gray-400 text-lg">No movies found for "{searchQuery}"</p>
                  <p className="text-sm text-gray-500 mt-2">Try different keywords or check the spelling</p>
                </div>
              )}
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <span className="mr-2">🔥</span>
                  Popular Movies
                </h3>
                {renderMovieGrid(popularMovies, isLoadingAll)}
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <span className="mr-2">🆕</span>
                  Recent Releases
                </h3>
                {renderMovieGrid(recentMovies, isLoadingAll)}
              </div>
            </>
          )}
        </div>

        {/* Quick Actions */}
        <div className="sticky bottom-0 bg-gray-900 pt-4 border-t border-gray-700">
          <div className="flex justify-between items-center text-sm text-gray-400">
            <div className="flex items-center space-x-4">
              <span>Press ESC to close</span>
              <span>•</span>
              <span>Click on any movie to see details</span>
            </div>
            <span>{searchResults.length} results</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}