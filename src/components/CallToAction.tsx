import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Phone, ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-brown to-sand text-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Protect Your Vehicles?
          </h2>
          <p className="text-cream/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your parking shade project. 
            Our experts are ready to help you choose the perfect solution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-cream text-brown hover:bg-white hover:text-brown px-8 py-4 text-lg font-semibold transform hover:-translate-y-1 transition-all duration-300"
            >
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <div className="flex items-center gap-4 text-cream/90">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="font-medium">66995844</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-cream/10 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-2">Free Consultation</h3>
              <p className="text-cream/80 text-sm">
                Get expert advice on the best shading solution for your property
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-cream/10 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-2">Custom Design</h3>
              <p className="text-cream/80 text-sm">
                Tailored solutions that match your property's architecture
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-cream/10 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-2">Professional Installation</h3>
              <p className="text-cream/80 text-sm">
                Expert installation by our experienced team
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
