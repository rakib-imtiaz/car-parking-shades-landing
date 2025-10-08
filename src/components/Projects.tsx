import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Modern LED Parking Solution",
      category: "led modern",
      image: "/images/projects/project_1.png",
      video: "/video/3685071140771175462.mp4",
      description: "Contemporary design with integrated LED lighting and smart controls"
    },
    {
      id: 2,
      title: "Luxury Villa Parking",
      category: "residential modern",
      image: "/images/projects/project_2.png",
      video: "/video/3685101394084621044.mp4",
      description: "Elegant residential parking solution with premium materials"
    },
    {
      id: 3,
      title: "Night Illumination Design",
      category: "led residential",
      image: "/images/projects/project_3.png",
      video: "/video/3711194635042654400.mp4",
      description: "LED lighting system for enhanced night visibility and security"
    },
    {
      id: 4,
      title: "Contemporary LED Solution",
      category: "modern led",
      image: "/images/projects/project_4.png",
      video: "/video/3711206328149819337.mp4",
      description: "Modern design with smart LED integration and weather resistance"
    },
    {
      id: 5,
      title: "Premium Home Parking",
      category: "residential modern",
      image: "/images/projects/project_5.png",
      video: "/video/3727961964187352235.mp4",
      description: "High-end residential parking shade with custom design"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'led', label: 'LED Lighting' },
    { id: 'modern', label: 'Modern Design' },
    { id: 'residential', label: 'Residential' }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category.includes(activeFilter)
  );

  const toggleVideo = (projectId: number) => {
    setPlayingVideo(playingVideo === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground mb-8 text-sm md:text-base max-w-2xl mx-auto">
            Premium car parking shades with integrated LED lighting solutions. 
            Watch our projects in action to see the quality and craftsmanship.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`px-4 md:px-6 py-2 rounded-full transition-all ${
                activeFilter === filter.id 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                  : "bg-background text-foreground hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="group relative overflow-hidden bg-card border border-border hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 md:h-72 overflow-hidden">
                  {playingVideo === project.id ? (
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  
                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      onClick={() => toggleVideo(project.id)}
                      size="lg"
                      className="bg-white/90 text-black hover:bg-white"
                    >
                      {playingVideo === project.id ? (
                        <Pause className="w-6 h-6" />
                      ) : (
                        <Play className="w-6 h-6" />
                      )}
                    </Button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {project.category.split(' ')[0]}
                    </span>
                  </div>
                </div>

                <CardHeader className="p-6">
                  <CardTitle className="text-lg md:text-xl font-semibold text-card-foreground mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 pt-0">
                  <div className="flex items-center justify-between">
                    <Button
                      onClick={() => toggleVideo(project.id)}
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      {playingVideo === project.id ? (
                        <>
                          <Pause className="w-4 h-4" />
                          Pause Video
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4" />
                          Watch Video
                        </>
                      )}
                    </Button>
                    <Button
                      onClick={() => {
                        const element = document.getElementById('contact');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Card className="bg-muted/50 border border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6 text-sm md:text-base max-w-2xl mx-auto">
                Get a free consultation and quote today. Our team will help you design the perfect parking solution for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
                >
                  Get Your Free Quote
                </Button>
                <Button 
                  onClick={() => {
                    const element = document.getElementById('testimonials');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  variant="outline"
                  size="lg"
                  className="px-8 py-3"
                >
                  View Testimonials
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
