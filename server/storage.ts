import { 
  users, movies, userRatings, userPreferences,
  type User, type InsertUser, type Movie, type InsertMovie, 
  type UserRating, type InsertUserRating, type UserPreferences, type InsertUserPreferences 
} from "@shared/schema";
import { movieDatabase } from "./movie-data";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Movies
  getMovie(id: number): Promise<Movie | undefined>;
  getMovieByTmdbId(tmdbId: number): Promise<Movie | undefined>;
  createMovie(movie: InsertMovie): Promise<Movie>;
  searchMovies(query: string): Promise<Movie[]>;
  getMoviesByGenre(genre: string): Promise<Movie[]>;
  getMoviesByMood(mood: string): Promise<Movie[]>;
  getMoviesByCinematicDna(criteria: any): Promise<Movie[]>;
  getAllMovies(): Promise<Movie[]>;
  
  // User Ratings
  getUserRating(userId: number, movieId: number): Promise<UserRating | undefined>;
  createUserRating(rating: InsertUserRating): Promise<UserRating>;
  updateUserRating(userId: number, movieId: number, rating: Partial<InsertUserRating>): Promise<UserRating | undefined>;
  getUserRatings(userId: number): Promise<UserRating[]>;
  
  // User Preferences
  getUserPreferences(userId: number): Promise<UserPreferences | undefined>;
  createUserPreferences(preferences: InsertUserPreferences): Promise<UserPreferences>;
  updateUserPreferences(userId: number, preferences: Partial<InsertUserPreferences>): Promise<UserPreferences | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private movies: Map<number, Movie>;
  private userRatings: Map<string, UserRating>;
  private userPreferences: Map<number, UserPreferences>;
  private currentUserId: number;
  private currentMovieId: number;
  private currentRatingId: number;
  private currentPreferencesId: number;

  constructor() {
    this.users = new Map();
    this.movies = new Map();
    this.userRatings = new Map();
    this.userPreferences = new Map();
    this.currentUserId = 1;
    this.currentMovieId = 1;
    this.currentRatingId = 1;
    this.currentPreferencesId = 1;
    
    // Initialize with some sample movies for demonstration
    this.initializeSampleMovies();
  }

  private async initializeSampleMovies() {
    for (const movie of movieDatabase) {
      await this.createMovie(movie);
    }
  }

  // Users
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Movies
  async getMovie(id: number): Promise<Movie | undefined> {
    return this.movies.get(id);
  }

  async getMovieByTmdbId(tmdbId: number): Promise<Movie | undefined> {
    return Array.from(this.movies.values()).find(
      (movie) => movie.tmdbId === tmdbId,
    );
  }

  async createMovie(insertMovie: InsertMovie): Promise<Movie> {
    const id = this.currentMovieId++;
    const movie: Movie = { 
      ...insertMovie, 
      id,
      overview: insertMovie.overview ?? null,
      releaseDate: insertMovie.releaseDate ?? null,
      posterPath: insertMovie.posterPath ?? null,
      backdropPath: insertMovie.backdropPath ?? null,
      genres: insertMovie.genres ? [...insertMovie.genres] : null,
      runtime: insertMovie.runtime ?? null,
      voteAverage: insertMovie.voteAverage ?? null,
      voteCount: insertMovie.voteCount ?? null,
      popularity: insertMovie.popularity ?? null,
      originalLanguage: insertMovie.originalLanguage ?? null,
      cinematicDna: insertMovie.cinematicDna ?? null,
      moodTags: insertMovie.moodTags ?? null,
      microGenres: insertMovie.microGenres ?? null
    };
    this.movies.set(id, movie);
    return movie;
  }

  async searchMovies(query: string): Promise<Movie[]> {
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.movies.values()).filter(
      (movie) =>
        movie.title.toLowerCase().includes(lowercaseQuery) ||
        (movie.overview && movie.overview.toLowerCase().includes(lowercaseQuery))
    );
  }

  async getMoviesByGenre(genre: string): Promise<Movie[]> {
    return Array.from(this.movies.values()).filter(
      (movie) => movie.genres && movie.genres.includes(genre)
    );
  }

  async getMoviesByMood(mood: string): Promise<Movie[]> {
    return Array.from(this.movies.values()).filter(
      (movie) => movie.moodTags && movie.moodTags.includes(mood)
    );
  }

  async getMoviesByCinematicDna(criteria: any): Promise<Movie[]> {
    return Array.from(this.movies.values()).filter((movie) => {
      if (!movie.cinematicDna) return false;
      
      if (criteria.visualStyle) {
        return movie.cinematicDna.visualStyle.some(style => 
          criteria.visualStyle.includes(style)
        );
      }
      
      if (criteria.pacing) {
        return movie.cinematicDna.pacing === criteria.pacing;
      }
      
      if (criteria.themes) {
        return movie.cinematicDna.themes.some(theme => 
          criteria.themes.includes(theme)
        );
      }
      
      return true;
    });
  }

  async getAllMovies(): Promise<Movie[]> {
    return Array.from(this.movies.values());
  }

  // User Ratings
  async getUserRating(userId: number, movieId: number): Promise<UserRating | undefined> {
    return this.userRatings.get(`${userId}-${movieId}`);
  }

  async createUserRating(insertRating: InsertUserRating): Promise<UserRating> {
    const id = this.currentRatingId++;
    const rating: UserRating = { 
      ...insertRating, 
      id,
      feedback: insertRating.feedback ?? null,
      moodContext: insertRating.moodContext ?? null,
      viewingContext: insertRating.viewingContext ?? null,
      createdAt: new Date()
    };
    this.userRatings.set(`${insertRating.userId}-${insertRating.movieId}`, rating);
    return rating;
  }

  async updateUserRating(userId: number, movieId: number, updateData: Partial<InsertUserRating>): Promise<UserRating | undefined> {
    const key = `${userId}-${movieId}`;
    const existing = this.userRatings.get(key);
    if (!existing) return undefined;
    
    const updated = { ...existing, ...updateData };
    this.userRatings.set(key, updated);
    return updated;
  }

  async getUserRatings(userId: number): Promise<UserRating[]> {
    return Array.from(this.userRatings.values()).filter(
      (rating) => rating.userId === userId
    );
  }

  // User Preferences
  async getUserPreferences(userId: number): Promise<UserPreferences | undefined> {
    return this.userPreferences.get(userId);
  }

  async createUserPreferences(insertPreferences: InsertUserPreferences): Promise<UserPreferences> {
    const id = this.currentPreferencesId++;
    const preferences: UserPreferences = { 
      ...insertPreferences, 
      id,
      updatedAt: new Date()
    };
    this.userPreferences.set(insertPreferences.userId, preferences);
    return preferences;
  }

  async updateUserPreferences(userId: number, updateData: Partial<InsertUserPreferences>): Promise<UserPreferences | undefined> {
    const existing = this.userPreferences.get(userId);
    if (!existing) return undefined;
    
    const updated = { ...existing, ...updateData, updatedAt: new Date() };
    this.userPreferences.set(userId, updated);
    return updated;
  }
}

export const storage = new MemStorage();
