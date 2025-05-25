import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import MovieCard from "@/components/movie-card";
import MovieModal from "@/components/movie-modal";
import RatingModal from "@/components/rating-modal";
import { MovieService } from "@/lib/movie-service";
import type { Movie } from "@/types/movie";

export default function Browse() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [showMovieModal, setShowMovieModal] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedDecade, setSelectedDecade] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>("popularity");

  // Get all movies
  const { data: allMovies = [], isLoading } = useQuery({
    queryKey: ['/api/movies'],
    queryFn: () => MovieService.getMovies(),
  });

  // Get unique genres and decades for filtering
  const genres = Array.from(new Set(allMovies.flatMap(movie => movie.genres || [])));
  const decades = ["2020s", "2010s", "2000s", "1990s", "1980s", "1970s"];

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setShowMovieModal(true);
  };

  const handleRateClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setShowMovieModal(false);
    setShowRatingModal(true);
  };

  // Filter and sort movies
  const filteredMovies = allMovies.filter(movie => {
    if (selectedGenre && (!movie.genres || !movie.genres.includes(selectedGenre))) {
      return false;
    }
    if (selectedDecade) {
      const year = movie.releaseDate ? new Date(movie.releaseDate).getFullYear() : 0;
      const decadeStart = parseInt(selectedDecade.slice(0, 4));
      if (year < decadeStart || year >= decadeStart + 10) {
        return false;
      }
    }
    return true;
  }).sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return (b.voteAverage || 0) - (a.voteAverage || 0);
      case "year":
        return new Date(b.releaseDate || "").getTime() - new Date(a.releaseDate || "").getTime();
      case "title":
        return a.title.localeCompare(b.title);
      case "popularity":
      default:
        return (b.popularity || 0) - (a.popularity || 0);
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-neutral-light">Loading movies...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Browse Movies</h1>
          <p className="text-neutral-light">Explore our complete movie collection</p>
        </div>

        {/* Filters */}
        <div className="bg-gray-800 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Genre Filter */}
            <div>
              <h3 className="font-semibold mb-3">Genres</h3>
              <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                <Badge
                  variant={selectedGenre === null ? "default" : "secondary"}
                  className={`cursor-pointer ${
                    selectedGenre === null ? "bg-primary" : "hover:bg-primary"
                  }`}
                  onClick={() => setSelectedGenre(null)}
                >
                  All Genres
                </Badge>
                {genres.map((genre) => (
                  <Badge
                    key={genre}
                    variant={selectedGenre === genre ? "default" : "secondary"}
                    className={`cursor-pointer ${
                      selectedGenre === genre ? "bg-primary" : "hover:bg-primary"
                    }`}
                    onClick={() => setSelectedGenre(genre)}
                  >
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Decade Filter */}
            <div>
              <h3 className="font-semibold mb-3">Decade</h3>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={selectedDecade === null ? "default" : "secondary"}
                  className={`cursor-pointer ${
                    selectedDecade === null ? "bg-primary" : "hover:bg-primary"
                  }`}
                  onClick={() => setSelectedDecade(null)}
                >
                  All Decades
                </Badge>
                {decades.map((decade) => (
                  <Badge
                    key={decade}
                    variant={selectedDecade === decade ? "default" : "secondary"}
                    className={`cursor-pointer ${
                      selectedDecade === decade ? "bg-primary" : "hover:bg-primary"
                    }`}
                    onClick={() => setSelectedDecade(decade)}
                  >
                    {decade}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div>
              <h3 className="font-semibold mb-3">Sort by</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { key: "popularity", label: "Popularity" },
                  { key: "rating", label: "Rating" },
                  { key: "year", label: "Year" },
                  { key: "title", label: "Title" }
                ].map((option) => (
                  <Badge
                    key={option.key}
                    variant={sortBy === option.key ? "default" : "secondary"}
                    className={`cursor-pointer ${
                      sortBy === option.key ? "bg-primary" : "hover:bg-primary"
                    }`}
                    onClick={() => setSortBy(option.key)}
                  >
                    {option.label}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Clear Filters */}
          {(selectedGenre || selectedDecade) && (
            <div className="mt-4 pt-4 border-t border-gray-700">
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedGenre(null);
                  setSelectedDecade(null);
                }}
                className="text-sm"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-neutral-light">
            Showing {filteredMovies.length} of {allMovies.length} movies
            {selectedGenre && ` in ${selectedGenre}`}
            {selectedDecade && ` from the ${selectedDecade}`}
          </p>
        </div>

        {/* Movies Grid */}
        {filteredMovies.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎬</div>
            <h3 className="text-2xl font-semibold mb-2">No movies found</h3>
            <p className="text-neutral-light mb-6">Try adjusting your filters</p>
            <Button
              onClick={() => {
                setSelectedGenre(null);
                setSelectedDecade(null);
              }}
              className="bg-primary hover:bg-red-700"
            >
              Clear All Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onClick={() => handleMovieClick(movie)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Movie Detail Modal */}
      <MovieModal
        movie={selectedMovie}
        open={showMovieModal}
        onClose={() => setShowMovieModal(false)}
        onRate={handleRateClick}
      />

      {/* Rating Modal */}
      <RatingModal
        movie={selectedMovie}
        open={showRatingModal}
        onClose={() => setShowRatingModal(false)}
      />
    </div>
  );
}