import { mockApi } from "./mock-data";
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
    return mockApi.getMovies(params);
  }

  static async getMovie(id: number): Promise<Movie> {
    return mockApi.getMovie(id);
  }

  static async getRecommendations(params: {
    mood?: string;
    context?: string;
    userId?: number;
  } = {}): Promise<Movie[]> {
    return mockApi.getRecommendations(params);
  }

  static async getMoods(): Promise<Mood[]> {
    return mockApi.getMoods();
  }

  static async getMicroGenres(): Promise<string[]> {
    return mockApi.getMicroGenres();
  }

  static async createRating(rating: {
    userId: number;
    movieId: number;
    rating: number;
    feedback?: string;
    moodContext?: string;
    viewingContext?: string;
  }): Promise<UserRating> {
    return mockApi.createRating(rating);
  }

  static async updateRating(userId: number, movieId: number, updateData: {
    rating?: number;
    feedback?: string;
    moodContext?: string;
    viewingContext?: string;
  }): Promise<UserRating> {
    return mockApi.createRating({ userId, movieId, ...updateData });
  }

  static async getUserRatings(userId: number): Promise<UserRating[]> {
    return mockApi.getUserRatings(userId);
  }

  static async getUserPreferences(userId: number): Promise<UserPreferences> {
    return mockApi.getUserPreferences(userId);
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
    return mockApi.getUserPreferences(userId);
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
    return mockApi.getUserPreferences(userId);
  }

  static async addToMyList(movieId: number): Promise<void> {
    // In a real app, this would make an API call
    console.log(`Added movie ${movieId} to my list`);
  }

  static async removeFromMyList(movieId: number): Promise<void> {
    // In a real app, this would make an API call
    console.log(`Removed movie ${movieId} from my list`);
  }

  static async getMyList(): Promise<Movie[]> {
    return mockApi.getMyList();
  }

  static async getViewingHistory(): Promise<Movie[]> {
    return mockApi.getViewingHistory();
  }

  static async updateProfile(userId: number, profileData: {
    name?: string;
    email?: string;
    avatar?: string;
    plan?: string;
  }): Promise<void> {
    // In a real app, this would make an API call
    console.log(`Updated profile for user ${userId}`, profileData);
  }

  static async getProfile(userId: number): Promise<{
    name: string;
    email: string;
    avatar: string;
    plan: string;
    memberSince: string;
  }> {
    return mockApi.getProfile(userId);
  }

  static async getMovieStats(): Promise<{
    totalMovies: number;
    genres: string[];
    years: number[];
    averageRating: number;
    averageRuntime: number;
  }> {
    return mockApi.getMovieStats();
  }

  static async getSimilarMovies(movieId: number): Promise<(Movie & { similarityScore: number })[]> {
    return mockApi.getSimilarMovies(movieId);
  }

  static async getTrendingMovies(): Promise<Movie[]> {
    return mockApi.getTrendingMovies();
  }

  static async getNewReleases(): Promise<Movie[]> {
    return mockApi.getNewReleases();
  }

  static async searchMovies(params: {
    query?: string;
    genres?: string[];
    year?: number;
    minRating?: number;
    runtime?: string;
    sortBy?: 'rating' | 'year' | 'title' | 'runtime';
    visualStyle?: string[];
    pacing?: string;
    themes?: string[];
  } = {}): Promise<Movie[]> {
    return mockApi.getMovies(params);
  }
}
