export interface Movie {
  id: number;
  tmdbId: number;
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
  cinematicDna?: {
    visualStyle: string[];
    pacing: string;
    narrativeStructure: string;
    themes: string[];
  };
  moodTags?: string[];
  microGenres?: string[];
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
