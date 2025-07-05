
import Hero from "@/components/Hero";
import SearchForm from "@/components/SearchForm";
import FeaturedCities from "@/components/FeaturedCities";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <SearchForm />
      <FeaturedCities />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Index;
