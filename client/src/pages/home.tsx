import { motion } from "framer-motion";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { VideoGallery } from "@/components/ui/video-gallery";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ui/contact-modal";
import { useState, useEffect } from "react";
import { Mail, Phone, Instagram, Video, Lightbulb, Zap, FileText, Menu, X, Film, Palette, Sparkles, TrendingUp } from "lucide-react";

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

  // YouTube video data with authentic thumbnails
  const youtubeVideos = [
    {
      id: "1",
      title: "Professional video editing showcase",
      description: "YouTube video featuring advanced editing techniques",
      thumbnail: "https://img.youtube.com/vi/MWWMG_qBU50/hqdefault.jpg",
      url: "https://youtu.be/MWWMG_qBU50?si=4K8VVp0ObfXqa12v"
    },
    {
      id: "2",
      title: "Cinematic storytelling and editing",
      description: "Creative narrative video production",
      thumbnail: "https://img.youtube.com/vi/7EuslqHdDUg/hqdefault.jpg",
      url: "https://youtu.be/7EuslqHdDUg?si=un_tGQqVGXMWbjHk"
    },
    {
      id: "3",
      title: "Creative visual effects and animation",
      description: "Advanced VFX and motion graphics showcase",
      thumbnail: "https://img.youtube.com/vi/anmjZV8-qZE/hqdefault.jpg",
      url: "https://youtu.be/anmjZV8-qZE?si=8Yc-mGDT2EPxzGLs"
    },
    {
      id: "4",
      title: "Advanced editing techniques",
      description: "Professional post-production workflow",
      thumbnail: "https://img.youtube.com/vi/-ZxBFT3ixSg/hqdefault.jpg",
      url: "https://youtu.be/-ZxBFT3ixSg?si=BWzZZTvrXFz9kRj5"
    },
    {
      id: "5",
      title: "Professional audio and video editing",
      description: "Complete multimedia production showcase",
      thumbnail: "https://img.youtube.com/vi/g4SXvT3Agrk/hqdefault.jpg",
      url: "https://youtu.be/g4SXvT3Agrk?si=frbO4ivR6IQzot1F"
    }
  ];

  const commercialVideos = [
    {
      id: "1",
      title: "Coffee brand commercial campaign",
      description: "COFFEA - Brew On the Rocks creative content",
      thumbnail: "/commercial-coffea.png",
      url: "https://www.instagram.com/p/C_XwUrwsSZs/"
    },
    {
      id: "2", 
      title: "Restaurant brand commercial",
      description: "BISTRO by PIZZAWALA promotional content",
      thumbnail: "/commercial-bistro.png",
      url: "https://www.instagram.com/p/DALVPYky00j/"
    }
  ];

  const sbiSpellbeeVideos = [
    {
      id: "1",
      title: "SBI SPELLBEE Campaign",
      description: "Educational competition promotional content",
      thumbnail: "/sbi-spellbee-thumb.png",
      url: "https://drive.google.com/drive/folders/10yPGlZrZQmPzXcx5W0r0Nl_24tSIPzCm?usp=sharing"
    }
  ];

  const reelsVideos = [
    {
      id: "1",
      title: "YouTube Shorts editing",
      description: "Professional short-form content creation",
      thumbnail: "https://img.youtube.com/vi/sT17F1BvvXg/hqdefault.jpg",
      url: "https://www.youtube.com/shorts/sT17F1BvvXg",
      isVertical: true
    },
    {
      id: "2",
      title: "YouTube Shorts editing",
      description: "Engaging vertical video content",
      thumbnail: "https://img.youtube.com/vi/eLUtgS3w1AQ/hqdefault.jpg",
      url: "https://www.youtube.com/shorts/eLUtgS3w1AQ",
      isVertical: true
    },
    {
      id: "3",
      title: "YouTube Shorts editing",
      description: "Creative short-form storytelling",
      thumbnail: "https://img.youtube.com/vi/jFIp5cIDFws/hqdefault.jpg",
      url: "https://www.youtube.com/shorts/jFIp5cIDFws",
      isVertical: true
    },
    {
      id: "4",
      title: "YouTube Shorts editing",
      description: "Dynamic vertical video production",
      thumbnail: "https://img.youtube.com/vi/5_pJi_67NuM/hqdefault.jpg",
      url: "https://www.youtube.com/shorts/5_pJi_67NuM",
      isVertical: true
    },
    {
      id: "5",
      title: "YouTube Shorts editing",
      description: "Professional mobile-first content",
      thumbnail: "https://img.youtube.com/vi/-Pkhr_wQ5Qw/hqdefault.jpg",
      url: "https://www.youtube.com/shorts/-Pkhr_wQ5Qw",
      isVertical: true
    },
    {
      id: "6",
      title: "YouTube Shorts editing",
      description: "Viral short-form video creation",
      thumbnail: "https://img.youtube.com/vi/2rKh2wSEgq8/hqdefault.jpg",
      url: "https://www.youtube.com/shorts/2rKh2wSEgq8",
      isVertical: true
    },
    {
      id: "7",
      title: "YouTube Shorts editing",
      description: "Compelling vertical storytelling",
      thumbnail: "https://img.youtube.com/vi/a2By4F2K-F0/hqdefault.jpg",
      url: "https://www.youtube.com/shorts/a2By4F2K-F0",
      isVertical: true
    },
    {
      id: "8",
      title: "YouTube Shorts editing",
      description: "High-impact short content",
      thumbnail: "https://img.youtube.com/vi/AVnWA6UpGAk/hqdefault.jpg",
      url: "https://www.youtube.com/shorts/AVnWA6UpGAk",
      isVertical: true
    },
    {
      id: "9",
      title: "YouTube Shorts editing",
      description: "Creative vertical video editing",
      thumbnail: "https://img.youtube.com/vi/G5qPuGfbCPY/hqdefault.jpg",
      url: "https://www.youtube.com/shorts/G5qPuGfbCPY",
      isVertical: true
    },
    {
      id: "10",
      title: "YouTube Shorts editing",
      description: "Engaging mobile content creation",
      thumbnail: "https://img.youtube.com/vi/-ptu4DhxTXM/hqdefault.jpg",
      url: "https://www.youtube.com/shorts/-ptu4DhxTXM",
      isVertical: true
    },
    {
      id: "11",
      title: "YouTube Shorts editing",
      description: "Professional short-form production",
      thumbnail: "https://img.youtube.com/vi/kpi8vQ8bFP8/hqdefault.jpg",
      url: "https://www.youtube.com/shorts/kpi8vQ8bFP8",
      isVertical: true
    },
    {
      id: "12",
      title: "YouTube Shorts editing",
      description: "Dynamic vertical video content",
      thumbnail: "https://img.youtube.com/vi/qVNleVe6J4Y/hqdefault.jpg",
      url: "https://www.youtube.com/shorts/qVNleVe6J4Y",
      isVertical: true
    },
    {
      id: "13",
      title: "YouTube Shorts editing",
      description: "Creative short-form video editing",
      thumbnail: "https://img.youtube.com/vi/lOb_-1vaiKA/hqdefault.jpg",
      url: "https://www.youtube.com/shorts/lOb_-1vaiKA",
      isVertical: true
    },
    {
      id: "14",
      title: "YouTube Shorts editing",
      description: "Professional vertical content creation",
      thumbnail: "https://img.youtube.com/vi/j76J6bx0zco/hqdefault.jpg",
      url: "https://www.youtube.com/shorts/j76J6bx0zco",
      isVertical: true
    },
    {
      id: "15",
      title: "YouTube Shorts editing",
      description: "Engaging short-form storytelling",
      thumbnail: "https://img.youtube.com/vi/IBmpQC0hn5E/hqdefault.jpg",
      url: "https://www.youtube.com/shorts/IBmpQC0hn5E",
      isVertical: true
    },
    {
      id: "16",
      title: "YouTube Shorts editing",
      description: "High-quality vertical video production",
      thumbnail: "https://img.youtube.com/vi/9V9Zd9DVINo/hqdefault.jpg",
      url: "https://www.youtube.com/shorts/9V9Zd9DVINo",
      isVertical: true
    },
    {
      id: "17",
      title: "YouTube Shorts editing",
      description: "Creative mobile-first content",
      thumbnail: "https://img.youtube.com/vi/ccvSBXjrcTQ/hqdefault.jpg",
      url: "https://www.youtube.com/shorts/ccvSBXjrcTQ",
      isVertical: true
    },
    {
      id: "18",
      title: "YouTube Shorts editing",
      description: "Professional short-form video creation",
      thumbnail: "https://img.youtube.com/vi/w7bdA42x2kg/hqdefault.jpg",
      url: "https://www.youtube.com/shorts/w7bdA42x2kg",
      isVertical: true
    },
    {
      id: "19",
      title: "Creative short from Drive",
      description: "Innovative vertical video content",
      thumbnail: "/reels-short-thumb.png",
      url: "https://drive.google.com/file/d/1bRu3R-lY7IIgVEMyzojdR22rfDQaLLuu/view?usp=sharing",
      isVertical: true
    },
    {
      id: "20",
      title: "Instagram Reel editing",
      description: "Professional social media content",
      thumbnail: "/reels-short-thumb.png",
      url: "https://www.instagram.com/reel/CyI4xTsvgDv/?igsh=Y2ZmOGU3amdqNm4w",
      isVertical: true
    },
    {
      id: "21",
      title: "Creative short from Drive",
      description: "Unique vertical video storytelling",
      thumbnail: "/reels-short-thumb.png",
      url: "https://drive.google.com/file/d/1dUAntYz3mjCU_2-1dD_lkcCLAAMre6j8/view?usp=sharing",
      isVertical: true
    },
    {
      id: "22",
      title: "Instagram Reel editing",
      description: "Engaging social media content creation",
      thumbnail: "/reels-short-thumb.png",
      url: "https://www.instagram.com/reel/CoDHnfBgkxT",
      isVertical: true
    },
    {
      id: "23",
      title: "Instagram Reel editing",
      description: "Creative Instagram content production",
      thumbnail: "/reels-short-thumb.png",
      url: "https://www.instagram.com/reel/CtZEq0Og6F8",
      isVertical: true
    },
    {
      id: "24",
      title: "Instagram Reel editing",
      description: "Professional reel content creation",
      thumbnail: "/reels-short-thumb.png",
      url: "https://www.instagram.com/reel/Cqco5fpj5d",
      isVertical: true
    }

  ];

  const realEstateVideos = [
    {
      id: "1",
      title: "Professional property showcase",
      description: "High-end real estate video production",
      thumbnail: "/real-estate-thumb.png",
      url: "https://drive.google.com/file/d/1ow_zuGhR3HXHd7GGxH3JsIQfCj_UF_zh/view"
    },
    {
      id: "2",
      title: "Property tour editing",
      description: "Immersive real estate walkthrough creation",
      thumbnail: "/real-estate-thumb.png",
      url: "https://drive.google.com/file/d/1oVJ3SzmZrtHJPtKjTR5uB2A7gLk2F5xl/view"
    },
    {
      id: "3",
      title: "Commercial property presentation",
      description: "Professional real estate marketing content",
      thumbnail: "/real-estate-thumb.png",
      url: "https://drive.google.com/file/d/1-a5SRQhH35fcPyYM8dKll_CUETukoF7h/view"
    }
  ];

  const weddingVideos = [
    {
      id: "1",
      title: "Instagram wedding highlight",
      description: "Cinematic wedding film production",
      thumbnail: "/wedding-films-thumb.png",
      url: "https://www.instagram.com/p/DJtmzgNsRj8/"
    },
    {
      id: "2",
      title: "Wedding ceremony editing",
      description: "Professional wedding videography",
      thumbnail: "/wedding-films-thumb.png",
      url: "https://www.instagram.com/p/DGD5YLTyHU0/"
    },
    {
      id: "3",
      title: "Wedding story editing",
      description: "Romantic wedding narrative creation",
      thumbnail: "/wedding-films-thumb.png",
      url: "https://www.instagram.com/p/C-i4SpyMNKQ/"
    }
  ];

  const standUpVideos = [
    {
      id: "1",
      title: "Comedy performance editing",
      description: "Professional stand-up comedy video production",
      thumbnail: "/standup-comedy-thumb.png",
      url: "https://drive.google.com/file/d/1WyEn7SwDsEfi6-TAf9QL2YCi1PZXmfYw/view"
    },
    {
      id: "2",
      title: "Live performance capture",
      description: "Dynamic comedy show editing",
      thumbnail: "/standup-comedy-thumb.png",
      url: "https://drive.google.com/file/d/1QdSgWOSbl7Ce-CGB76Hzkj8p1UN3nSxe/view"
    }
  ];

  const fitnessVideos = [
    {
      id: "1",
      title: "Fitness reel editing",
      description: "Professional fitness content editing",
      thumbnail: "/fitness-reels-thumb.png",
      url: "https://www.instagram.com/befitwithritvik/reel/DITr2JEC7qR/",
      isVertical: true
    },
    {
      id: "2",
      title: "Training content editing",
      description: "Dynamic workout video production",
      thumbnail: "/fitness-reels-thumb.png",
      url: "https://www.instagram.com/befitwithritvik/reel/DIwMldtiUds/",
      isVertical: true
    },
    {
      id: "3",
      title: "Fitness transformation reel",
      description: "Motivational transformation content",
      thumbnail: "/fitness-reels-thumb.png",
      url: "https://www.instagram.com/befitwithritvik/reel/DHaD4KBTmTH/",
      isVertical: true
    },
    {
      id: "4",
      title: "High-intensity workout editing",
      description: "Fast-paced fitness content creation",
      thumbnail: "/fitness-reels-thumb.png",
      url: "https://www.instagram.com/befitwithritvik/reel/DHbQ_JMTyLo/",
      isVertical: true
    },
    {
      id: "5",
      title: "Strength training showcase",
      description: "Professional gym content editing",
      thumbnail: "/fitness-reels-thumb.png",
      url: "https://www.instagram.com/befitwithritvik/reel/DH59RyHC-Wl/",
      isVertical: true
    },
    {
      id: "6",
      title: "Fitness motivation reel",
      description: "Inspirational workout content",
      thumbnail: "/fitness-reels-thumb.png",
      url: "https://www.instagram.com/befitwithritvik/reel/DHvy6UpC4yH/",
      isVertical: true
    },
    {
      id: "7",
      title: "Exercise technique editing",
      description: "Educational fitness content",
      thumbnail: "/fitness-reels-thumb.png",
      url: "https://www.instagram.com/befitwithritvik/reel/DHc2Iowz_rc/",
      isVertical: true
    },
    {
      id: "8",
      title: "Workout routine showcase",
      description: "Complete training session editing",
      thumbnail: "/fitness-reels-thumb.png",
      url: "https://www.instagram.com/befitwithritvik/reel/DHI2nMhzwFS/",
      isVertical: true
    },
    {
      id: "9",
      title: "Fitness lifestyle content",
      description: "Comprehensive fitness journey editing",
      thumbnail: "/fitness-reels-thumb.png",
      url: "https://www.instagram.com/befitwithritvik/reel/DGx4NxFzLhZ/",
      isVertical: true
    },
    {
      id: "10",
      title: "Performance training edit",
      description: "Athletic performance content creation",
      thumbnail: "/fitness-reels-thumb.png",
      url: "https://www.instagram.com/befitwithritvik/reel/DF-UJljCjlU/",
      isVertical: true
    },
    {
      id: "11",
      title: "Fitness challenge content",
      description: "Engaging workout challenge editing",
      thumbnail: "/fitness-reels-thumb.png",
      url: "https://www.instagram.com/befitwithritvik/reel/DH_DOd6CfDF/",
      isVertical: true
    }
  ];

  const surveyVideos = [
    {
      id: "1",
      title: "Street interview editing",
      description: "Professional survey content production",
      thumbnail: "/survey-videos-thumb.png",
      url: "https://drive.google.com/file/d/1CMGnzK3cM4SrrtETnH23xAh9BZixSGn5/view"
    },
    {
      id: "2",
      title: "Interview series editing",
      description: "Engaging survey video creation",
      thumbnail: "/survey-videos-thumb.png",
      url: "https://drive.google.com/file/d/1Ckyk8ieUupvay0xJ4VYxDWags8c7Wc6z/view"
    },
    {
      id: "3",
      title: "Research content editing",
      description: "Educational survey content",
      thumbnail: "/survey-videos-thumb.png",
      url: "https://drive.google.com/file/d/1Qd4cvgwMM9phjKVvHweSSL6JvyprST1v/view"
    }
  ];

  const documentaryVideos = [
    {
      id: "1",
      title: "Documentary film editing",
      description: "Professional documentary production",
      thumbnail: "/documentary-films-thumb.png",
      url: "https://drive.google.com/file/d/1tJrYB3br2C1QlHGbpmfjgRWCytDSy10q/view"
    },
    {
      id: "2",
      title: "Documentary storytelling",
      description: "Compelling narrative documentary editing",
      thumbnail: "/documentary-films-thumb.png",
      url: "https://drive.google.com/file/d/11zMy9tNd5FSUlIkEvA7fpLhKtCULvDmn/view"
    }
  ];

  const services = [
    {
      icon: Film,
      title: "Video Editing",
      description: "Professional video editing with attention to pacing, color grading, and storytelling flow."
    },
    {
      icon: Palette,
      title: "Motion Graphics",
      description: "Dynamic motion graphics and animations that bring your content to life."
    },
    {
      icon: Sparkles,
      title: "VFX & Animation",
      description: "Advanced visual effects and 3D animation for cinematic storytelling."
    },
    {
      icon: TrendingUp,
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
    { name: "KIND", subscribers: "3.2M", logo: "/creator-kind.jpg", url: "https://www.youtube.com/@KIND__" },
    { name: "Vaad", subscribers: "849K", logo: "/creator-vaad.jpg", url: "https://www.youtube.com/@Vaad" },
    { name: "Jimmy 7", subscribers: "728K", logo: "/creator-jimmy7.jpg", url: "https://www.youtube.com/@thejimmy7" },
    { name: "Apna Advantage", subscribers: "46K", logo: "/creator-apna.jpg", url: "https://www.youtube.com/@apnaadvantagedegree" },
    { name: "SHOWMAN AF", subscribers: "46K", logo: "/creator-showman.jpg", url: "https://www.youtube.com/@ShowmanOnTOP" }
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
                I'm a passionate Editor, Creative Director, constantly upskilling in the realms of video editing, motion graphics, VFX, animation, and storytelling. With a keen eye for detail and a strong narrative sense, I elevate content through compelling visuals and impactful storytelling that connects with audiences.
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
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[hsl(15,100%,60%)] to-[hsl(15,100%,65%)] rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[hsl(15,100%,60%)] to-[hsl(15,100%,65%)] rounded-full blur-3xl"></div>
          </div>
          <h2 className="font-bold text-4xl lg:text-5xl text-center mb-16 relative z-10">
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
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[hsl(15,100%,60%)] to-[hsl(15,100%,65%)] rounded-xl flex items-center justify-center group-hover:animate-pulse group-hover:shadow-xl group-hover:shadow-[hsl(15,100%,60%)]/25 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-[hsl(15,100%,60%)]/20 to-[hsl(15,100%,65%)]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
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
              >
                <a
                  href={creator.url}
                  target={creator.url !== "#" ? "_blank" : "_self"}
                  rel={creator.url !== "#" ? "noopener noreferrer" : ""}
                  className="block glass-morphism p-6 rounded-2xl text-center cursor-pointer hover:bg-[hsl(15,100%,60%)]/5 transition-colors duration-300"
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[hsl(15,100%,60%)]">
                    <img
                      src={creator.logo}
                      alt={`${creator.name} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{creator.name}</h3>
                  <p className="text-[hsl(15,100%,60%)] font-semibold">{creator.subscribers}</p>
                </a>
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
            horizontal={true}
          />
        </div>
      </SectionWrapper>

      {/* SBI SPELLBEE Campaign Section */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6">
          <VideoGallery
            videos={sbiSpellbeeVideos}
            title="SBI SPELLBEE Campaign"
            horizontal={true}
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
            horizontal={true}
          />
        </div>
      </SectionWrapper>

      {/* Wedding Films Section */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6">
          <VideoGallery
            videos={weddingVideos}
            title="Wedding Films"
            horizontal={true}
          />
        </div>
      </SectionWrapper>

      {/* Stand-Up Section */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6">
          <VideoGallery
            videos={standUpVideos}
            title="Stand-Up Comedy"
            horizontal={true}
          />
        </div>
      </SectionWrapper>

      {/* Fitness Section */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6">
          <VideoGallery
            videos={fitnessVideos}
            title="Fitness Content"
            horizontal={true}
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
            horizontal={true}
          />
        </div>
      </SectionWrapper>

      {/* Documentary Section */}
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-6">
          <VideoGallery
            videos={documentaryVideos}
            title="Documentary Films"
            horizontal={true}
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
