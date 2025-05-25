import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MovieService } from "@/lib/movie-service";

interface SearchFiltersProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: {
    runtime?: string;
    decade?: string;
    language?: string;
    microGenres?: string[];
  }) => void;
}

export default function SearchFilters({ onSearch, onFilterChange }: SearchFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMicroGenres, setSelectedMicroGenres] = useState<string[]>([]);
  const [filters, setFilters] = useState({
    runtime: "",
    decade: "",
    language: "",
  });

  const { data: microGenres = [] } = useQuery({
    queryKey: ['/api/micro-genres'],
    queryFn: () => MovieService.getMicroGenres(),
  });

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange({
      ...newFilters,
      microGenres: selectedMicroGenres,
    });
  };

  const toggleMicroGenre = (genre: string) => {
    const newSelection = selectedMicroGenres.includes(genre)
      ? selectedMicroGenres.filter(g => g !== genre)
      : [...selectedMicroGenres, genre];
    
    setSelectedMicroGenres(newSelection);
    onFilterChange({
      ...filters,
      microGenres: newSelection,
    });
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedMicroGenres([]);
    setFilters({ runtime: "", decade: "", language: "" });
    onSearch("");
    onFilterChange({ microGenres: [] });
  };

  return (
    <section className="py-8 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">Advanced Discovery</h3>
            <Button 
              variant="outline" 
              onClick={clearFilters}
              className="text-sm"
            >
              Clear All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="relative mb-6">
                <Input
                  type="text"
                  placeholder="Search for movies, directors, actors, or describe what you're looking for..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="w-full bg-gray-700 border-gray-600 text-white placeholder-neutral-light pr-12"
                />
                <Button
                  onClick={handleSearch}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 h-auto bg-transparent hover:bg-gray-600"
                >
                  🔍
                </Button>
              </div>
              
              {/* Micro-genres */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Micro-Genres</h4>
                <div className="flex flex-wrap gap-2">
                  {microGenres.map((genre) => (
                    <Badge
                      key={genre}
                      variant={selectedMicroGenres.includes(genre) ? "default" : "secondary"}
                      className={`cursor-pointer transition-colors ${
                        selectedMicroGenres.includes(genre)
                          ? "bg-primary hover:bg-red-700"
                          : "bg-gray-700 hover:bg-primary"
                      }`}
                      onClick={() => toggleMicroGenre(genre)}
                    >
                      {genre}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Quick Filters</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm text-neutral-light mb-1">Runtime</label>
                  <Select 
                    value={filters.runtime} 
                    onValueChange={(value) => handleFilterChange('runtime', value)}
                  >
                    <SelectTrigger className="w-full bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Any length" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      <SelectItem value="any">Any length</SelectItem>
                      <SelectItem value="short">Under 90 minutes</SelectItem>
                      <SelectItem value="medium">90-120 minutes</SelectItem>
                      <SelectItem value="long">2+ hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm text-neutral-light mb-1">Decade</label>
                  <Select 
                    value={filters.decade} 
                    onValueChange={(value) => handleFilterChange('decade', value)}
                  >
                    <SelectTrigger className="w-full bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Any decade" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      <SelectItem value="any">Any decade</SelectItem>
                      <SelectItem value="2020s">2020s</SelectItem>
                      <SelectItem value="2010s">2010s</SelectItem>
                      <SelectItem value="2000s">2000s</SelectItem>
                      <SelectItem value="1990s">1990s</SelectItem>
                      <SelectItem value="earlier">Earlier</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm text-neutral-light mb-1">Language</label>
                  <Select 
                    value={filters.language} 
                    onValueChange={(value) => handleFilterChange('language', value)}
                  >
                    <SelectTrigger className="w-full bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Any language" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      <SelectItem value="any">Any language</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="non-en">Non-English</SelectItem>
                      <SelectItem value="silent">Silent films</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
