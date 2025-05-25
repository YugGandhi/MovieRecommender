import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { MovieService } from "@/lib/movie-service";
import type { Mood } from "@/types/movie";

interface MoodSelectorProps {
  selectedMood: string | null;
  onMoodSelect: (mood: string) => void;
  selectedContext: string | null;
  onContextSelect: (context: string) => void;
}

const contextOptions = [
  { id: "solo", name: "Solo", icon: "user" },
  { id: "group", name: "Group", icon: "users" },
  { id: "quick", name: "Quick (90 min)", icon: "clock" },
  { id: "epic", name: "Epic (2+ hrs)", icon: "hourglass-half" }
];

export default function MoodSelector({ 
  selectedMood, 
  onMoodSelect, 
  selectedContext, 
  onContextSelect 
}: MoodSelectorProps) {
  const { data: moods = [], isLoading } = useQuery({
    queryKey: ['/api/moods'],
    queryFn: () => MovieService.getMoods(),
  });

  const getMoodIcon = (iconName: string) => {
    const iconMap: Record<string, string> = {
      smile: "😌",
      bolt: "⚡",
      brain: "🧠",
      laugh: "😄",
      heart: "❤️",
      mask: "🎭",
      rocket: "🚀",
      "cloud-rain": "🌧️"
    };
    return iconMap[iconName] || "🎬";
  };

  const getContextIcon = (iconName: string) => {
    const iconMap: Record<string, string> = {
      user: "👤",
      users: "👥",
      clock: "⏰",
      "hourglass-half": "⏳"
    };
    return iconMap[iconName] || "🎬";
  };

  if (isLoading) {
    return (
      <section className="py-8 bg-gradient-to-b from-secondary to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Loading moods...</h1>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 bg-gradient-to-b from-secondary to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">What's your mood tonight?</h1>
          <p className="text-neutral-light text-lg">Let our AI curator find the perfect movie for your current vibe</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
          {moods.map((mood) => (
            <button
              key={mood.id}
              onClick={() => onMoodSelect(mood.id)}
              className={`mood-card rounded-xl p-4 transition-all duration-300 hover:scale-105 border-2 group ${
                selectedMood === mood.id
                  ? "border-primary bg-primary/10"
                  : "border-transparent bg-gray-800 hover:bg-gray-700 hover:border-primary"
              }`}
            >
              <div className="text-center">
                <div className="text-3xl mb-3 group-hover:text-primary transition-colors">
                  {getMoodIcon(mood.icon)}
                </div>
                <p className="text-sm font-medium">{mood.name}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Context Selector */}
        <div className="bg-gray-800 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4">Viewing Context</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {contextOptions.map((context) => (
              <button
                key={context.id}
                onClick={() => onContextSelect(context.id)}
                className={`context-btn rounded-lg p-3 transition-colors text-center ${
                  selectedContext === context.id
                    ? "bg-primary"
                    : "bg-gray-700 hover:bg-primary"
                }`}
              >
                <div className="text-xl mb-2">
                  {getContextIcon(context.icon)}
                </div>
                <span className="text-sm">{context.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
