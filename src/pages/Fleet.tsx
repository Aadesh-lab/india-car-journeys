
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Users, Luggage, Fuel, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface Car {
  id: string;
  name: string;
  type: string;
  image: string;
  seating: number;
  luggage: number;
  pricePerDay: number;
  features: string[];
  description: string;
  rating: number;
  popular?: boolean;
}

const Fleet = () => {
  const [selectedType, setSelectedType] = useState("all");
  const [sortBy, setSortBy] = useState("price");

  const cars: Car[] = [
    {
      id: "sedan-dzire",
      name: "Maruti Dzire",
      type: "sedan",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      seating: 4,
      luggage: 2,
      pricePerDay: 2500,
      features: ["AC", "Music System", "GPS", "First Aid"],
      description: "Perfect for city tours and business meetings. Comfortable and fuel-efficient.",
      rating: 4.5,
      popular: true
    },
    {
      id: "sedan-city",
      name: "Honda City",
      type: "sedan",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      seating: 4,
      luggage: 2,
      pricePerDay: 3000,
      features: ["AC", "Music System", "GPS", "Premium Interiors"],
      description: "Premium sedan with enhanced comfort for longer journeys.",
      rating: 4.6
    },
    {
      id: "suv-innova",
      name: "Toyota Innova",
      type: "suv",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      seating: 7,
      luggage: 3,
      pricePerDay: 4500,
      features: ["AC", "Music System", "GPS", "Extra Legroom"],
      description: "Spacious SUV perfect for family trips and group travel.",
      rating: 4.7,
      popular: true
    },
    {
      id: "suv-fortuner",
      name: "Toyota Fortuner",
      type: "luxury",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      seating: 7,
      luggage: 4,
      pricePerDay: 7500,
      features: ["AC", "Premium Sound", "GPS", "Leather Seats", "Sunroof"],
      description: "Luxury SUV with premium amenities for VIP travel.",
      rating: 4.8
    },
    {
      id: "luxury-camry",
      name: "Toyota Camry",
      type: "luxury",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      seating: 4,
      luggage: 3,
      pricePerDay: 8000,
      features: ["AC", "Premium Sound", "GPS", "Leather Seats", "Executive Comfort"],
      description: "Executive luxury sedan for business and special occasions.",
      rating: 4.9
    },
    {
      id: "tempo-traveller",
      name: "Tempo Traveller",
      type: "tempo",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      seating: 12,
      luggage: 8,
      pricePerDay: 6500,
      features: ["AC", "Music System", "GPS", "Reclining Seats", "Extra Storage"],
      description: "Perfect for large groups and family outings with ample space.",
      rating: 4.4
    }
  ];

  const carTypes = [
    { value: "all", label: "All Vehicles" },
    { value: "sedan", label: "Sedan (4 seater)" },
    { value: "suv", label: "SUV (6-7 seater)" },
    { value: "luxury", label: "Luxury" },
    { value: "tempo", label: "Tempo Traveller" }
  ];

  const filteredCars = cars
    .filter(car => selectedType === "all" || car.type === selectedType)
    .sort((a, b) => {
      if (sortBy === "price") return a.pricePerDay - b.pricePerDay;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "seating") return b.seating - a.seating;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Our Fleet</h1>
          <p className="text-gray-600 max-w-2xl">
            Choose from our extensive fleet of well-maintained, comfortable vehicles. 
            All cars come with professional chauffeurs and comprehensive insurance.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Filter by vehicle type" />
              </SelectTrigger>
              <SelectContent>
                {carTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price">Sort by Price</SelectItem>
                <SelectItem value="rating">Sort by Rating</SelectItem>
                <SelectItem value="seating">Sort by Seating</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <Card key={car.id} className="group hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {car.popular && (
                  <Badge className="absolute top-4 left-4 bg-orange-500">
                    Popular
                  </Badge>
                )}
                <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{car.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>
                    <p className="text-gray-600 text-sm capitalize">{car.type}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">₹{car.pricePerDay.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">per day</div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{car.description}</p>

                {/* Vehicle Stats */}
                <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{car.seating} seats</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Luggage className="h-4 w-4" />
                    <span>{car.luggage} bags</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Shield className="h-4 w-4" />
                    <span>Insured</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {car.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Book Button */}
                <Button asChild className="w-full">
                  <Link to={`/book?car=${car.id}`}>
                    Book This Car
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Inclusions */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Professional Chauffeur</h3>
              <p className="text-sm text-gray-600">Experienced, verified driver included</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Fuel className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Fuel & Tolls</h3>
              <p className="text-sm text-gray-600">Fuel for 80km/day & tolls included</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Insurance</h3>
              <p className="text-sm text-gray-600">Comprehensive vehicle insurance</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-600">Round the clock assistance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
