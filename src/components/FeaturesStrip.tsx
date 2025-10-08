import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Clock, Wrench, Zap, Users } from 'lucide-react';

const FeaturesStrip: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "UV Protection",
      description: "Up to 98% UV protection",
      color: "text-blue-500"
    },
    {
      icon: Award,
      title: "Quality Materials",
      description: "Premium grade materials",
      color: "text-green-500"
    },
    {
      icon: Clock,
      title: "10+ Years Experience",
      description: "Proven track record",
      color: "text-purple-500"
    },
    {
      icon: Wrench,
      title: "Professional Installation",
      description: "Expert installation team",
      color: "text-orange-500"
    },
    {
      icon: Zap,
      title: "LED Integration",
      description: "Smart lighting solutions",
      color: "text-yellow-500"
    },
    {
      icon: Users,
      title: "500+ Happy Clients",
      description: "Satisfied customers",
      color: "text-pink-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sand font-semibold text-sm md:text-base">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brown mb-4">Our Key Features</h2>
          <p className="text-brown/70 max-w-2xl mx-auto text-sm md:text-base">
            We provide comprehensive solutions with unmatched quality and service
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center p-4 bg-cream rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-sand/20 flex items-center justify-center`}>
                  <IconComponent className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-brown mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-brown/70">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesStrip;
