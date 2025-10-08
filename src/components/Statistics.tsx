import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Statistics: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const [counts, setCounts] = useState({
    projects: 0,
    satisfaction: 0,
    experience: 0,
    support: 0
  });

  const targetCounts = {
    projects: 500,
    satisfaction: 98,
    experience: 10,
    support: 24
  };

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const stepDuration = duration / steps;

      const animateCount = (key: keyof typeof counts, target: number) => {
        let current = 0;
        const increment = target / steps;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, stepDuration);
      };

      // Start animations with slight delays
      setTimeout(() => animateCount('projects', targetCounts.projects), 0);
      setTimeout(() => animateCount('satisfaction', targetCounts.satisfaction), 200);
      setTimeout(() => animateCount('experience', targetCounts.experience), 400);
      setTimeout(() => animateCount('support', targetCounts.support), 600);
    }
  }, [isInView]);

  const stats = [
    {
      number: counts.projects,
      suffix: "+",
      label: "Projects Completed",
      icon: "🏗️"
    },
    {
      number: counts.satisfaction,
      suffix: "%",
      label: "Satisfied Clients",
      icon: "😊"
    },
    {
      number: counts.experience,
      suffix: "+",
      label: "Years Experience",
      icon: "⭐"
    },
    {
      number: counts.support,
      suffix: "/7",
      label: "Support Available",
      icon: "🛠️"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-brown to-sand text-cream">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
          <p className="text-cream/80 max-w-2xl mx-auto text-sm md:text-base">
            Numbers that speak for our commitment to excellence and customer satisfaction
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 md:p-6"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-cream/80 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
