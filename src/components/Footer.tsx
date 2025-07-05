
import { Link } from "react-router-dom";
import { Car, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl">ChauffeurIndia</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Making inter-city and intra-city travel easy, comfortable & affordable for everyone in India.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/fleet" className="block text-gray-300 hover:text-white transition-colors">Our Fleet</Link>
              <Link to="/book" className="block text-gray-300 hover:text-white transition-colors">Book Now</Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">About Us</Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <div className="space-y-2 text-gray-300">
              <div>Full Day Car Rental</div>
              <div>Multi-Day Tours</div>
              <div>Airport Transfers</div>
              <div>Corporate Travel</div>
              <div>Wedding Cars</div>
              <div>Outstation Trips</div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="font-medium">+91 98765 43210</div>
                  <div className="text-sm text-gray-400">24/7 Support</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <div>info@chauffeurindia.com</div>
                  <div className="text-sm text-gray-400">Email Support</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <div>Connaught Place</div>
                  <div>New Delhi, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Cities */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <h3 className="font-semibold text-lg mb-4">Popular Cities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 text-sm text-gray-300">
            <Link to="/book?city=Delhi" className="hover:text-white transition-colors">Delhi</Link>
            <Link to="/book?city=Jaipur" className="hover:text-white transition-colors">Jaipur</Link>
            <Link to="/book?city=Agra" className="hover:text-white transition-colors">Agra</Link>
            <Link to="/book?city=Mumbai" className="hover:text-white transition-colors">Mumbai</Link>
            <Link to="/book?city=Bangalore" className="hover:text-white transition-colors">Bangalore</Link>
            <Link to="/book?city=Gurgaon" className="hover:text-white transition-colors">Gurgaon</Link>
            <Link to="/book?city=Noida" className="hover:text-white transition-colors">Noida</Link>
            <Link to="/book?city=Ghaziabad" className="hover:text-white transition-colors">Ghaziabad</Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 ChauffeurIndia. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
