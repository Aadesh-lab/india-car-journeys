
import { Shield, Clock, Car, Phone, Star, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Verified Drivers",
      description: "All our drivers are background verified, trained, and experienced professionals"
    },
    {
      icon: Clock,
      title: "No Surge Pricing",
      description: "Transparent, fixed pricing with no hidden charges or surge pricing surprises"
    },
    {
      icon: Car,
      title: "Well-Maintained Fleet",
      description: "Clean, sanitized, and well-maintained vehicles for your comfort and safety"
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round-the-clock customer support for any assistance during your journey"
    },
    {
      icon: Star,
      title: "Trusted Service",
      description: "Highly rated service with thousands of satisfied customers across India"
    },
    {
      icon: MapPin,
      title: "Pan India Coverage",
      description: "Extensive coverage across major cities and tourist destinations in India"
    }
  ];

  return (
    <div className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose ChauffeurIndia?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to providing safe, comfortable, and reliable chauffeur services 
            that exceed your expectations every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Verified Drivers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4.8★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
