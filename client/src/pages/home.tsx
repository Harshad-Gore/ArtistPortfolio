import { motion } from "framer-motion";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { VideoGallery } from "@/components/ui/video-gallery";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ui/contact-modal";
import { useState, useEffect } from "react";
import { Mail, Phone, Instagram, Video, Lightbulb, Zap, FileText, Menu, X } from "lucide-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
        } else {
          navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.7)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample video data
  const youtubeVideos = [
    {
      id: "1",
      title: "Creative Edit #1",
      description: "Dynamic storytelling with motion graphics",
      thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=338",
      url: "https://youtu.be/MWWMG_qBU50"
    },
    {
      id: "2",
      title: "Creative Edit #2",
      description: "Cinematic color grading and pacing",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=338",
      url: "https://youtu.be/7EuslqHdDUg"
    },
    {
      id: "3",
      title: "Creative Edit #3",
      description: "VFX integration and animation",
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=338",
      url: "https://youtu.be/anmjZV8-qZE"
    },
    {
      id: "4",
      title: "Creative Edit #4",
      description: "Multi-camera editing and transitions",
      thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=338",
      url: "https://youtu.be/-ZxBFT3ixSg"
    },
    {
      id: "5",
      title: "Creative Edit #5",
      description: "Sound design and audio mixing",
      thumbnail: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=338",
      url: "https://youtu.be/g4SXvT3Agrk"
    }
  ];

  const commercialVideos = [
    {
      id: "1",
      title: "Brand Campaign",
      description: "High-impact commercial editing",
      thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=338",
      url: "https://www.instagram.com/p/C_XwUrwsSZs/"
    },
    {
      id: "2",
      title: "Product Launch",
      description: "Dynamic product showcase",
      thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=338",
      url: "https://www.instagram.com/p/DALVPYky00j/"
    },
    {
      id: "3",
      title: "Corporate Video",
      description: "Professional brand storytelling",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=338",
      url: "https://drive.google.com/drive/folders/10yPGlZrZQmPzXcx5W0r0Nl_24tSIPzCm"
    }
  ];

  const reelsVideos = [
    {
      id: "1",
      title: "Viral Reel",
      description: "Quick-cut editing style",
      thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=533",
      url: "https://www.youtube.com/shorts/sT17F1BvvXg",
      isVertical: true
    },
    {
      id: "2",
      title: "Trending Short",
      description: "Catchy transitions",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=533",
      url: "https://www.instagram.com/reel/CyI4xTsvgDv/",
      isVertical: true
    },
    {
      id: "3",
      title: "Creative Short",
      description: "Animated text overlays",
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=533",
      url: "https://drive.google.com/file/d/1dUAntYz3mjCU_2-1dD_lkcCLAAMre6j8/view",
      isVertical: true
    },
    {
      id: "4",
      title: "Promo Reel",
      description: "Brand integration",
      thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=533",
      url: "#",
      isVertical: true
    }
  ];

  const realEstateVideos = [
    {
      id: "1",
      title: "Luxury Home Tour",
      description: "Cinematic property showcase",
      thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=338",
      url: "https://drive.google.com/file/d/1ow_zuGhR3HXHd7GGxH3JsIQfCj_UF_zh/view"
    },
    {
      id: "2",
      title: "Modern Apartment",
      description: "Smooth aerial transitions",
      thumbnail: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=338",
      url: "https://drive.google.com/file/d/1oVJ3SzmZrtHJPtKjTR5uB2A7gLk2F5xl/view"
    },
    {
      id: "3",
      title: "Commercial Space",
      description: "Professional presentation",
      thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=338",
      url: "https://drive.google.com/file/d/1-a5SRQhH35fcPyYM8dKll_CUETukoF7h/view"
    }
  ];

  const weddingVideos = [
    {
      id: "1",
      title: "Ceremony Highlight",
      description: "Emotional storytelling",
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=338",
      url: "https://www.instagram.com/p/DJtmzgNsRj8/"
    },
    {
      id: "2",
      title: "Reception Moments",
      description: "Joyful celebrations",
      thumbnail: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=338",
      url: "https://www.instagram.com/p/DGD5YLTyHU0/"
    },
    {
      id: "3",
      title: "Love Story",
      description: "Romantic cinematography",
      thumbnail: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=338",
      url: "https://www.instagram.com/p/C-i4SpyMNKQ/"
    }
  ];

  const standUpVideos = [
    {
      id: "1",
      title: "Comedy Special",
      description: "Multi-camera live performance",
      thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=338",
      url: "https://drive.google.com/file/d/1WyEn7SwDsEfi6-TAf9QL2YCi1PZXmfYw/view"
    },
    {
      id: "2",
      title: "Open Mic Night",
      description: "Intimate venue capture",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=338",
      url: "https://drive.google.com/file/d/1QdSgWOSbl7Ce-CGB76Hzkj8p1UN3nSxe/view"
    }
  ];

  const fitnessVideos = [
    {
      id: "1",
      title: "Workout Reel",
      description: "High-energy editing",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=533",
      url: "https://www.instagram.com/befitwithritvik/reel/DITr2JEC7qR/",
      isVertical: true
    },
    {
      id: "2",
      title: "Training Tips",
      description: "Educational content",
      thumbnail: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=533",
      url: "https://www.instagram.com/befitwithritvik/reel/DIwMldtiUds/",
      isVertical: true
    },
    {
      id: "3",
      title: "Transformation",
      description: "Motivational stories",
      thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=533",
      url: "https://www.instagram.com/befitwithritvik/reel/DHaD4KBTmTH/",
      isVertical: true
    }
  ];

  const surveyVideos = [
    {
      id: "1",
      title: "Street Survey",
      description: "Public opinion capture",
      thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=338",
      url: "https://drive.google.com/file/d/1CMGnzK3cM4SrrtETnH23xAh9BZixSGn5/view"
    },
    {
      id: "2",
      title: "Interview Series",
      description: "Structured conversations",
      thumbnail: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=338",
      url: "https://drive.google.com/file/d/1Ckyk8ieUupvay0xJ4VYxDWags8c7Wc6z/view"
    },
    {
      id: "3",
      title: "Market Research",
      description: "Data-driven content",
      thumbnail: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=338",
      url: "https://drive.google.com/file/d/1Qd4cvgwMM9phjKVvHweSSL6JvyprST1v/view"
    }
  ];

  const documentaryVideos = [
    {
      id: "1",
      title: "Social Impact",
      description: "Compelling human stories",
      thumbnail: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=338",
      url: "https://drive.google.com/file/d/1tJrYB3br2C1QlHGbpmfjgRWCytDSy10q/view"
    },
    {
      id: "2",
      title: "Cultural Heritage",
      description: "Preserving traditions",
      thumbnail: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=338",
      url: "https://drive.google.com/file/d/11zMy9tNd5FSUlIkEvA7fpLhKtCULvDmn/view"
    }
  ];

  const services = [
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing with attention to pacing, color grading, and storytelling flow."
    },
    {
      icon: Lightbulb,
      title: "Motion Graphics",
      description: "Dynamic motion graphics and animations that bring your content to life."
    },
    {
      icon: Zap,
      title: "VFX & Animation",
      description: "Advanced visual effects and 3D animation for cinematic storytelling."
    },
    {
      icon: FileText,
      title: "Brand Consulting",
      description: "Strategic brand guidance and visual identity development for content creators."
    }
  ];

  const tools = [
    { name: "Adobe Premiere Pro", icon: "/Adobe_Premiere_Pro_CC_icon.svg_1751802886527.png" },
    { name: "Adobe After Effects", icon: "/Adobe_After_Effects_CC_icon.svg_1751802886526.png" },
    { name: "DaVinci Resolve", icon: "/DaVinci_Resolve_Studio_1751802886524.png" },
    { name: "Blender", icon: "/Blender_logo_no_text.svg_1751802886528.png" }
  ];

  const creators = [
    { name: "KIND", subscribers: "3.2M", icon: "K" },
    { name: "Vaad", subscribers: "849K", icon: "V" },
    { name: "Jimmy 7", subscribers: "728K", icon: "J7" },
    { name: "Apna Advantage", subscribers: "46K", icon: "AA" },
    { name: "SHOWMAN AF", subscribers: "46K", icon: "SA" }
  ];

  const navigationItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <div className="bg-[hsl(0,0%,4%)] text-[hsl(0,0%,98%)]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-[hsl(15,100%,60%)]/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl">
              <span className="text-[hsl(15,100%,60%)]">K</span>unal <span className="text-[hsl(15,100%,60%)]">G</span>arud
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-[hsl(15,100%,60%)] transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4 space-y-4"
            >
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block hover:text-[hsl(15,100%,60%)] transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* About Me Section */}
      <SectionWrapper id="about">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-bold text-4xl lg:text-5xl mb-8">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-lg lg:text-xl text-[hsl(0,0%,40%)] leading-relaxed mb-12">
                I'm a passionate Video Editor and Visual Artist, constantly upskilling in the realms of video editing, motion graphics, VFX, animation, and storytelling. With a keen eye for detail and a strong narrative sense, I elevate content through compelling visuals and impactful storytelling that connects with audiences.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="font-bold text-2xl mb-8">Tools I Use</h3>
              <div className="grid grid-cols-2 gap-8">
                {tools.map((tool) => (
                  <motion.div
                    key={tool.name}
                    whileHover={{ scale: 1.05 }}
                    className="glass-morphism p-6 rounded-xl text-center cursor-pointer"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center">
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="font-semibold">{tool.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Services Section */}
      <SectionWrapper id="services">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-bold text-4xl lg:text-5xl text-center mb-16">
            My <span className="gradient-text">Services</span>
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-morphism p-8 rounded-2xl group cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[hsl(15,100%,60%)] to-[hsl(15,100%,65%)] rounded-xl flex items-center justify-center mb-6 group-hover:animate-pulse">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-4">{service.title}</h3>
                <p className="text-[hsl(0,0%,40%)]">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Creators I've Worked With */}
      <SectionWrapper id="creators">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-bold text-4xl lg:text-5xl text-center mb-16">
            Creators I've <span className="gradient-text">Worked With</span>
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            className="grid md:grid-cols-3 lg:grid-cols-5 gap-8"
          >
            {creators.map((creator, index) => (
              <motion.div
                key={creator.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-morphism p-6 rounded-2xl text-center cursor-pointer"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[hsl(15,100%,60%)] to-[hsl(15,100%,65%)] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{creator.icon}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{creator.name}</h3>
                <p className="text-[hsl(15,100%,60%)] font-semibold">{creator.subscribers}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* YouTube Edits Section */}
      <SectionWrapper id="work">
        <div className="max-w-7xl mx-auto px-6">
          <VideoGallery
            videos={youtubeVideos}
            title="YouTube Edits"
            horizontal={true}
          />
        </div>
      </SectionWrapper>

      {/* Commercials Section */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6">
          <VideoGallery
            videos={commercialVideos}
            title="Commercial Work"
          />
        </div>
      </SectionWrapper>

      {/* Reels / Shorts Section */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6">
          <VideoGallery
            videos={reelsVideos}
            title="Reels & Shorts"
            horizontal={true}
          />
        </div>
      </SectionWrapper>

      {/* Real Estate Section */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6">
          <VideoGallery
            videos={realEstateVideos}
            title="Real Estate"
          />
        </div>
      </SectionWrapper>

      {/* Wedding Films Section */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6">
          <VideoGallery
            videos={weddingVideos}
            title="Wedding Films"
          />
        </div>
      </SectionWrapper>

      {/* Stand-Up Section */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6">
          <VideoGallery
            videos={standUpVideos}
            title="Stand-Up Comedy"
          />
        </div>
      </SectionWrapper>

      {/* Fitness Section */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6">
          <VideoGallery
            videos={fitnessVideos}
            title="Fitness Content"
          />
        </div>
      </SectionWrapper>

      {/* SBI SPELLBEE Campaign */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-bold text-4xl lg:text-5xl mb-16">
            SBI <span className="gradient-text">SPELLBEE</span> Campaign
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="glass-morphism rounded-2xl p-8 cursor-pointer"
          >
            <div className="rounded-xl mb-6 flex items-center justify-center h-96 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450"
                alt="SBI SPELLBEE educational campaign"
                className="rounded-xl w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h3 className="font-bold text-2xl mb-4">Educational Campaign</h3>
            <p className="text-[hsl(0,0%,40%)] text-lg">
              Complete brand campaign production with motion graphics and educational content design
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Survey Videos Section */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6">
          <VideoGallery
            videos={surveyVideos}
            title="Survey Videos"
          />
        </div>
      </SectionWrapper>

      {/* Documentary Section */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6">
          <VideoGallery
            videos={documentaryVideos}
            title="Documentary Films"
          />
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper id="contact">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl lg:text-5xl mb-8">
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="text-xl text-[hsl(0,0%,40%)]">Ready to bring your vision to life? Get in touch!</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-morphism rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(15,100%,60%)] to-[hsl(15,100%,65%)] rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg">Email</p>
                  <a
                    href="mailto:kunalgarud2@gmail.com"
                    className="text-[hsl(15,100%,60%)] hover:text-[hsl(15,100%,65%)] transition-colors"
                  >
                    kunalgarud2@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(15,100%,60%)] to-[hsl(15,100%,65%)] rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg">Phone</p>
                  <a
                    href="tel:+919579073855"
                    className="text-[hsl(15,100%,60%)] hover:text-[hsl(15,100%,65%)] transition-colors"
                  >
                    +91 9579073855
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(15,100%,60%)] to-[hsl(15,100%,65%)] rounded-full flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg">Instagram</p>
                  <a
                    href="https://www.instagram.com/kunaalgarud/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[hsl(15,100%,60%)] hover:text-[hsl(15,100%,65%)] transition-colors"
                  >
                    @kunaalgarud
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <footer className="py-12 border-t border-[hsl(15,100%,60%)]/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[hsl(0,0%,40%)]">© 2025 Kunal Garud | All Rights Reserved</p>
        </div>
      </footer>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
