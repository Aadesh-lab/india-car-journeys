
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
import { CalendarIcon, Users, MapPin, Phone, CreditCard } from "lucide-react";
import { format, differenceInDays } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const Book = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: searchParams.get("city") || "",
    pickupAddress: "",
    carType: searchParams.get("carType") || "",
    pickupDate: searchParams.get("pickupDate") ? new Date(searchParams.get("pickupDate")!) : undefined,
    returnDate: searchParams.get("returnDate") ? new Date(searchParams.get("returnDate")!) : undefined,
    requirements: "",
    selectedCar: searchParams.get("car") || ""
  });

  const [pricing, setPricing] = useState({
    basePrice: 0,
    days: 1,
    total: 0
  });

  const cities = [
    "Delhi", "Jaipur", "Agra", "Mumbai", "Bangalore", "Gurgaon", "Noida", "Ghaziabad"
  ];

  const carTypes = [
    { value: "sedan", label: "Sedan (4 seater)", basePrice: 2500 },
    { value: "suv", label: "SUV (6-7 seater)", basePrice: 4500 },
    { value: "luxury", label: "Luxury (4 seater)", basePrice: 8000 },
    { value: "tempo", label: "Tempo Traveller (10-12 seater)", basePrice: 6500 }
  ];

  // Calculate pricing
  useEffect(() => {
    const selectedCarType = carTypes.find(car => car.value === formData.carType);
    const basePrice = selectedCarType?.basePrice || 0;
    const days = formData.pickupDate && formData.returnDate 
      ? Math.max(1, differenceInDays(formData.returnDate, formData.pickupDate) + 1)
      : 1;
    
    setPricing({
      basePrice,
      days,
      total: basePrice * days
    });
  }, [formData.carType, formData.pickupDate, formData.returnDate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.city || !formData.carType || !formData.pickupDate) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate booking submission
    toast({
      title: "Booking Submitted!",
      description: "We'll contact you within 30 minutes to confirm your booking.",
    });

    console.log("Booking Data:", formData);
    console.log("Pricing:", pricing);
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Book Your Chauffeur</h1>
          <p className="text-gray-600">Fill in the details below and we'll get back to you with confirmation.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Booking Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => updateFormData("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Trip Details */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                      <MapPin className="h-5 w-5" />
                      <span>Trip Information</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">Pickup City *</Label>
                        <Select value={formData.city} onValueChange={(value) => updateFormData("city", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select pickup city" />
                          </SelectTrigger>
                          <SelectContent>
                            {cities.map((city) => (
                              <SelectItem key={city} value={city}>
                                {city}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="carType">Car Type *</Label>
                        <Select value={formData.carType} onValueChange={(value) => updateFormData("carType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select car type" />
                          </SelectTrigger>
                          <SelectContent>
                            {carTypes.map((car) => (
                              <SelectItem key={car.value} value={car.value}>
                                {car.label} - ₹{car.basePrice.toLocaleString()}/day
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <Label htmlFor="pickupAddress">Pickup Address</Label>
                      <Input
                        id="pickupAddress"
                        value={formData.pickupAddress}
                        onChange={(e) => updateFormData("pickupAddress", e.target.value)}
                        placeholder="Hotel name, airport, or specific address"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Pickup Date *</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !formData.pickupDate && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {formData.pickupDate ? format(formData.pickupDate, "PPP") : "Select pickup date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={formData.pickupDate}
                              onSelect={(date) => updateFormData("pickupDate", date)}
                              disabled={(date) => date < new Date()}
                              initialFocus
                              className="pointer-events-auto"
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div className="space-y-2">
                        <Label>Return Date (Optional)</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !formData.returnDate && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {formData.returnDate ? format(formData.returnDate, "PPP") : "Select return date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={formData.returnDate}
                              onSelect={(date) => updateFormData("returnDate", date)}
                              disabled={(date) => date < (formData.pickupDate || new Date())}
                              initialFocus
                              className="pointer-events-auto"
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </div>

                  {/* Special Requirements */}
                  <div className="space-y-2">
                    <Label htmlFor="requirements">Special Requirements</Label>
                    <Textarea
                      id="requirements"
                      value={formData.requirements}
                      onChange={(e) => updateFormData("requirements", e.target.value)}
                      placeholder="Any special requests, preferred pickup time, child seats, etc."
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Booking Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <span>Booking Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Car Type:</span>
                  <span className="font-medium">
                    {carTypes.find(car => car.value === formData.carType)?.label || "Not selected"}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Base Price:</span>
                  <span className="font-medium">₹{pricing.basePrice.toLocaleString()}/day</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{pricing.days} day{pricing.days > 1 ? 's' : ''}</span>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Amount:</span>
                    <span className="text-blue-600">₹{pricing.total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="text-sm text-gray-500 space-y-1">
                  <p>• Includes: Driver, fuel (80km/day), tolls</p>
                  <p>• Extra km: ₹12-15/km</p>
                  <p>• Driver allowance: ₹500/day (outstation)</p>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle>Accepted Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 border rounded-lg">
                    <div className="font-medium text-sm">UPI</div>
                    <div className="text-xs text-gray-500">Google Pay, Paytm</div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="font-medium text-sm">Cards</div>
                    <div className="text-xs text-gray-500">Credit/Debit</div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="font-medium text-sm">Net Banking</div>
                    <div className="text-xs text-gray-500">All banks</div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="font-medium text-sm">Cash</div>
                    <div className="text-xs text-gray-500">On completion</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="font-semibold text-lg mb-1">Need Help?</div>
                <div className="text-blue-600 font-medium">+91 98765 43210</div>
                <div className="text-sm text-gray-500">Available 24/7</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
