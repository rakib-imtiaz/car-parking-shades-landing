import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Check, Star } from 'lucide-react';

const Services: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: 1,
      title: "Car Park Shades",
      description: "Premium shading solutions designed to protect vehicles from harsh weather conditions.",
      image: "https://iipg-kw.com/wp-content/uploads/2023/05/Polycarbonate-Parking-Shade.jpg",
      features: [
        "Up to 98% UV Protection",
        "Temperature Reduction",
        "Customizable Designs"
      ],
      popular: true
    },
    {
      id: 2,
      title: "Pergola Shades",
      description: "Elegant outdoor living solutions for your garden or patio area.",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
      features: [
        "Modern Designs",
        "Weather Resistant",
        "Custom Sizes Available"
      ],
      popular: false
    },
    {
      id: 3,
      title: "Sun Shades",
      description: "Versatile shading solutions for any outdoor space.",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
      features: [
        "High-Grade Materials",
        "Easy Maintenance",
        "Professional Installation"
      ],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sand font-semibold text-sm md:text-base">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brown mb-4">Complete Shade Solutions</h2>
          <p className="text-brown/70 max-w-2xl mx-auto text-sm md:text-base">
            We provide comprehensive shading solutions for residential, commercial, and industrial properties across Kuwait.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="bg-white rounded-xl shadow-lg overflow-hidden h-full transition-all duration-300 hover:shadow-xl">
                <div className="relative">
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-sand text-brown px-3 py-1 rounded-full text-xs font-semibold z-10">
                      <Star className="w-3 h-3 inline mr-1" />
                      Most Popular
                    </div>
                  )}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                <CardHeader className="p-4 md:p-6">
                  <CardTitle className="text-lg md:text-xl font-semibold text-brown mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-brown/70 text-sm md:text-base">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent className="p-4 md:p-6 pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-sand flex-shrink-0" />
                        <span className="text-brown/80 text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-sand text-brown py-2 md:py-3 rounded-lg font-semibold hover:bg-brown hover:text-cream transition-all"
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
