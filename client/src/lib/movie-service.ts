import { apiRequest } from "./queryClient";
import type { Movie, Mood, UserRating, UserPreferences } from "../types/movie";

export class MovieService {
  static async getMovies(params: {
    mood?: string;
    genre?: string;
    search?: string;
    visualStyle?: string[];
    pacing?: string;
    themes?: string[];
  } = {}): Promise<Movie[]> {
    const searchParams = new URLSearchParams();
    
    if (params.mood) searchParams.set('mood', params.mood);
    if (params.genre) searchParams.set('genre', params.genre);
    if (params.search) searchParams.set('search', params.search);
    if (params.visualStyle?.length) searchParams.set('visualStyle', params.visualStyle.join(','));
    if (params.pacing) searchParams.set('pacing', params.pacing);
    if (params.themes?.length) searchParams.set('themes', params.themes.join(','));
    
    const response = await apiRequest('GET', `/api/movies?${searchParams.toString()}`);
    return response.json();
  }

  static async getMovie(id: number): Promise<Movie> {
    const response = await apiRequest('GET', `/api/movies/${id}`);
    return response.json();
  }

  static async getRecommendations(params: {
    mood?: string;
    context?: string;
    userId?: number;
  } = {}): Promise<Movie[]> {
    const searchParams = new URLSearchParams();
    
    if (params.mood) searchParams.set('mood', params.mood);
    if (params.context) searchParams.set('context', params.context);
    if (params.userId) searchParams.set('userId', params.userId.toString());
    
    const response = await apiRequest('GET', `/api/recommendations?${searchParams.toString()}`);
    return response.json();
  }

  static async getMoods(): Promise<Mood[]> {
    const response = await apiRequest('GET', '/api/moods');
    return response.json();
  }

  static async getMicroGenres(): Promise<string[]> {
    const response = await apiRequest('GET', '/api/micro-genres');
    return response.json();
  }

  static async createRating(rating: {
    userId: number;
    movieId: number;
    rating: number;
    feedback?: string;
    moodContext?: string;
    viewingContext?: string;
  }): Promise<UserRating> {
    const response = await apiRequest('POST', '/api/ratings', rating);
    return response.json();
  }

  static async updateRating(userId: number, movieId: number, updateData: {
    rating?: number;
    feedback?: string;
    moodContext?: string;
    viewingContext?: string;
  }): Promise<UserRating> {
    const response = await apiRequest('PUT', `/api/ratings/${userId}/${movieId}`, updateData);
    return response.json();
  }

  static async getUserRatings(userId: number): Promise<UserRating[]> {
    const response = await apiRequest('GET', `/api/users/${userId}/ratings`);
    return response.json();
  }

  static async getUserPreferences(userId: number): Promise<UserPreferences> {
    const response = await apiRequest('GET', `/api/users/${userId}/preferences`);
    return response.json();
  }

  static async createUserPreferences(userId: number, preferences: {
    preferredGenres?: string[];
    preferredMoods?: string[];
    preferredRuntime?: string;
    preferredLanguages?: string[];
    cinematicPreferences?: {
      visualStyle: string[];
      pacing: string[];
      themes: string[];
    };
  }): Promise<UserPreferences> {
    const response = await apiRequest('POST', `/api/users/${userId}/preferences`, preferences);
    return response.json();
  }

  static async updateUserPreferences(userId: number, preferences: {
    preferredGenres?: string[];
    preferredMoods?: string[];
    preferredRuntime?: string;
    preferredLanguages?: string[];
    cinematicPreferences?: {
      visualStyle: string[];
      pacing: string[];
      themes: string[];
    };
  }): Promise<UserPreferences> {
    const response = await apiRequest('PUT', `/api/users/${userId}/preferences`, preferences);
    return response.json();
  }
}
