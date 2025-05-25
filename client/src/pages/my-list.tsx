import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import MovieCard from "@/components/movie-card";
import MovieModal from "@/components/movie-modal";
import RatingModal from "@/components/rating-modal";
import { MovieService } from "@/lib/movie-service";
import type { Movie } from "@/types/movie";

export default function MyList() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [showMovieModal, setShowMovieModal] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);

  // Get user ratings to show their list
  const { data: userRatings = [], isLoading: ratingsLoading } = useQuery({
    queryKey: ['/api/users', 1, 'ratings'],
    queryFn: () => MovieService.getUserRatings(1),
  });

  // Get all movies to match with ratings
  const { data: allMovies = [], isLoading: moviesLoading } = useQuery({
    queryKey: ['/api/movies'],
    queryFn: () => MovieService.getMovies(),
  });

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setShowMovieModal(true);
  };

  const handleRateClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setShowMovieModal(false);
    setShowRatingModal(true);
  };

  // Get movies that user has rated
  const myListMovies = allMovies.filter(movie => 
    userRatings.some(rating => rating.movieId === movie.id)
  );

  // Get favorite movies (rated 4+ stars)
  const favoriteMovies = allMovies.filter(movie => {
    const rating = userRatings.find(r => r.movieId === movie.id);
    return rating && rating.rating >= 4;
  });

  // Get movies to watch later (rated but not watched or rating < 3)
  const watchLaterMovies = allMovies.filter(movie => {
    const rating = userRatings.find(r => r.movieId === movie.id);
    return rating && rating.rating < 3;
  });

  if (ratingsLoading || moviesLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-neutral-light">Loading your list...</p>
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
          <h1 className="text-4xl font-bold mb-2">My List</h1>
          <p className="text-neutral-light">Your personalized collection of movies</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">{myListMovies.length}</div>
            <div className="text-sm text-neutral-light">Total Movies</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-accent-green">{favoriteMovies.length}</div>
            <div className="text-sm text-neutral-light">Favorites</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-400">{userRatings.length}</div>
            <div className="text-sm text-neutral-light">Rated</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-400">{watchLaterMovies.length}</div>
            <div className="text-sm text-neutral-light">Watch Later</div>
          </div>
        </div>

        {myListMovies.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎬</div>
            <h3 className="text-2xl font-semibold mb-2">Your list is empty</h3>
            <p className="text-neutral-light mb-6">Start rating movies to build your personal collection</p>
            <a 
              href="/" 
              className="bg-primary hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Discover Movies
            </a>
          </div>
        ) : (
          <>
            {/* Favorites Section */}
            {favoriteMovies.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">⭐ Favorites</h2>
                  <span className="text-neutral-light text-sm">{favoriteMovies.length} movies</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {favoriteMovies.map((movie) => (
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                      onClick={() => handleMovieClick(movie)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* All Rated Movies */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">📚 All My Movies</h2>
                <span className="text-neutral-light text-sm">{myListMovies.length} movies</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {myListMovies.map((movie) => {
                  const rating = userRatings.find(r => r.movieId === movie.id);
                  return (
                    <div key={movie.id} className="relative">
                      <MovieCard
                        movie={movie}
                        onClick={() => handleMovieClick(movie)}
                      />
                      {rating && (
                        <div className="absolute top-2 right-2 bg-black/80 text-yellow-400 px-2 py-1 rounded text-xs font-medium flex items-center">
                          ⭐ {rating.rating}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </>
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