import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Instagram } from 'lucide-react';

const InstagramFeed: React.FC = () => {
  const instagramPosts = [
    { id: 1, image: "/images/projects/project_1.png", alt: "LED Parking Shade" },
    { id: 2, image: "/images/projects/project_2.png", alt: "Luxury Villa Parking" },
    { id: 3, image: "/images/projects/project_3.png", alt: "Night View LED Parking" },
    { id: 4, image: "/images/projects/project_4.png", alt: "Commercial Parking Shade" },
    { id: 5, image: "/images/projects/project_5.png", alt: "Modern Design Shade" },
    { id: 6, image: "/images/projects/project_6.png", alt: "Residential Parking Solution" },
    { id: 7, image: "/images/projects/project_7.png", alt: "Custom Design Shade" },
    { id: 8, image: "/images/projects/project_8.png", alt: "Premium Parking Structure" },
    { id: 9, image: "/images/projects/project_9.png", alt: "Elegant Shade Design" },
    { id: 10, image: "/images/projects/project_10.png", alt: "Modern Parking Solution" },
    { id: 11, image: "/images/projects/project_11.png", alt: "Innovative Shade Design" },
    { id: 12, image: "/images/projects/project_12.png", alt: "Premium Shade Installation" }
  ];

  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sand font-semibold text-sm md:text-base">Follow Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brown mb-4">@mdnil.chan</h2>
          <p className="text-brown/70 mb-8 text-sm md:text-base">
            Follow us on Instagram for latest updates and projects
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/mdnil.chan/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <img 
                src={post.image} 
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <Instagram className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" />
                  <p className="text-xs md:text-sm font-medium">Follow @mdnil.chan</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Instagram Follow Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            asChild
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white px-6 md:px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            <a 
              href="https://www.instagram.com/mdnil.chan/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              <span className="font-medium text-sm md:text-base">Follow @mdnil.chan</span>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;
