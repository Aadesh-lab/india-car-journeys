
import Hero from "@/components/Hero";
import SearchForm from "@/components/SearchForm";
import FeaturedCities from "@/components/FeaturedCities";
import WhyChooseUs from "@/components/WhyChooseUs";
import Memory from "@/components/Memory";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <SearchForm />
      <FeaturedCities />
      <WhyChooseUs />
      <Memory />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Index;
