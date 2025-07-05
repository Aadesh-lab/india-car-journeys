
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Delhi",
      rating: 5,
      comment: "Excellent service! The driver was punctual, professional, and the car was spotlessly clean. Perfect for our Delhi sightseeing trip.",
      trip: "Full day Delhi tour"
    },
    {
      name: "Rajesh Gupta",
      location: "Mumbai",
      rating: 5,
      comment: "Booked for business meetings across Gurgaon. Much better than multiple Uber rides. Fixed pricing was transparent and fair.",
      trip: "Business meetings - 1 day"
    },
    {
      name: "Sarah Wilson",
      location: "UK Tourist",
      rating: 5,
      comment: "As tourists from UK, we felt completely safe. Driver spoke good English and suggested great photo spots. Highly recommended!",
      trip: "Golden Triangle - 5 days"
    },
    {
      name: "Amit Patel",
      location: "Bangalore",
      rating: 5,
      comment: "Booked Tempo Traveller for family trip. Comfortable journey, reliable service. The kids loved the spacious seating!",
      trip: "Family trip - 3 days"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-blue-600 mb-4 opacity-20" />
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>

                {/* Customer Info */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-500 mb-2">{testimonial.location}</div>
                  <div className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full inline-block">
                    {testimonial.trip}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges Section */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-8">Trusted by thousands across India</h3>
          <div className="flex justify-center items-center space-x-8 grayscale hover:grayscale-0 transition-all">
            <div className="text-2xl font-bold text-gray-400">Google Reviews</div>
            <div className="text-2xl font-bold text-gray-400">TripAdvisor</div>
            <div className="text-2xl font-bold text-gray-400">Facebook</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
