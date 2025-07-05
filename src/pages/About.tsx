
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Car, Award, Clock, MapPin } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "All our drivers are background verified with 5+ years of experience. Every vehicle is regularly maintained and sanitized."
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "We put our customers first. From booking to drop-off, we ensure a seamless and comfortable experience."
    },
    {
      icon: Car,
      title: "Quality Fleet",
      description: "Our diverse fleet ranges from budget-friendly sedans to luxury vehicles, all well-maintained and comfortable."
    },
    {
      icon: Award,
      title: "Trusted Service",
      description: "With thousands of satisfied customers and a 4.8-star rating, we've earned trust across India."
    }
  ];

  const stats = [
    { number: "50,000+", label: "Happy Customers" },
    { number: "1,000+", label: "Verified Drivers" },
    { number: "100+", label: "Cities Covered" },
    { number: "5+", label: "Years of Service" }
  ];

  const team = [
    {
      name: "Amit Sharma",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "15+ years in travel and logistics industry"
    },
    {
      name: "Priya Gupta",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1494790108755-2616c5e9b8eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Expert in fleet management and customer service"
    },
    {
      name: "Rajesh Kumar",
      role: "Technology Head",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Building technology solutions for seamless travel"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Indian highway"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About ChauffeurIndia</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Making inter-city and intra-city travel easy, comfortable & affordable for everyone in India
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We started ChauffeurIndia with a simple vision: to provide safe, reliable, and comfortable 
                chauffeur services across India. Whether you're a tourist exploring the Golden Triangle or 
                a business professional attending meetings across the city, we ensure your journey is 
                stress-free and enjoyable.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment goes beyond just transportation. We're building a platform that connects 
                travelers with trusted drivers, eliminates surge pricing frustrations, and makes 
                multi-day trips accessible to everyone.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Beautiful Indian landscape"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything we do is guided by these fundamental principles that shape our service and culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-blue-100">Trusted by thousands across India</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to revolutionizing travel in India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose ChauffeurIndia?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <Clock className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock customer support for any assistance during your journey.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Shield className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Verified Drivers</h3>
                <p className="text-gray-600">All drivers are background checked, trained, and experienced professionals.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Pan India Coverage</h3>
                <p className="text-gray-600">Extensive coverage across major cities and tourist destinations.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Car className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Quality Fleet</h3>
                <p className="text-gray-600">Well-maintained, clean, and comfortable vehicles for all your needs.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Award className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">No hidden charges, no surge pricing. Fixed rates you can trust.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Users className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Trusted by Thousands</h3>
                <p className="text-gray-600">High customer satisfaction with thousands of completed trips.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
