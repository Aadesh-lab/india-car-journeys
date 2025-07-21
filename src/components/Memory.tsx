import { Card, CardContent } from "@/components/ui/card";

const Memory = () => {
  const memories = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
      customerName: "Rajesh & Family",
      location: "Delhi to Agra",
      story: "Amazing 2-day trip to see the Taj Mahal. Our driver Suresh was fantastic and showed us hidden gems!"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop",
      customerName: "Priya Sharma",
      location: "Jaipur City Tour", 
      story: "Explored the Pink City in comfort. The car was spotless and driver very knowledgeable about history."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop",
      customerName: "Mumbai Corporate Team",
      location: "Mumbai Business Tour",
      story: "Booked for our client meetings across the city. Professional service and always on time!"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=400&h=300&fit=crop",
      customerName: "Sarah & John",
      location: "Golden Triangle Tour",
      story: "5-day trip covering Delhi-Agra-Jaipur. Incredible journey with memories to last a lifetime!"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Precious Memories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories and beautiful moments shared by our customers during their unforgettable journeys
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {memories.map((memory) => (
            <Card key={memory.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={memory.image}
                  alt={memory.location}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-sm">{memory.customerName}</h3>
                  <p className="text-xs opacity-90">{memory.location}</p>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  "{memory.story}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Share your travel memories with us!
          </p>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            Upload Your Photos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Memory;