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

  // YouTube video data with authentic thumbnails
  const youtubeVideos = [
    {
      id: "1",
      title: "MWWMG_qBU50",
      description: "Professional video editing showcase",
      thumbnail: "https://img.youtube.com/vi/MWWMG_qBU50/hqdefault.jpg",
      url: "https://youtu.be/MWWMG_qBU50"
    },
    {
      id: "2",
      title: "7EuslqHdDUg",
      description: "Cinematic storytelling and editing",
      thumbnail: "https://img.youtube.com/vi/7EuslqHdDUg/hqdefault.jpg",
      url: "https://youtu.be/7EuslqHdDUg"
    },
    {
      id: "3",
      title: "anmjZV8-qZE",
      description: "Creative visual effects and animation",
      thumbnail: "https://img.youtube.com/vi/anmjZV8-qZE/hqdefault.jpg",
      url: "https://youtu.be/anmjZV8-qZE"
    },
    {
      id: "4",
      title: "-ZxBFT3ixSg",
      description: "Advanced editing techniques",
      thumbnail: "https://img.youtube.com/vi/-ZxBFT3ixSg/hqdefault.jpg",
      url: "https://youtu.be/-ZxBFT3ixSg"
    },
    {
      id: "5",
      title: "g4SXvT3Agrk",
      description: "Professional audio and video editing",
      thumbnail: "https://img.youtube.com/vi/g4SXvT3Agrk/hqdefault.jpg",
      url: "https://youtu.be/g4SXvT3Agrk"
    },
    {
      id: "6",
      title: "2k6hdmqVgJk",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/2k6hdmqVgJk/hqdefault.jpg",
      url: "https://youtu.be/2k6hdmqVgJk"
    },
    {
      id: "7",
      title: "TZKTWKKlgJE",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/TZKTWKKlgJE/hqdefault.jpg",
      url: "https://youtu.be/TZKTWKKlgJE"
    },
    {
      id: "8",
      title: "EcGxPGFrj2E",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/EcGxPGFrj2E/hqdefault.jpg",
      url: "https://youtu.be/EcGxPGFrj2E"
    },
    {
      id: "9",
      title: "WIFuoJHNE8k",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/WIFuoJHNE8k/hqdefault.jpg",
      url: "https://youtu.be/WIFuoJHNE8k"
    },
    {
      id: "10",
      title: "VQcnUJb6uow",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/VQcnUJb6uow/hqdefault.jpg",
      url: "https://youtu.be/VQcnUJb6uow"
    },
    {
      id: "11",
      title: "TqGG4XwdGJY",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/TqGG4XwdGJY/hqdefault.jpg",
      url: "https://youtu.be/TqGG4XwdGJY"
    },
    {
      id: "12",
      title: "DmIFwNmcNLo",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/DmIFwNmcNLo/hqdefault.jpg",
      url: "https://youtu.be/DmIFwNmcNLo"
    },
    {
      id: "13",
      title: "cSyEWxmFhEo",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/cSyEWxmFhEo/hqdefault.jpg",
      url: "https://youtu.be/cSyEWxmFhEo"
    },
    {
      id: "14",
      title: "8QUEWNSgHb0",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/8QUEWNSgHb0/hqdefault.jpg",
      url: "https://youtu.be/8QUEWNSgHb0"
    },
    {
      id: "15",
      title: "DL4RX-bYZdc",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/DL4RX-bYZdc/hqdefault.jpg",
      url: "https://youtu.be/DL4RX-bYZdc"
    },
    {
      id: "16",
      title: "74H8-RiMq8Y",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/74H8-RiMq8Y/hqdefault.jpg",
      url: "https://youtu.be/74H8-RiMq8Y"
    },
    {
      id: "17",
      title: "3dKCfKjQqtk",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/3dKCfKjQqtk/hqdefault.jpg",
      url: "https://youtu.be/3dKCfKjQqtk"
    },
    {
      id: "18",
      title: "mKjJqF0_VJY",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/mKjJqF0_VJY/hqdefault.jpg",
      url: "https://youtu.be/mKjJqF0_VJY"
    },
    {
      id: "19",
      title: "hKYCFtOlxL4",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/hKYCFtOlxL4/hqdefault.jpg",
      url: "https://youtu.be/hKYCFtOlxL4"
    },
    {
      id: "20",
      title: "yU59bGRMFLU",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/yU59bGRMFLU/hqdefault.jpg",
      url: "https://youtu.be/yU59bGRMFLU"
    },
    {
      id: "21",
      title: "uOLDhFBcmD0",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/uOLDhFBcmD0/hqdefault.jpg",
      url: "https://youtu.be/uOLDhFBcmD0"
    },
    {
      id: "22",
      title: "WnZhq5RNAXc",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/WnZhq5RNAXc/hqdefault.jpg",
      url: "https://youtu.be/WnZhq5RNAXc"
    },
    {
      id: "23",
      title: "1NyOSzlKNrA",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/1NyOSzlKNrA/hqdefault.jpg",
      url: "https://youtu.be/1NyOSzlKNrA"
    },
    {
      id: "24",
      title: "VJc8xkNBMT8",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/VJc8xkNBMT8/hqdefault.jpg",
      url: "https://youtu.be/VJc8xkNBMT8"
    },
    {
      id: "25",
      title: "8xLwEZJ7AJM",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/8xLwEZJ7AJM/hqdefault.jpg",
      url: "https://youtu.be/8xLwEZJ7AJM"
    },
    {
      id: "26",
      title: "9vdYdmkI9Qc",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/9vdYdmkI9Qc/hqdefault.jpg",
      url: "https://youtu.be/9vdYdmkI9Qc"
    },
    {
      id: "27",
      title: "5FYgbJhHNa4",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/5FYgbJhHNa4/hqdefault.jpg",
      url: "https://youtu.be/5FYgbJhHNa4"
    },
    {
      id: "28",
      title: "dFIv7zSbOXk",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/dFIv7zSbOXk/hqdefault.jpg",
      url: "https://youtu.be/dFIv7zSbOXk"
    },
    {
      id: "29",
      title: "mJg3vBNJ-8g",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/mJg3vBNJ-8g/hqdefault.jpg",
      url: "https://youtu.be/mJg3vBNJ-8g"
    },
    {
      id: "30",
      title: "R3cGJ-hOVJ0",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/R3cGJ-hOVJ0/hqdefault.jpg",
      url: "https://youtu.be/R3cGJ-hOVJ0"
    },
    {
      id: "31",
      title: "8FMXmgkTrfg",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/8FMXmgkTrfg/hqdefault.jpg",
      url: "https://youtu.be/8FMXmgkTrfg"
    },
    {
      id: "32",
      title: "xHQrVQJHjog",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/xHQrVQJHjog/hqdefault.jpg",
      url: "https://youtu.be/xHQrVQJHjog"
    },
    {
      id: "33",
      title: "gRWgpP4JCco",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/gRWgpP4JCco/hqdefault.jpg",
      url: "https://youtu.be/gRWgpP4JCco"
    },
    {
      id: "34",
      title: "3SQGZsYEhVk",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/3SQGZsYEhVk/hqdefault.jpg",
      url: "https://youtu.be/3SQGZsYEhVk"
    },
    {
      id: "35",
      title: "YqxFVLEJgJw",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/YqxFVLEJgJw/hqdefault.jpg",
      url: "https://youtu.be/YqxFVLEJgJw"
    },
    {
      id: "36",
      title: "8uxJGFi1zHM",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/8uxJGFi1zHM/hqdefault.jpg",
      url: "https://youtu.be/8uxJGFi1zHM"
    },
    {
      id: "37",
      title: "lBUkOEfQdLw",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/lBUkOEfQdLw/hqdefault.jpg",
      url: "https://youtu.be/lBUkOEfQdLw"
    },
    {
      id: "38",
      title: "4pZ_qCjfNdk",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/4pZ_qCjfNdk/hqdefault.jpg",
      url: "https://youtu.be/4pZ_qCjfNdk"
    },
    {
      id: "39",
      title: "3XJMqEYGhvE",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/3XJMqEYGhvE/hqdefault.jpg",
      url: "https://youtu.be/3XJMqEYGhvE"
    },
    {
      id: "40",
      title: "MKFgKDYJJQ4",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/MKFgKDYJJQ4/hqdefault.jpg",
      url: "https://youtu.be/MKFgKDYJJQ4"
    },
    {
      id: "41",
      title: "nQEZEBPJrFE",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/nQEZEBPJrFE/hqdefault.jpg",
      url: "https://youtu.be/nQEZEBPJrFE"
    },
    {
      id: "42",
      title: "3dKCfKjQqtk",
      description: "YouTube video editing",
      thumbnail: "https://img.youtube.com/vi/3dKCfKjQqtk/hqdefault.jpg",
      url: "https://youtu.be/3dKCfKjQqtk"
    }
  ];

  const commercialVideos = [
    {
      id: "1",
      title: "Instagram Post - C_XwUrwsSZs",
      description: "Commercial video editing project",
      thumbnail: "https://via.placeholder.com/600x338/1a1a1a/ff6b35?text=Instagram+Post",
      url: "https://www.instagram.com/p/C_XwUrwsSZs/"
    },
    {
      id: "2", 
      title: "Instagram Post - DALVPYky00j",
      description: "Brand campaign video",
      thumbnail: "https://via.placeholder.com/600x338/1a1a1a/ff6b35?text=Instagram+Post",
      url: "https://www.instagram.com/p/DALVPYky00j/"
    },
    {
      id: "3",
      title: "SBI SPELLBEE Campaign",
      description: "Drive folder with campaign materials",
      thumbnail: "https://via.placeholder.com/600x338/1a1a1a/ff6b35?text=Drive+Folder",
      url: "https://drive.google.com/drive/folders/10yPGlZrZQmPzXcx5W0r0Nl_24tSIPzCm"
    }
  ];

  const reelsVideos = [
    {
      id: "1",
      title: "YouTube Short - sT17F1BvvXg",
      description: "YouTube Shorts editing",
      thumbnail: "https://img.youtube.com/vi/sT17F1BvvXg/hqdefault.jpg",
      url: "https://www.youtube.com/shorts/sT17F1BvvXg",
      isVertical: true
    },
    {
      id: "2",
      title: "Instagram Reel - CyI4xTsvgDv",
      description: "Instagram Reel editing",
      thumbnail: "https://via.placeholder.com/300x533/1a1a1a/ff6b35?text=Instagram+Reel",
      url: "https://www.instagram.com/reel/CyI4xTsvgDv/",
      isVertical: true
    },
    {
      id: "3",
      title: "Drive File - 1dUAntYz3mjCU_2-1dD_lkcCLAAMre6j8",
      description: "Creative short from Drive",
      thumbnail: "https://via.placeholder.com/300x533/1a1a1a/ff6b35?text=Drive+Video",
      url: "https://drive.google.com/file/d/1dUAntYz3mjCU_2-1dD_lkcCLAAMre6j8/view",
      isVertical: true
    }
  ];

  const realEstateVideos = [
    {
      id: "1",
      title: "Real Estate Video - 1ow_zuGhR3HXHd7GGxH3JsIQfCj_UF_zh",
      description: "Professional property showcase",
      thumbnail: "https://via.placeholder.com/600x338/1a1a1a/ff6b35?text=Drive+Video+-+Real+Estate",
      url: "https://drive.google.com/file/d/1ow_zuGhR3HXHd7GGxH3JsIQfCj_UF_zh/view"
    },
    {
      id: "2",
      title: "Real Estate Video - 1oVJ3SzmZrtHJPtKjTR5uB2A7gLk2F5xl",
      description: "Property tour editing",
      thumbnail: "https://via.placeholder.com/600x338/1a1a1a/ff6b35?text=Drive+Video+-+Real+Estate",
      url: "https://drive.google.com/file/d/1oVJ3SzmZrtHJPtKjTR5uB2A7gLk2F5xl/view"
    },
    {
      id: "3",
      title: "Real Estate Video - 1-a5SRQhH35fcPyYM8dKll_CUETukoF7h",
      description: "Commercial property presentation",
      thumbnail: "https://via.placeholder.com/600x338/1a1a1a/ff6b35?text=Drive+Video+-+Real+Estate",
      url: "https://drive.google.com/file/d/1-a5SRQhH35fcPyYM8dKll_CUETukoF7h/view"
    }
  ];

  const weddingVideos = [
    {
      id: "1",
      title: "Wedding Film - DJtmzgNsRj8",
      description: "Instagram wedding highlight",
      thumbnail: "https://via.placeholder.com/600x338/1a1a1a/ff6b35?text=Instagram+Wedding+Film",
      url: "https://www.instagram.com/p/DJtmzgNsRj8/"
    },
    {
      id: "2",
      title: "Wedding Film - DGD5YLTyHU0",
      description: "Wedding ceremony editing",
      thumbnail: "https://via.placeholder.com/600x338/1a1a1a/ff6b35?text=Instagram+Wedding+Film",
      url: "https://www.instagram.com/p/DGD5YLTyHU0/"
    },
    {
      id: "3",
      title: "Wedding Film - C-i4SpyMNKQ",
      description: "Wedding story editing",
      thumbnail: "https://via.placeholder.com/600x338/1a1a1a/ff6b35?text=Instagram+Wedding+Film",
      url: "https://www.instagram.com/p/C-i4SpyMNKQ/"
    }
  ];

  const standUpVideos = [
    {
      id: "1",
      title: "Stand-Up Video - 1WyEn7SwDsEfi6-TAf9QL2YCi1PZXmfYw",
      description: "Comedy performance editing",
      thumbnail: "https://via.placeholder.com/600x338/1a1a1a/ff6b35?text=Drive+Video+-+Stand+Up",
      url: "https://drive.google.com/file/d/1WyEn7SwDsEfi6-TAf9QL2YCi1PZXmfYw/view"
    },
    {
      id: "2",
      title: "Stand-Up Video - 1QdSgWOSbl7Ce-CGB76Hzkj8p1UN3nSxe",
      description: "Live performance capture",
      thumbnail: "https://via.placeholder.com/600x338/1a1a1a/ff6b35?text=Drive+Video+-+Stand+Up",
      url: "https://drive.google.com/file/d/1QdSgWOSbl7Ce-CGB76Hzkj8p1UN3nSxe/view"
    }
  ];

  const fitnessVideos = [
    {
      id: "1",
      title: "@befitwithritvik - DITr2JEC7qR",
      description: "Fitness reel editing",
      thumbnail: "https://via.placeholder.com/300x533/1a1a1a/ff6b35?text=Instagram+Fitness+Reel",
      url: "https://www.instagram.com/befitwithritvik/reel/DITr2JEC7qR/",
      isVertical: true
    },
    {
      id: "2",
      title: "@befitwithritvik - DIwMldtiUds",
      description: "Training content editing",
      thumbnail: "https://via.placeholder.com/300x533/1a1a1a/ff6b35?text=Instagram+Fitness+Reel",
      url: "https://www.instagram.com/befitwithritvik/reel/DIwMldtiUds/",
      isVertical: true
    },
    {
      id: "3",
      title: "@befitwithritvik - DHaD4KBTmTH",
      description: "Fitness transformation reel",
      thumbnail: "https://via.placeholder.com/300x533/1a1a1a/ff6b35?text=Instagram+Fitness+Reel",
      url: "https://www.instagram.com/befitwithritvik/reel/DHaD4KBTmTH/",
      isVertical: true
    }
  ];

  const surveyVideos = [
    {
      id: "1",
      title: "Survey Video - 1CMGnzK3cM4SrrtETnH23xAh9BZixSGn5",
      description: "Street interview editing",
      thumbnail: "https://via.placeholder.com/600x338/1a1a1a/ff6b35?text=Drive+Video+-+Survey",
      url: "https://drive.google.com/file/d/1CMGnzK3cM4SrrtETnH23xAh9BZixSGn5/view"
    },
    {
      id: "2",
      title: "Survey Video - 1Ckyk8ieUupvay0xJ4VYxDWags8c7Wc6z",
      description: "Interview series editing",
      thumbnail: "https://via.placeholder.com/600x338/1a1a1a/ff6b35?text=Drive+Video+-+Survey",
      url: "https://drive.google.com/file/d/1Ckyk8ieUupvay0xJ4VYxDWags8c7Wc6z/view"
    },
    {
      id: "3",
      title: "Survey Video - 1Qd4cvgwMM9phjKVvHweSSL6JvyprST1v",
      description: "Research content editing",
      thumbnail: "https://via.placeholder.com/600x338/1a1a1a/ff6b35?text=Drive+Video+-+Survey",
      url: "https://drive.google.com/file/d/1Qd4cvgwMM9phjKVvHweSSL6JvyprST1v/view"
    }
  ];

  const documentaryVideos = [
    {
      id: "1",
      title: "Documentary - 1tJrYB3br2C1QlHGbpmfjgRWCytDSy10q",
      description: "Documentary film editing",
      thumbnail: "https://via.placeholder.com/600x338/1a1a1a/ff6b35?text=Drive+Video+-+Documentary",
      url: "https://drive.google.com/file/d/1tJrYB3br2C1QlHGbpmfjgRWCytDSy10q/view"
    },
    {
      id: "2",
      title: "Documentary - 11zMy9tNd5FSUlIkEvA7fpLhKtCULvDmn",
      description: "Documentary storytelling",
      thumbnail: "https://via.placeholder.com/600x338/1a1a1a/ff6b35?text=Drive+Video+-+Documentary",
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
