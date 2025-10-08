import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Al-Salem",
      role: "Residential Client",
      content: "Excellent service and quality. The team was professional and completed the installation ahead of schedule. Very satisfied with the results.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      id: 2,
      name: "Sarah Al-Rashid",
      role: "Commercial Client",
      content: "The LED lighting integration is fantastic. Our parking area looks modern and feels much safer at night. Great investment!",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      id: 3,
      name: "Mohammad Al-Qasim",
      role: "Villa Owner",
      content: "The design team was very helpful in customizing the shade to match our villa's architecture. Highly recommend their services.",
      rating: 5,
      avatar: "👨‍🏠"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sand font-semibold text-sm md:text-base">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brown mb-4">What Our Clients Say</h2>
          <p className="text-brown/70 max-w-2xl mx-auto text-sm md:text-base">
            Hear from our satisfied customers about their experience with our car parking shade solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-cream rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-sand/20 flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brown">{testimonial.name}</h4>
                  <p className="text-brown/70 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-sand text-sand" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-6 h-6 text-sand/30" />
                <p className="text-brown/80 text-sm md:text-base italic pl-4">
                  "{testimonial.content}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
