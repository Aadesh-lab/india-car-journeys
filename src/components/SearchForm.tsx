
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Search } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [city, setCity] = useState("");
  const [carType, setCarType] = useState("");
  const [pickupDate, setPickupDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const navigate = useNavigate();

  const cities = [
    "Delhi", "Jaipur", "Agra", "Mumbai", "Bangalore", "Gurgaon", "Noida", "Ghaziabad"
  ];

  const carTypes = [
    "Sedan (4 seater)", "SUV (6-7 seater)", "Luxury (4 seater)", "Tempo Traveller (10-12 seater)"
  ];

  const handleSearch = () => {
    const searchParams = new URLSearchParams({
      city: city || "",
      carType: carType || "",
      pickupDate: pickupDate ? pickupDate.toISOString() : "",
      returnDate: returnDate ? returnDate.toISOString() : "",
    });
    navigate(`/book?${searchParams.toString()}`);
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Your Perfect Ride</h2>
          <p className="text-gray-600">Quick search to get started with your booking</p>
        </div>

        <Card className="max-w-5xl mx-auto shadow-lg">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* City Selection */}
              <div className="space-y-2">
                <Label htmlFor="city">Pickup City</Label>
                <Select value={city} onValueChange={setCity}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((cityName) => (
                      <SelectItem key={cityName} value={cityName}>
                        {cityName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Pickup Date */}
              <div className="space-y-2">
                <Label>Pickup Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !pickupDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {pickupDate ? format(pickupDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={pickupDate}
                      onSelect={setPickupDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Return Date */}
              <div className="space-y-2">
                <Label>Return Date (Optional)</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !returnDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {returnDate ? format(returnDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={returnDate}
                      onSelect={setReturnDate}
                      disabled={(date) => date < (pickupDate || new Date())}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Car Type */}
              <div className="space-y-2">
                <Label htmlFor="carType">Car Type</Label>
                <Select value={carType} onValueChange={setCarType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select car type" />
                  </SelectTrigger>
                  <SelectContent>
                    {carTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <div className="space-y-2">
                <Label className="invisible">Search</Label>
                <Button onClick={handleSearch} className="w-full bg-blue-600 hover:bg-blue-700">
                  <Search className="mr-2 h-4 w-4" />
                  Search Cars
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SearchForm;
