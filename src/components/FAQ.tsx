import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const FAQ: React.FC = () => {
  const faqs = [
    {
      id: 1,
      question: "How long does installation take?",
      answer: "Installation time varies depending on the project size, typically ranging from 2-5 days for standard installations. Complex projects may take longer."
    },
    {
      id: 2,
      question: "What materials do you use?",
      answer: "We use high-quality polycarbonate sheets, galvanized steel frames, and UV-resistant materials that provide up to 98% UV protection and are weather-resistant."
    },
    {
      id: 3,
      question: "Do you provide warranties?",
      answer: "Yes, we provide comprehensive warranties on all our installations. Our materials come with manufacturer warranties, and we offer installation warranties for our workmanship."
    },
    {
      id: 4,
      question: "Can you customize designs?",
      answer: "Absolutely! We specialize in custom designs that match your property's architecture and your specific requirements. Our design team works closely with you to create the perfect solution."
    },
    {
      id: 5,
      question: "What areas do you serve?",
      answer: "We serve all areas of Kuwait, including Kuwait City, Hawalli, Farwaniya, Ahmadi, and surrounding areas. We provide free site visits and consultations."
    },
    {
      id: 6,
      question: "Do you offer maintenance services?",
      answer: "Yes, we provide regular maintenance services to ensure your parking shades remain in excellent condition. This includes cleaning, inspection, and minor repairs."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sand font-semibold text-sm md:text-base">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brown mb-4">Frequently Asked Questions</h2>
          <p className="text-brown/70 max-w-2xl mx-auto text-sm md:text-base">
            Find answers to common questions about our services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={`item-${faq.id}`}
                  className="bg-white rounded-lg shadow-md border-0"
                >
                  <AccordionTrigger className="px-6 py-4 text-brown font-semibold hover:text-sand transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-brown/70 text-sm md:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
