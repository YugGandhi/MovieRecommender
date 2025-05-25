import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserRatingSchema, insertUserPreferencesSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Movie routes
  app.get("/api/movies", async (req, res) => {
    try {
      const { mood, genre, search, visualStyle, pacing, themes } = req.query;
      
      let movies;
      
      if (search) {
        movies = await storage.searchMovies(search as string);
      } else if (mood) {
        movies = await storage.getMoviesByMood(mood as string);
      } else if (genre) {
        movies = await storage.getMoviesByGenre(genre as string);
      } else if (visualStyle || pacing || themes) {
        const criteria: any = {};
        if (visualStyle) criteria.visualStyle = (visualStyle as string).split(',');
        if (pacing) criteria.pacing = pacing as string;
        if (themes) criteria.themes = (themes as string).split(',');
        movies = await storage.getMoviesByCinematicDna(criteria);
      } else {
        movies = await storage.getAllMovies();
      }
      
      res.json(movies);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch movies" });
    }
  });

  app.get("/api/movies/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const movie = await storage.getMovie(id);
      
      if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      
      res.json(movie);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch movie" });
    }
  });

  // Recommendations endpoint
  app.get("/api/recommendations", async (req, res) => {
    try {
      const { mood, context, userId } = req.query;
      
      let recommendations;
      
      if (mood) {
        recommendations = await storage.getMoviesByMood(mood as string);
      } else {
        recommendations = await storage.getAllMovies();
      }
      
      // Simple recommendation scoring (in a real app, this would be more sophisticated)
      const scoredRecommendations = recommendations.map(movie => ({
        ...movie,
        compatibilityScore: Math.floor(Math.random() * 30) + 70 // 70-100% compatibility
      }));
      
      // Sort by compatibility score
      scoredRecommendations.sort((a, b) => b.compatibilityScore - a.compatibilityScore);
      
      res.json(scoredRecommendations);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch recommendations" });
    }
  });

  // User rating routes
  app.post("/api/ratings", async (req, res) => {
    try {
      const validatedData = insertUserRatingSchema.parse(req.body);
      const rating = await storage.createUserRating(validatedData);
      res.status(201).json(rating);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid rating data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create rating" });
    }
  });

  app.get("/api/users/:userId/ratings", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const ratings = await storage.getUserRatings(userId);
      res.json(ratings);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch user ratings" });
    }
  });

  app.put("/api/ratings/:userId/:movieId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const movieId = parseInt(req.params.movieId);
      const updateData = req.body;
      
      const rating = await storage.updateUserRating(userId, movieId, updateData);
      
      if (!rating) {
        return res.status(404).json({ message: "Rating not found" });
      }
      
      res.json(rating);
    } catch (error) {
      res.status(500).json({ message: "Failed to update rating" });
    }
  });

  // User preferences routes
  app.get("/api/users/:userId/preferences", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const preferences = await storage.getUserPreferences(userId);
      
      if (!preferences) {
        return res.status(404).json({ message: "User preferences not found" });
      }
      
      res.json(preferences);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch user preferences" });
    }
  });

  app.post("/api/users/:userId/preferences", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const validatedData = insertUserPreferencesSchema.parse({
        ...req.body,
        userId
      });
      
      const preferences = await storage.createUserPreferences(validatedData);
      res.status(201).json(preferences);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid preferences data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create preferences" });
    }
  });

  app.put("/api/users/:userId/preferences", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const updateData = req.body;
      
      const preferences = await storage.updateUserPreferences(userId, updateData);
      
      if (!preferences) {
        return res.status(404).json({ message: "User preferences not found" });
      }
      
      res.json(preferences);
    } catch (error) {
      res.status(500).json({ message: "Failed to update preferences" });
    }
  });

  // Moods and genres endpoints
  app.get("/api/moods", async (req, res) => {
    const moods = [
      { id: "relaxed", name: "Relaxed", icon: "smile" },
      { id: "energetic", name: "Energetic", icon: "bolt" },
      { id: "thoughtful", name: "Thoughtful", icon: "brain" },
      { id: "playful", name: "Playful", icon: "laugh" },
      { id: "romantic", name: "Romantic", icon: "heart" },
      { id: "mysterious", name: "Mysterious", icon: "mask" },
      { id: "adventurous", name: "Adventurous", icon: "rocket" },
      { id: "melancholic", name: "Melancholic", icon: "cloud-rain" }
    ];
    res.json(moods);
  });

  app.get("/api/micro-genres", async (req, res) => {
    const microGenres = [
      "Contemplative Sci-Fi",
      "Feel-Good Heists",
      "Cozy Mysteries",
      "Minimal Dialogue Dramas",
      "Neon-Noir Thrillers",
      "Time-Loop Comedies",
      "Existential Horror",
      "Found Family Adventures",
      "Slow-Burn Romance",
      "Mind-Bending Thrillers"
    ];
    res.json(microGenres);
  });

  const httpServer = createServer(app);
  return httpServer;
}
