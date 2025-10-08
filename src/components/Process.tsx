import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Palette, Settings, CheckCircle } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Consultation",
      description: "Initial meeting to understand your requirements and site conditions",
      icon: MessageCircle,
      color: "text-sand"
    },
    {
      id: 2,
      title: "Design",
      description: "Custom design proposal based on your preferences and requirements",
      icon: Palette,
      color: "text-sand"
    },
    {
      id: 3,
      title: "Manufacturing",
      description: "Production using high-quality materials and precise specifications",
      icon: Settings,
      color: "text-sand"
    },
    {
      id: 4,
      title: "Installation",
      description: "Professional installation by our experienced team",
      icon: CheckCircle,
      color: "text-sand"
    }
  ];

  return (
    <section id="process" className="py-16 md:py-20 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sand font-semibold text-sm md:text-base">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brown mb-4">How We Work</h2>
          <p className="text-brown/70 max-w-2xl mx-auto text-sm md:text-base">
            Our streamlined process ensures a smooth experience from consultation to installation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-sand text-brown rounded-full flex items-center justify-center text-xl font-bold mb-4">
                      {step.id}
                    </div>
                    <IconComponent className={`w-8 h-8 ${step.color} mb-3`} />
                    <h3 className="text-lg md:text-xl font-semibold text-brown mb-3">
                      {step.title}
                    </h3>
                    <p className="text-brown/70 text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-sand/30 -translate-y-1/2 z-0">
                    <div className="absolute right-0 top-1/2 w-2 h-2 bg-sand rounded-full -translate-y-1/2"></div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
