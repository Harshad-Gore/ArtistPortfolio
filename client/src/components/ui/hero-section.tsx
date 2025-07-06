import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContactModal } from "./contact-modal";
import { useState } from "react";

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(15,100%,60%)]/10 via-transparent to-[hsl(15,100%,65%)]/5"></div>
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-bold text-5xl md:text-6xl lg:text-8xl leading-tight mb-6">
              I'm <span className="gradient-text">Kunal Garud</span>
            </h1>
            <p className="text-2xl lg:text-3xl text-[hsl(0,0%,40%)] mb-8">Visual Artist</p>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-[hsl(15,100%,60%)] to-[hsl(15,100%,65%)] px-8 py-6 text-lg hover:scale-105 transition-transform duration-300 glow-effect"
            >
              Hire Me
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <img
              src="/pic_3.1.1_1751802800490.png"
              alt="Kunal Garud professional headshot"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:mx-0 object-cover"
              style={{ aspectRatio: "4/5" }}
            />
          </motion.div>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
