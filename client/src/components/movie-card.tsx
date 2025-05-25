import type { Movie } from "@/types/movie";

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
  className?: string;
}

export default function MovieCard({ movie, onClick, className = "" }: MovieCardProps) {
  const getYear = (dateString?: string) => {
    if (!dateString) return "";
    return new Date(dateString).getFullYear();
  };

  const getPosterUrl = (path?: string) => {
    if (!path) return "https://images.unsplash.com/photo-1489599096831-daa6f2a39f7b?ixlib=rb-4.0.3&w=400&h=600&fit=crop";
    return `https://image.tmdb.org/t/p/w400${path}`;
  };

  return (
    <div 
      className={`movie-card group cursor-pointer ${className}`}
      onClick={onClick}
    >
      <img 
        src={getPosterUrl(movie.posterPath)}
        alt={`${movie.title} poster`}
        className="w-full aspect-[2/3] object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1489599096831-daa6f2a39f7b?ixlib=rb-4.0.3&w=400&h=600&fit=crop";
        }}
      />
      <div className="mt-3">
        <h4 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
          {movie.title}
        </h4>
        <div className="flex items-center justify-between mt-1">
          <span className="text-neutral-light text-sm">
            {getYear(movie.releaseDate)}
          </span>
          {movie.voteAverage && (
            <div className="flex items-center space-x-1">
              <span className="text-yellow-400 text-xs">⭐</span>
              <span className="text-xs text-neutral-light">
                {movie.voteAverage.toFixed(1)}
              </span>
            </div>
          )}
        </div>
        {movie.compatibilityScore && (
          <div className="mt-1">
            <span className="text-accent-green text-xs font-medium">
              {movie.compatibilityScore}% match
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
