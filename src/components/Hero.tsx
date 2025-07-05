
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Clock, Shield } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-[80vh] bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Beautiful Delhi architecture"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Premium Chauffeur Services
            <span className="block text-orange-400">Across India</span>
          </h1>
          
          <p className="text-xl mb-8 text-blue-100 leading-relaxed">
            Experience comfortable, safe, and reliable car rentals with professional drivers 
            for your day trips and multi-day journeys across Delhi, Jaipur, Agra, and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg" asChild>
              <Link to="/book">Book Your Trip Now</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-6 text-lg" asChild>
              <Link to="/fleet">View Our Fleet</Link>
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <MapPin className="h-8 w-8 text-orange-400" />
              <div>
                <h3 className="font-semibold">Pan India Coverage</h3>
                <p className="text-blue-100 text-sm">Delhi, Jaipur, Agra & more</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-8 w-8 text-orange-400" />
              <div>
                <h3 className="font-semibold">24/7 Support</h3>
                <p className="text-blue-100 text-sm">Round the clock assistance</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-orange-400" />
              <div>
                <h3 className="font-semibold">Verified Drivers</h3>
                <p className="text-blue-100 text-sm">Background checked & trained</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
