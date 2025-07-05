
import { useState } from "react";
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
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });

    console.log("Contact Form Data:", formData);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
      description: "Available 24/7 for urgent queries"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@chauffeurindia.com", "support@chauffeurindia.com"],
      description: "We respond within 4 hours"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["Connaught Place", "New Delhi, India 110001"],
      description: "Visit us Monday to Friday"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 8:00 PM", "Sat - Sun: 10:00 AM - 6:00 PM"],
      description: "Customer support available 24/7"
    }
  ];

  const subjects = [
    "General Inquiry",
    "Booking Support",
    "Driver Feedback",
    "Billing Question",
    "Fleet Partnership",
    "Corporate Services",
    "Technical Issue",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help you 24/7. 
            Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <p className="text-gray-600">Fill out the form below and we'll get back to you soon.</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => updateFormData("name", e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select value={formData.subject} onValueChange={(value) => updateFormData("subject", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem key={subject} value={subject}>
                          {subject}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => updateFormData("message", e.target.value)}
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 font-medium">{detail}</p>
                        ))}
                        <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-red-50 border-red-200 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-red-800 mb-4">Emergency Contact</h3>
                <p className="text-red-700 mb-4">
                  If you're currently on a trip and need immediate assistance:
                </p>
                <div className="space-y-2">
                  <p className="text-lg font-bold text-red-800">📞 +91 98765 43210</p>
                  <p className="text-red-600">Available 24/7 for emergencies</p>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="shadow-lg">
              <CardContent className="p-0">
                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Office Location Map</p>
                    <p className="text-sm text-gray-500">Connaught Place, New Delhi</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Quick Answers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">How quickly do you respond?</h3>
                  <p className="text-gray-600 text-sm">We respond to all inquiries within 4 hours during business hours and within 24 hours on weekends.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Can I modify my booking?</h3>
                  <p className="text-gray-600 text-sm">Yes, you can modify your booking up to 24 hours before the pickup time. Contact us for assistance.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Do you provide receipts?</h3>
                  <p className="text-gray-600 text-sm">Yes, we provide detailed receipts for all bookings. You can also download them from your booking dashboard.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">What about corporate partnerships?</h3>
                  <p className="text-gray-600 text-sm">We offer special rates for corporate clients. Contact us to discuss volume discounts and enterprise solutions.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
