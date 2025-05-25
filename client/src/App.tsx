import { useState } from "react";
import { Switch, Route, Link, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import Home from "@/pages/home";
import Browse from "@/pages/browse";
import MyList from "@/pages/my-list";
import NotFound from "@/pages/not-found";
import SearchModal from "@/components/search-modal";
import MovieModal from "@/components/movie-modal";
import RatingModal from "@/components/rating-modal";
import NotificationsDropdown from "@/components/notifications-dropdown";
import ProfileDropdown from "@/components/profile-dropdown";
import type { Movie } from "@/types/movie";

function Navigation() {
  const [location] = useLocation();
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [showMovieModal, setShowMovieModal] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);

  const handleMovieSelect = (movie: Movie) => {
    setSelectedMovie(movie);
    setShowMovieModal(true);
  };

  const handleRateClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setShowMovieModal(false);
    setShowRatingModal(true);
  };

  const navItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/browse", label: "Browse", icon: "🎬" },
    { path: "/my-list", label: "My List", icon: "📚" },
  ];

  return (
    <>
      <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                <div className="text-2xl">🎭</div>
                <span className="text-xl font-bold text-primary">CineMatch</span>
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                    location === item.path
                      ? "bg-primary text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-700"
                  }`}>
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </span>
                </Link>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-2">
              {/* Search Button */}
              <Button
                variant="ghost"
                onClick={() => setShowSearchModal(true)}
                className="p-2"
              >
                <span className="text-xl">🔍</span>
              </Button>

              {/* Notifications */}
              <NotificationsDropdown />

              {/* Profile */}
              <ProfileDropdown />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-gray-800">
          <div className="flex justify-around py-2">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <div className={`flex flex-col items-center py-2 px-3 rounded-md cursor-pointer ${
                  location === item.path
                    ? "text-primary"
                    : "text-gray-400 hover:text-white"
                }`}>
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-xs mt-1">{item.label}</span>
                </div>
              </Link>
            ))}
            <Button
              variant="ghost"
              onClick={() => setShowSearchModal(true)}
              className="flex flex-col items-center py-2 px-3 text-gray-400 hover:text-white"
            >
              <span className="text-lg">🔍</span>
              <span className="text-xs mt-1">Search</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Search Modal */}
      <SearchModal
        open={showSearchModal}
        onClose={() => setShowSearchModal(false)}
        onMovieSelect={handleMovieSelect}
      />

      {/* Movie Detail Modal */}
      <MovieModal
        movie={selectedMovie}
        open={showMovieModal}
        onClose={() => setShowMovieModal(false)}
        onRate={handleRateClick}
      />

      {/* Rating Modal */}
      <RatingModal
        movie={selectedMovie}
        open={showRatingModal}
        onClose={() => setShowRatingModal(false)}
      />
    </>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/browse" component={Browse} />
      <Route path="/my-list" component={MyList} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <Router />
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
