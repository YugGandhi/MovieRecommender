import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import type { Movie } from "@/types/movie";
import { X } from "lucide-react";

interface MovieModalProps {
  movie: Movie | null;
  open: boolean;
  onClose: () => void;
  onRate: (movie: Movie) => void;
}

export default function MovieModal({ movie, open, onClose, onRate }: MovieModalProps) {
  const [isBackdropLoading, setIsBackdropLoading] = useState(true);
  const [isPosterLoading, setIsPosterLoading] = useState(true);
  const [backdropError, setBackdropError] = useState(false);
  const [posterError, setPosterError] = useState(false);

  if (!movie) return null;

  const getYear = (dateString?: string) => {
    if (!dateString) return "";
    return new Date(dateString).getFullYear();
  };

  const getPosterUrl = (path?: string) => {
    if (!path || posterError) return "https://images.unsplash.com/photo-1489599096831-daa6f2a39f7b?ixlib=rb-4.0.3&w=300&h=450&fit=crop";
    return `https://image.tmdb.org/t/p/w500${path}`;
  };

  const getBackdropUrl = (path?: string) => {
    if (!path || backdropError) return "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-4.0.3&w=1200&h=400&fit=crop";
    return `https://image.tmdb.org/t/p/w1280${path}`;
  };

  const formatRuntime = (minutes?: number) => {
    if (!minutes) return "";
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 bg-gray-900 border-gray-700">
        <div className="relative">
          {backdropError ? (
            <div className="w-full h-64 bg-gray-800 flex items-center justify-center">
              <div className="text-center p-4">
                <div className="text-6xl mb-4">🎬</div>
                <div className="text-xl text-gray-400">{movie.title}</div>
              </div>
            </div>
          ) : (
            <img
              src={movie.backdropPath}
              alt={`${movie.title} backdrop`}
              className="w-full h-64 object-cover"
              onError={() => setBackdropError(true)}
            />
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-black/50 hover:bg-black/70"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="p-8 -mt-20 relative">
          <DialogTitle className="sr-only">{movie.title}</DialogTitle>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Movie poster */}
            <div className="flex-shrink-0">
              {isPosterLoading && (
                <Skeleton className="w-48 h-72 rounded-xl" />
              )}
              <img 
                src={getPosterUrl(movie.posterPath)}
                alt={`${movie.title} poster`}
                className={`w-48 h-72 object-cover rounded-xl shadow-2xl transition-opacity duration-300 ${
                  isPosterLoading ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={() => setIsPosterLoading(false)}
                onError={() => {
                  setPosterError(true);
                  setIsPosterLoading(false);
                }}
              />
            </div>
            
            {/* Movie details */}
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                {movie.compatibilityScore && (
                  <Badge className="bg-primary text-primary-foreground">
                    {movie.compatibilityScore}% Match
                  </Badge>
                )}
                {movie.voteAverage && (
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="font-medium">{movie.voteAverage.toFixed(1)}</span>
                  </div>
                )}
              </div>
              
              <h2 className="text-3xl font-bold mb-3">{movie.title}</h2>
              
              <div className="flex items-center space-x-4 mb-4 text-neutral-light">
                <span>{getYear(movie.releaseDate)}</span>
                {movie.runtime && (
                  <>
                    <span>•</span>
                    <span>{formatRuntime(movie.runtime)}</span>
                  </>
                )}
                {movie.originalLanguage && (
                  <>
                    <span>•</span>
                    <span>{movie.originalLanguage.toUpperCase()}</span>
                  </>
                )}
              </div>
              
              {movie.overview && (
                <p className="text-neutral-light leading-relaxed mb-6">
                  {movie.overview}
                </p>
              )}
              
              {/* Why recommended */}
              {movie.compatibilityScore && (
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 mb-6 border border-gray-700">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <span className="text-accent-green mr-2">💡</span>
                    Why we recommend this
                  </h4>
                  <p className="text-sm text-neutral-light">
                    This movie matches your selected mood and viewing preferences. 
                    {movie.moodTags && movie.moodTags.length > 0 && 
                      ` It's tagged as ${movie.moodTags.join(", ").toLowerCase()}.`
                    }
                  </p>
                </div>
              )}
              
              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Button className="bg-primary hover:bg-red-700 px-8 py-3 transition-colors">
                  <span className="mr-2">▶️</span>
                  Watch Now
                </Button>
                <Button variant="secondary" className="bg-gray-700 hover:bg-gray-600 transition-colors">
                  <span className="mr-2">➕</span>
                  My List
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white hover:bg-white hover:text-gray-900 transition-colors"
                  onClick={() => onRate(movie)}
                >
                  <span className="mr-2">👍</span>
                  Rate
                </Button>
              </div>
            </div>
          </div>
          
          {/* Additional details */}
          <div className="mt-8 border-t border-gray-700 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3">Details</h4>
                <div className="space-y-2 text-sm">
                  {movie.genres && movie.genres.length > 0 && (
                    <div>
                      <span className="text-neutral-light">Genres:</span>{" "}
                      <span>{movie.genres.join(", ")}</span>
                    </div>
                  )}
                  {movie.originalLanguage && (
                    <div>
                      <span className="text-neutral-light">Language:</span>{" "}
                      <span>{movie.originalLanguage.toUpperCase()}</span>
                    </div>
                  )}
                  {movie.popularity && (
                    <div>
                      <span className="text-neutral-light">Popularity:</span>{" "}
                      <span>{movie.popularity.toFixed(1)}</span>
                    </div>
                  )}
                </div>
              </div>
              
              {movie.cinematicDna && (
                <div>
                  <h4 className="font-semibold mb-3">Cinematic DNA</h4>
                  <div className="flex flex-wrap gap-2">
                    {movie.cinematicDna.visualStyle?.map((style) => (
                      <Badge 
                        key={style}
                        variant="secondary" 
                        className="text-xs bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors"
                      >
                        {style}
                      </Badge>
                    ))}
                    {movie.cinematicDna.pacing && (
                      <Badge 
                        variant="secondary"
                        className="text-xs bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-colors"
                      >
                        {movie.cinematicDna.pacing}
                      </Badge>
                    )}
                    {movie.cinematicDna.themes?.map((theme) => (
                      <Badge 
                        key={theme}
                        variant="secondary"
                        className="text-xs bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors"
                      >
                        {theme}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
