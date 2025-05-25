import { pgTable, text, serial, integer, boolean, real, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const movies = pgTable("movies", {
  id: serial("id").primaryKey(),
  tmdbId: integer("tmdb_id").notNull().unique(),
  title: text("title").notNull(),
  overview: text("overview"),
  releaseDate: text("release_date"),
  posterPath: text("poster_path"),
  backdropPath: text("backdrop_path"),
  genres: jsonb("genres").$type<string[]>().default([]),
  runtime: integer("runtime"),
  voteAverage: real("vote_average"),
  voteCount: integer("vote_count"),
  popularity: real("popularity"),
  originalLanguage: text("original_language"),
  adult: boolean("adult").default(false),
  cinematicDna: jsonb("cinematic_dna").$type<{
    visualStyle: string[];
    pacing: string;
    narrativeStructure: string;
    themes: string[];
  }>(),
  moodTags: jsonb("mood_tags").$type<string[]>().default([]),
  microGenres: jsonb("micro_genres").$type<string[]>().default([]),
});

export const userRatings = pgTable("user_ratings", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  movieId: integer("movie_id").notNull(),
  rating: real("rating").notNull(),
  feedback: text("feedback"),
  moodContext: text("mood_context"),
  viewingContext: text("viewing_context"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const userPreferences = pgTable("user_preferences", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().unique(),
  preferredGenres: jsonb("preferred_genres").$type<string[]>().default([]),
  preferredMoods: jsonb("preferred_moods").$type<string[]>().default([]),
  preferredRuntime: text("preferred_runtime"),
  preferredLanguages: jsonb("preferred_languages").$type<string[]>().default([]),
  cinematicPreferences: jsonb("cinematic_preferences").$type<{
    visualStyle: string[];
    pacing: string[];
    themes: string[];
  }>(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertMovieSchema = createInsertSchema(movies).omit({
  id: true,
});

export const insertUserRatingSchema = createInsertSchema(userRatings).omit({
  id: true,
  createdAt: true,
});

export const insertUserPreferencesSchema = createInsertSchema(userPreferences).omit({
  id: true,
  updatedAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertMovie = z.infer<typeof insertMovieSchema>;
export type Movie = typeof movies.$inferSelect;
export type InsertUserRating = z.infer<typeof insertUserRatingSchema>;
export type UserRating = typeof userRatings.$inferSelect;
export type InsertUserPreferences = z.infer<typeof insertUserPreferencesSchema>;
export type UserPreferences = typeof userPreferences.$inferSelect;
