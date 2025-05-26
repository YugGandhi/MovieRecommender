import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { MovieService } from "@/lib/movie-service";
import { useToast } from "@/components/ui/use-toast";

export default function ProfileDropdown() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);

  // Get user profile
  const { data: profile } = useQuery({
    queryKey: ['/api/users', 1, 'profile'],
    queryFn: () => MovieService.getProfile(1),
  });

  // Get user stats
  const { data: userRatings = [] } = useQuery({
    queryKey: ['/api/users', 1, 'ratings'],
    queryFn: () => MovieService.getUserRatings(1),
  });

  const { data: myList = [] } = useQuery({
    queryKey: ['/api/users', 1, 'my-list'],
    queryFn: () => MovieService.getMyList(),
  });

  const { data: viewingHistory = [] } = useQuery({
    queryKey: ['/api/users', 1, 'history'],
    queryFn: () => MovieService.getViewingHistory(),
  });

  const { data: allMovies = [] } = useQuery({
    queryKey: ['/api/movies'],
    queryFn: () => MovieService.getMovies(),
  });

  const favoriteMovies = allMovies.filter(movie => {
    const rating = userRatings.find(r => r.movieId === movie.id);
    return rating && rating.rating >= 4;
  });

  const profileStats = {
    moviesRated: userRatings.length,
    favorites: favoriteMovies.length,
    watchTime: viewingHistory.length * 120, // Average 2 hours per movie
    memberSince: profile?.memberSince || "January 2024"
  };

  const handleSignOut = () => {
    // Implement sign out logic
    toast({
      title: "Signed out",
      description: "You have been successfully signed out.",
    });
    setIsOpen(false);
  };

  const handleProfileAction = (action: string) => {
    toast({
      title: "Coming Soon",
      description: `${action} feature will be available soon!`,
    });
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">{profile?.avatar || "JD"}</span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72 bg-gray-800 border-gray-700">
        <DropdownMenuLabel>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-lg font-medium">{profile?.avatar || "JD"}</span>
            </div>
            <div>
              <p className="font-medium">{profile?.name || "John Doe"}</p>
              <p className="text-sm text-gray-400">{profile?.email || "john.doe@example.com"}</p>
              <p className="text-xs text-accent-green">{profile?.plan || "Premium"} Member</p>
            </div>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator className="bg-gray-700" />
        
        {/* User Stats */}
        <div className="p-3">
          <h4 className="text-sm font-medium mb-2">Your Stats</h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-gray-700 rounded p-2 text-center">
              <div className="font-bold text-primary">{profileStats.moviesRated}</div>
              <div className="text-gray-400">Movies Rated</div>
            </div>
            <div className="bg-gray-700 rounded p-2 text-center">
              <div className="font-bold text-accent-green">{profileStats.favorites}</div>
              <div className="text-gray-400">Favorites</div>
            </div>
            <div className="bg-gray-700 rounded p-2 text-center">
              <div className="font-bold text-blue-400">{myList.length}</div>
              <div className="text-gray-400">My List</div>
            </div>
            <div className="bg-gray-700 rounded p-2 text-center">
              <div className="font-bold text-purple-400">{viewingHistory.length}</div>
              <div className="text-gray-400">Watched</div>
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-400">
            <p>⏱️ ~{Math.round(profileStats.watchTime / 60)}h watch time</p>
            <p>📅 Member since {profileStats.memberSince}</p>
          </div>
        </div>

        <DropdownMenuSeparator className="bg-gray-700" />

        <DropdownMenuItem 
          className="cursor-pointer"
          onClick={() => handleProfileAction("Profile Settings")}
        >
          <span className="mr-2">👤</span>
          Profile Settings
        </DropdownMenuItem>
        
        <DropdownMenuItem 
          className="cursor-pointer"
          onClick={() => handleProfileAction("Preferences")}
        >
          <span className="mr-2">🎯</span>
          Preferences
        </DropdownMenuItem>
        
        <DropdownMenuItem 
          className="cursor-pointer"
          onClick={() => handleProfileAction("Viewing History")}
        >
          <span className="mr-2">📊</span>
          Viewing History
        </DropdownMenuItem>
        
        <DropdownMenuItem 
          className="cursor-pointer"
          onClick={() => handleProfileAction("Privacy Settings")}
        >
          <span className="mr-2">🔒</span>
          Privacy Settings
        </DropdownMenuItem>

        <DropdownMenuSeparator className="bg-gray-700" />
        
        <DropdownMenuItem 
          className="cursor-pointer"
          onClick={() => handleProfileAction("Billing & Plans")}
        >
          <span className="mr-2">💳</span>
          Billing & Plans
        </DropdownMenuItem>
        
        <DropdownMenuItem 
          className="cursor-pointer"
          onClick={() => handleProfileAction("Help & Support")}
        >
          <span className="mr-2">❓</span>
          Help & Support
        </DropdownMenuItem>

        <DropdownMenuSeparator className="bg-gray-700" />
        
        <DropdownMenuItem 
          className="cursor-pointer text-red-400 hover:text-red-300"
          onClick={handleSignOut}
        >
          <span className="mr-2">🚪</span>
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}