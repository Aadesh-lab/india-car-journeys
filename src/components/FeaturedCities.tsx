
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const FeaturedCities = () => {
  const cities = [
    {
      name: "Delhi",
      description: "Explore India's capital with historic monuments and bustling markets",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Red Fort", "India Gate", "Qutub Minar", "Lotus Temple"]
    },
    {
      name: "Jaipur",
      description: "The Pink City's palaces, forts, and vibrant culture await you",
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Amber Fort", "City Palace", "Hawa Mahal", "Jantar Mantar"]
    },
    {
      name: "Agra",
      description: "Home to the magnificent Taj Mahal and Mughal architecture",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Mehtab Bagh"]
    },
    {
      name: "Mumbai",
      description: "The city that never sleeps - Bollywood, beaches, and business",
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Gateway of India", "Marine Drive", "Bollywood Studios", "Colaba"]
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Popular Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover India's most beautiful cities with our comfortable chauffeur services. 
            Perfect for tourists and business travelers alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cities.map((city, index) => (
            <Card key={city.name} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-5 w-5" />
                    <h3 className="text-xl font-bold">{city.name}</h3>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">{city.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-gray-800">Popular Attractions:</h4>
                  <div className="flex flex-wrap gap-2">
                    {city.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCities;
