import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MovieService } from "@/lib/movie-service";
import { useToast } from "@/hooks/use-toast";
import type { Movie } from "@/types/movie";

interface RatingModalProps {
  movie: Movie | null;
  open: boolean;
  onClose: () => void;
  currentMood?: string;
  currentContext?: string;
}

const feedbackOptions = [
  { id: "perfect-match", label: "Perfect match for my mood", icon: "✅" },
  { id: "wrong-genre", label: "Not the right genre", icon: "❌" },
  { id: "seen-it", label: "Already seen it", icon: "👁️" },
  { id: "too-long", label: "Too long for my time", icon: "⏰" },
  { id: "not-my-taste", label: "Not my taste", icon: "🤷" }
];

export default function RatingModal({ 
  movie, 
  open, 
  onClose, 
  currentMood, 
  currentContext 
}: RatingModalProps) {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [selectedFeedback, setSelectedFeedback] = useState<string>("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const createRatingMutation = useMutation({
    mutationFn: (data: {
      userId: number;
      movieId: number;
      rating: number;
      feedback?: string;
      moodContext?: string;
      viewingContext?: string;
    }) => MovieService.createRating(data),
    onSuccess: () => {
      toast({
        title: "Thanks for your feedback!",
        description: "Your rating helps improve our recommendations.",
      });
      queryClient.invalidateQueries({ queryKey: ['/api/users'] });
      onClose();
      resetForm();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit rating. Please try again.",
        variant: "destructive",
      });
    },
  });

  const resetForm = () => {
    setSelectedRating(0);
    setSelectedFeedback("");
  };

  const handleSubmit = () => {
    if (!movie || selectedRating === 0) return;

    // Using userId = 1 as a default for demo purposes
    // In a real app, this would come from authentication
    createRatingMutation.mutate({
      userId: 1,
      movieId: movie.id,
      rating: selectedRating,
      feedback: selectedFeedback,
      moodContext: currentMood,
      viewingContext: currentContext,
    });
  };

  const getPosterUrl = (path?: string) => {
    if (!path) return "https://images.unsplash.com/photo-1489599096831-daa6f2a39f7b?ixlib=rb-4.0.3&w=80&h=120&fit=crop";
    return `https://image.tmdb.org/t/p/w200${path}`;
  };

  if (!movie) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="w-80 bg-gray-800 border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <DialogTitle className="font-semibold">Rate this recommendation</DialogTitle>
        </div>
        
        <div className="text-center mb-4">
          <img 
            src={getPosterUrl(movie.posterPath)}
            alt={`${movie.title} thumbnail`}
            className="w-16 h-24 object-cover rounded-lg mx-auto mb-2"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1489599096831-daa6f2a39f7b?ixlib=rb-4.0.3&w=80&h=120&fit=crop";
            }}
          />
          <p className="text-sm text-neutral-light">{movie.title}</p>
        </div>
        
        <div className="flex justify-center space-x-2 mb-4">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              onClick={() => setSelectedRating(rating)}
              className={`w-8 h-8 transition-colors ${
                selectedRating >= rating
                  ? "text-yellow-400"
                  : "text-gray-500 hover:text-yellow-400"
              }`}
            >
              ⭐
            </button>
          ))}
        </div>
        
        <div className="space-y-2 mb-6">
          {feedbackOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedFeedback(option.id)}
              className={`w-full text-left text-sm py-2 px-3 rounded transition-colors flex items-center ${
                selectedFeedback === option.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              <span className="mr-2">{option.icon}</span>
              {option.label}
            </button>
          ))}
        </div>
        
        <div className="flex space-x-2">
          <Button 
            variant="secondary" 
            onClick={onClose}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit}
            disabled={selectedRating === 0 || createRatingMutation.isPending}
            className="flex-1 bg-primary hover:bg-red-700"
          >
            {createRatingMutation.isPending ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
