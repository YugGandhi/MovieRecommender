import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import MoodSelector from "@/components/mood-selector";
import MovieCard from "@/components/movie-card";
import MovieModal from "@/components/movie-modal";
import RatingModal from "@/components/rating-modal";
import SearchFilters from "@/components/search-filters";
import { MovieService } from "@/lib/movie-service";
import type { Movie } from "@/types/movie";

export default function Home() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedContext, setSelectedContext] = useState<string | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [showMovieModal, setShowMovieModal] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<any>({});

  // Featured movie (first recommendation)
  const { data: featuredMovie, isLoading: featuredLoading } = useQuery({
    queryKey: ['/api/recommendations', selectedMood, selectedContext],
    queryFn: () => MovieService.getRecommendations({ 
      mood: selectedMood || undefined,
      context: selectedContext || undefined 
    }),
    select: (data) => data[0], // Get first movie as featured
  });

  // Mood-based recommendations
  const { data: moodRecommendations = [], isLoading: moodLoading } = useQuery({
    queryKey: ['/api/movies', 'mood', selectedMood],
    queryFn: () => selectedMood ? MovieService.getMovies({ mood: selectedMood }) : Promise.resolve([]),
    enabled: !!selectedMood,
  });

  // Visual style matches (cinematic DNA)
  const { data: visualMatches = [], isLoading: visualLoading } = useQuery({
    queryKey: ['/api/movies', 'visual-style'],
    queryFn: () => MovieService.getMovies({ 
      visualStyle: ['Atmospheric', 'Stylized', 'Minimalist'] 
    }),
  });

  // Search results
  const { data: searchResults = [], isLoading: searchLoading } = useQuery({
    queryKey: ['/api/movies', 'search', searchQuery, filters],
    queryFn: () => {
      if (searchQuery) {
        return MovieService.getMovies({ search: searchQuery });
      }
      if (filters.microGenres?.length > 0) {
        return MovieService.getMovies({});
      }
      return Promise.resolve([]);
    },
    enabled: !!searchQuery || (filters.microGenres?.length > 0),
  });

  // All movies for discovery
  const { data: allMovies = [], isLoading: allLoading } = useQuery({
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

  const getBackdropUrl = (path?: string) => {
    if (!path) return "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-4.0.3&w=1200&h=400&fit=crop";
    return `https://image.tmdb.org/t/p/w1280${path}`;
  };

  const formatRuntime = (minutes?: number) => {
    if (!minutes) return "";
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const getYear = (dateString?: string) => {
    if (!dateString) return "";
    return new Date(dateString).getFullYear();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-secondary border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🎬</span>
                <span className="text-xl font-bold">CineMatch</span>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-white hover:text-primary transition-colors">Discover</a>
                <a href="#" className="text-neutral-light hover:text-white transition-colors">My List</a>
                <a href="#" className="text-neutral-light hover:text-white transition-colors">Browse</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-neutral-light hover:text-white transition-colors">
                🔍
              </button>
              <button className="text-neutral-light hover:text-white transition-colors">
                🔔
              </button>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-sm font-medium">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mood Selector */}
      <MoodSelector
        selectedMood={selectedMood}
        onMoodSelect={setSelectedMood}
        selectedContext={selectedContext}
        onContextSelect={setSelectedContext}
      />

      {/* Featured Recommendation */}
      {featuredMovie && (
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 gradient-overlay"></div>
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url(${getBackdropUrl(featuredMovie.backdropPath)})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-primary px-3 py-1 rounded-full text-sm font-medium">Perfect Match</span>
                {featuredMovie.compatibilityScore && (
                  <span className="text-accent-green text-sm">{featuredMovie.compatibilityScore}% compatibility</span>
                )}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{featuredMovie.title}</h2>
              <p className="text-neutral-light text-lg mb-6 leading-relaxed">
                {featuredMovie.overview}
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-accent-green font-semibold">{getYear(featuredMovie.releaseDate)}</span>
                <span className="text-neutral-light">•</span>
                <span className="text-neutral-light">{formatRuntime(featuredMovie.runtime)}</span>
                <span className="text-neutral-light">•</span>
                <span className="text-neutral-light">{featuredMovie.genres?.join(", ")}</span>
                {featuredMovie.voteAverage && (
                  <>
                    <span className="text-neutral-light">•</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-white font-medium">{featuredMovie.voteAverage.toFixed(1)}</span>
                    </div>
                  </>
                )}
              </div>
              <div className="flex items-center space-x-4">
                <button className="bg-primary hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2">
                  <span>▶️</span>
                  <span>Watch Now</span>
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2">
                  <span>➕</span>
                  <span>My List</span>
                </button>
                <button 
                  onClick={() => handleMovieClick(featuredMovie)}
                  className="bg-transparent border border-white hover:bg-white hover:text-secondary px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Search and Filters */}
      <SearchFilters
        onSearch={setSearchQuery}
        onFilterChange={setFilters}
      />

      {/* Recommendation Sections */}
      <section className="py-8 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search Results */}
          {searchQuery && (
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Search Results for "{searchQuery}"</h3>
              </div>
              {searchLoading ? (
                <div className="text-center py-8">Loading search results...</div>
              ) : searchResults.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {searchResults.map((movie) => (
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                      onClick={() => handleMovieClick(movie)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-neutral-light">
                  No movies found for "{searchQuery}"
                </div>
              )}
            </div>
          )}

          {/* Mood-Based Recommendations */}
          {selectedMood && moodRecommendations.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">For Your {selectedMood.charAt(0).toUpperCase() + selectedMood.slice(1)} Mood</h3>
                <button className="text-neutral-light hover:text-white flex items-center space-x-1">
                  <span>See All</span>
                  <span>▶️</span>
                </button>
              </div>
              {moodLoading ? (
                <div className="text-center py-8">Loading recommendations...</div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {moodRecommendations.map((movie) => (
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                      onClick={() => handleMovieClick(movie)}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Visual Style Matches */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Visual Style Match</h3>
              <span className="text-neutral-light text-sm">Based on cinematography preferences</span>
            </div>
            {visualLoading ? (
              <div className="text-center py-8">Loading visual matches...</div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {visualMatches.slice(0, 6).map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    onClick={() => handleMovieClick(movie)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Discovery Section */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Hidden Gems for You</h3>
              <span className="text-neutral-light text-sm">Expanding your cinematic horizons</span>
            </div>
            {allLoading ? (
              <div className="text-center py-8">Loading discoveries...</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allMovies.slice(0, 3).map((movie) => (
                  <div 
                    key={movie.id}
                    className="discovery-card bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors group cursor-pointer"
                    onClick={() => handleMovieClick(movie)}
                  >
                    <div className="flex space-x-4">
                      <MovieCard
                        movie={movie}
                        onClick={() => handleMovieClick(movie)}
                        className="w-20 h-30 flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                          {movie.title}
                        </h4>
                        <p className="text-neutral-light text-sm mb-3 leading-relaxed line-clamp-3">
                          {movie.overview}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            {movie.microGenres && movie.microGenres[0] && (
                              <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                                {movie.microGenres[0]}
                              </span>
                            )}
                            <span className="text-xs text-neutral-light">
                              {getYear(movie.releaseDate)} • {formatRuntime(movie.runtime)}
                            </span>
                          </div>
                          {movie.voteAverage && (
                            <div className="flex items-center space-x-1">
                              <span className="text-yellow-400 text-xs">⭐</span>
                              <span className="text-xs font-medium">{movie.voteAverage.toFixed(1)}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

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
        currentMood={selectedMood || undefined}
        currentContext={selectedContext || undefined}
      />
    </div>
  );
}
