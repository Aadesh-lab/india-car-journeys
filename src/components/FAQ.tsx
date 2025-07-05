
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What's included in the daily rental price?",
      answer: "Our daily rental includes: Professional chauffeur, fuel for up to 80km per day, tolls and parking charges, vehicle insurance, and 24/7 customer support. Additional kilometers are charged separately."
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 2-3 days in advance for day trips and 1 week in advance for multi-day tours, especially during peak tourist seasons (October-March)."
    },
    {
      question: "Are your drivers verified and trained?",
      answer: "Yes, all our drivers undergo thorough background verification, have valid licenses with 5+ years experience, speak basic English, and are trained in customer service and local tourism knowledge."
    },
    {
      question: "What if I need to extend my trip duration?",
      answer: "You can extend your trip subject to driver and vehicle availability. Additional days will be charged at the same daily rate. Please inform us at least 4 hours in advance."
    },
    {
      question: "Do you provide outstation trips?",
      answer: "Yes, we specialize in outstation trips including popular routes like Delhi-Agra-Jaipur (Golden Triangle), Delhi-Shimla, Mumbai-Goa, and custom multi-city tours across India."
    },
    {
      question: "What are your cancellation policies?",
      answer: "Free cancellation up to 24 hours before pickup. 50% refund for cancellations 12-24 hours before. No refund for cancellations within 12 hours of pickup time."
    },
    {
      question: "Do you operate during night hours?",
      answer: "Yes, our services are available 24/7. However, for safety reasons, we recommend starting outstation trips early morning and avoid night driving on highways."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major payment methods including UPI, credit/debit cards, net banking, Paytm, Google Pay, and cash. Advance booking requires 25% payment, with balance payable after trip completion."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Got questions? We've got answers. Find everything you need to know about our services.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm border">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <span className="font-medium text-gray-800">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <div className="space-y-2">
            <p className="text-lg font-semibold text-blue-600">Call us: +91 98765 43210</p>
            <p className="text-sm text-gray-500">Available 24/7 for your assistance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
