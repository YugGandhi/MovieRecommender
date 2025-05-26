export interface Movie {
  id: number;
  title: string;
  overview?: string;
  releaseDate?: string;
  posterPath?: string;
  backdropPath?: string;
  genres?: string[];
  runtime?: number;
  voteAverage?: number;
  voteCount?: number;
  popularity?: number;
  originalLanguage?: string;
  adult?: boolean;
  // Custom fields for mock data compatibility
  director?: string;
  cast?: string[];
  mood?: string;
  visualStyle?: string[];
  pacing?: string;
  themes?: string[];
  compatibilityScore?: number;
}

export interface Mood {
  id: string;
  name: string;
  icon: string;
}

export interface UserRating {
  id: number;
  userId: number;
  movieId: number;
  rating: number;
  feedback?: string;
  moodContext?: string;
  viewingContext?: string;
  createdAt: Date;
}

export interface UserPreferences {
  id: number;
  userId: number;
  preferredGenres?: string[];
  preferredMoods?: string[];
  preferredRuntime?: string;
  preferredLanguages?: string[];
  cinematicPreferences?: {
    visualStyle: string[];
    pacing: string[];
    themes: string[];
  };
  updatedAt: Date;
}
