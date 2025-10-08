import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    { id: 1, src: "/images/projects/project_1.png", title: "Modern LED Parking Solution", category: "LED Lighting" },
    { id: 2, src: "/images/projects/project_2.png", title: "Luxury Villa Parking", category: "Residential" },
    { id: 3, src: "/images/projects/project_3.png", title: "Night Illumination Design", category: "LED Lighting" },
    { id: 4, src: "/images/projects/project_4.png", title: "Contemporary LED Solution", category: "Modern Design" },
    { id: 5, src: "/images/projects/project_5.png", title: "Premium Home Parking", category: "Residential" },
    { id: 6, src: "/images/projects/project_6.png", title: "Smart LED Integration", category: "LED Lighting" },
    { id: 7, src: "/images/projects/project_7.png", title: "Villa LED Solution", category: "Residential" },
    { id: 8, src: "/images/projects/project_8.png", title: "Elegant Home Design", category: "Modern Design" },
    { id: 9, src: "/images/projects/project_9.png", title: "Custom Design Shade", category: "Custom Design" },
    { id: 10, src: "/images/projects/project_10.png", title: "Commercial Solution", category: "Commercial" },
    { id: 11, src: "/images/projects/project_11.png", title: "Innovative Design", category: "Modern Design" },
    { id: 12, src: "/images/projects/project_12.png", title: "Premium Installation", category: "Premium" }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

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
          <span className="text-sand font-semibold text-sm md:text-base">Project Gallery</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brown mb-4">Our Work Speaks for Itself</h2>
          <p className="text-brown/70 max-w-2xl mx-auto text-sm md:text-base">
            Browse through our portfolio of completed projects and see the quality of our work
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onClick={() => openModal(index)}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            >
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-white font-semibold text-sm mb-1">{image.title}</h3>
                  <p className="text-white/80 text-xs">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={galleryImages[currentIndex].src} 
                alt={galleryImages[currentIndex].title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="absolute top-4 right-4">
                <button
                  onClick={closeModal}
                  className="w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded">
                <h3 className="text-lg font-semibold mb-1">{galleryImages[currentIndex].title}</h3>
                <p className="text-sm opacity-80">{galleryImages[currentIndex].category}</p>
              </div>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
