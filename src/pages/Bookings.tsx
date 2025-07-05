
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Calendar, Car, MapPin, Phone, Star } from "lucide-react";
import { format } from "date-fns";

interface Booking {
  id: string;
  carType: string;
  carModel: string;
  pickupCity: string;
  pickupDate: Date;
  returnDate?: Date;
  status: "confirmed" | "completed" | "cancelled" | "pending";
  amount: number;
  driverName?: string;
  driverPhone?: string;
  rating?: number;
}

const Bookings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Mock booking data
  const bookings: Booking[] = [
    {
      id: "BK001",
      carType: "SUV",
      carModel: "Toyota Innova",
      pickupCity: "Delhi",
      pickupDate: new Date("2024-01-15"),
      returnDate: new Date("2024-01-17"),
      status: "completed",
      amount: 13500,
      driverName: "Rajesh Kumar",
      driverPhone: "+91 98765 43210",
      rating: 5
    },
    {
      id: "BK002",
      carType: "Sedan",
      carModel: "Honda City",
      pickupCity: "Jaipur",
      pickupDate: new Date("2024-02-10"),
      status: "confirmed",
      amount: 3000,
      driverName: "Suresh Singh",
      driverPhone: "+91 87654 32109"
    },
    {
      id: "BK003",
      carType: "Luxury",
      carModel: "Toyota Camry",
      pickupCity: "Mumbai",
      pickupDate: new Date("2024-01-05"),
      returnDate: new Date("2024-01-08"),
      status: "completed",
      amount: 24000,
      driverName: "Amit Sharma",
      driverPhone: "+91 76543 21098",
      rating: 4
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredBookings = bookings.filter(booking =>
    booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.carModel.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.pickupCity.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const upcomingBookings = filteredBookings.filter(booking => 
    booking.status === "confirmed" || booking.status === "pending"
  );

  const pastBookings = filteredBookings.filter(booking => 
    booking.status === "completed" || booking.status === "cancelled"
  );

  const BookingCard = ({ booking }: { booking: Booking }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{booking.carModel}</CardTitle>
            <p className="text-gray-600">{booking.carType} • Booking #{booking.id}</p>
          </div>
          <Badge className={getStatusColor(booking.status)}>
            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-gray-400" />
            <div>
              <div className="font-medium">{booking.pickupCity}</div>
              <div className="text-sm text-gray-500">Pickup City</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Calendar className="h-5 w-5 text-gray-400" />
            <div>
              <div className="font-medium">
                {format(booking.pickupDate, "MMM dd, yyyy")}
                {booking.returnDate && ` - ${format(booking.returnDate, "MMM dd, yyyy")}`}
              </div>
              <div className="text-sm text-gray-500">
                {booking.returnDate ? "Trip Duration" : "Single Day"}
              </div>
            </div>
          </div>
        </div>

        {booking.driverName && (
          <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center space-x-3">
              <Car className="h-5 w-5 text-gray-400" />
              <div>
                <div className="font-medium">{booking.driverName}</div>
                <div className="text-sm text-gray-500">Your Driver</div>
              </div>
            </div>
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>Call</span>
            </Button>
          </div>
        )}

        <div className="flex justify-between items-center pt-4 border-t">
          <div>
            <div className="text-2xl font-bold text-blue-600">₹{booking.amount.toLocaleString()}</div>
            <div className="text-sm text-gray-500">Total Amount</div>
          </div>

          {booking.status === "completed" && (
            <div className="flex items-center space-x-2">
              {booking.rating ? (
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{booking.rating}.0</span>
                </div>
              ) : (
                <Button variant="outline" size="sm">Rate Trip</Button>
              )}
            </div>
          )}

          {booking.status === "confirmed" && (
            <div className="space-x-2">
              <Button variant="outline" size="sm">Modify</Button>
              <Button variant="destructive" size="sm">Cancel</Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">My Bookings</h1>
            <p className="text-gray-600">Manage your chauffeur bookings and view trip history</p>
          </div>
          <Button asChild>
            <a href="/book">New Booking</a>
          </Button>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search bookings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Bookings Tabs */}
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="upcoming" className="flex items-center space-x-2">
              <span>Upcoming ({upcomingBookings.length})</span>
            </TabsTrigger>
            <TabsTrigger value="past" className="flex items-center space-x-2">
              <span>Past Trips ({pastBookings.length})</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6 mt-8">
            {upcomingBookings.length > 0 ? (
              upcomingBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <Car className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No Upcoming Bookings</h3>
                  <p className="text-gray-600 mb-6">You don't have any confirmed bookings yet.</p>
                  <Button asChild>
                    <a href="/book">Book Your First Ride</a>
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="past" className="space-y-6 mt-8">
            {pastBookings.length > 0 ? (
              pastBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No Past Trips</h3>
                  <p className="text-gray-600">Your completed trips will appear here.</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>

        {/* Help Section */}
        <Card className="mt-12">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Need Help with Your Booking?</h3>
            <p className="text-gray-600 mb-6">
              Our customer support team is available 24/7 to assist you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Call Support</span>
              </Button>
              <Button variant="outline">
                Chat with Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Bookings;
