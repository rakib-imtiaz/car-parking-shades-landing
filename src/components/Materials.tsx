import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Droplets, Thermometer, Wrench, CheckCircle } from 'lucide-react';

const Materials: React.FC = () => {
  const materials = [
    {
      icon: Shield,
      title: "Polycarbonate Sheets",
      description: "High-quality polycarbonate sheets that provide excellent UV protection and durability",
      features: ["98% UV Protection", "Impact Resistant", "Weather Proof", "10+ Year Warranty"]
    },
    {
      icon: Wrench,
      title: "Galvanized Steel Frames",
      description: "Robust steel frames that ensure structural integrity and long-lasting performance",
      features: ["Corrosion Resistant", "High Strength", "Easy Installation", "Low Maintenance"]
    },
    {
      icon: Droplets,
      title: "Waterproof Design",
      description: "Advanced waterproofing technology to protect your vehicles from all weather conditions",
      features: ["Complete Waterproof", "Drainage System", "Mold Resistant", "Easy Cleaning"]
    },
    {
      icon: Thermometer,
      title: "Temperature Control",
      description: "Specialized materials that help reduce temperature and create a comfortable environment",
      features: ["Heat Reduction", "Ventilation", "Energy Efficient", "Comfortable Shade"]
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sand font-semibold text-sm md:text-base">Premium Materials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brown mb-4">Quality That Lasts</h2>
          <p className="text-brown/70 max-w-2xl mx-auto text-sm md:text-base">
            We use only the finest materials to ensure your parking shade stands the test of time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {materials.map((material, index) => {
            const IconComponent = material.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-cream rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sand rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-brown" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-brown mb-3">
                      {material.title}
                    </h3>
                    <p className="text-brown/70 mb-4 text-sm md:text-base">
                      {material.description}
                    </p>
                    <ul className="space-y-2">
                      {material.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-sand flex-shrink-0" />
                          <span className="text-brown/80 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Materials;
