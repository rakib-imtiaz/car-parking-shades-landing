import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Instagram } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const brandVideos = [
    '/video/brand_video_1.mp4',
    '/video/brand_video_2.mp4',
    '/video/brand_video_3.mp4'
  ];

  const openInstagram = () => {
    window.open('https://www.instagram.com/mdnil.chan/', '_blank');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % brandVideos.length);
        setIsTransitioning(false);
      }, 500); // Half of transition duration
    }, 8000); // Change video every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Videos */}
      <div className="absolute inset-0">
        {brandVideos.map((video, index) => (
          <motion.video
            key={index}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentVideoIndex ? 1 : 0,
              scale: isTransitioning ? 1.05 : 1
            }}
            transition={{ 
              duration: 1,
              ease: "easeInOut"
            }}
          >
            <source src={video} type="video/mp4" />
          </motion.video>
        ))}
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
          >
            Premium Car Parking Solutions
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Kuwait's Leading Shade Manufacturer with 10+ Years of Excellence
          </motion.p>

          {/* Instagram Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <Button
              onClick={openInstagram}
              className="bg-transparent border-2 border-white text-white hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:border-transparent hover:text-white px-6 py-3 font-semibold transition-all duration-300"
            >
              <Instagram className="w-4 h-4 mr-2" />
              Contact us
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Video Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {brandVideos.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentVideoIndex(index);
                  setIsTransitioning(false);
                }, 500);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentVideoIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
