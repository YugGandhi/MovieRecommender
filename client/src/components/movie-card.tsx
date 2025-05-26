import { useState } from "react";
import type { Movie } from "@/types/movie";
import { Skeleton } from "@/components/ui/skeleton";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
  className?: string;
}

export default function MovieCard({ movie, onClick, className = "" }: MovieCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const getYear = (dateString?: string) => {
    if (!dateString) return "";
    return new Date(dateString).getFullYear();
  };

  const getPosterUrl = (path?: string) => {
    if (!path || imageError) {
      return `https://via.placeholder.com/400x600/1f2937/ffffff?text=${encodeURIComponent(movie.title)}`;
    }
    return `https://image.tmdb.org/t/p/w400${path}`;
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Card 
      className={`overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-lg ${className}`}
      onClick={onClick}
    >
      <AspectRatio ratio={2/3}>
        {imageError ? (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <div className="text-center p-4">
              <div className="text-4xl mb-2">🎬</div>
              <div className="text-sm text-gray-400">{movie.title}</div>
            </div>
          </div>
        ) : (
          <img
            src={getPosterUrl(movie.posterPath)}
            alt={`${movie.title} poster`}
            className={`w-full h-full object-cover ${
              isLoading ? 'opacity-0' : 'opacity-100 group-hover:scale-105'
            }`}
            onLoad={() => setIsLoading(false)}
            onError={handleImageError}
            loading="lazy"
          />
        )}
      </AspectRatio>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold line-clamp-2">{movie.title}</h3>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm">{movie.voteAverage?.toFixed(1) || ""}</span>
          </div>
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {movie.genres?.slice(0, 2).map((genre) => (
            <Badge key={genre} variant="secondary" className="text-xs">
              {genre}
            </Badge>
          ))}
        </div>
        <div className="mt-3 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-neutral-light text-sm">
              {getYear(movie.releaseDate)}
            </span>
          </div>
          {movie.compatibilityScore && (
            <div className="flex items-center space-x-1">
              <span className="text-accent-green text-xs font-medium">
                {movie.compatibilityScore}% match
              </span>
              <span className="text-xs text-neutral-light">•</span>
              <span className="text-xs text-neutral-light">
                {movie.genres?.slice(0, 2).join(", ")}
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
