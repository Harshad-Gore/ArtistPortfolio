import { motion } from "framer-motion";
import { HorizontalScroll } from "./horizontal-scroll";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  isVertical?: boolean;
}

interface VideoGalleryProps {
  videos: VideoItem[];
  title: string;
  horizontal?: boolean;
  className?: string;
}

export function VideoGallery({ videos, title, horizontal = false, className }: VideoGalleryProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const VideoCard = ({ video }: { video: VideoItem }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <a 
        href={video.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <Card className={cn(
          "glass-morphism border-[hsl(15,100%,60%)]/20 overflow-hidden cursor-pointer hover:border-[hsl(15,100%,60%)]/40 transition-all duration-300 h-full",
          horizontal ? (video.isVertical ? "min-w-[300px] max-w-[300px]" : "min-w-[350px] max-w-[350px]") : "w-full"
        )}>
          <CardContent className="p-6 flex flex-col h-full">
            <div className={cn(
              "rounded-xl mb-4 overflow-hidden relative group",
              video.isVertical ? "aspect-[9/16]" : "video-preview"
            )}>
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-[hsl(15,100%,60%)] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 5v10l8-5-8-5z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <h3 className="font-bold text-lg mb-2 line-clamp-2">{video.title}</h3>
              <p className="text-[hsl(0,0%,40%)] text-sm line-clamp-2">{video.description}</p>
            </div>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  );

  if (horizontal) {
    return (
      <div className={className}>
        <h2 className="font-bold text-4xl lg:text-5xl mb-16">
          {title.split(' ').map((word, index) => (
            <span key={index} className={index === title.split(' ').length - 1 ? 'gradient-text' : ''}>
              {word}{index < title.split(' ').length - 1 ? ' ' : ''}
            </span>
          ))}
        </h2>
        <HorizontalScroll>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </HorizontalScroll>
      </div>
    );
  }

  return (
    <div className={className}>
      <h2 className="font-bold text-4xl lg:text-5xl mb-16">
        {title.split(' ').map((word, index) => (
          <span key={index} className={index === title.split(' ').length - 1 ? 'gradient-text' : ''}>
            {word}{index < title.split(' ').length - 1 ? ' ' : ''}
          </span>
        ))}
      </h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </motion.div>
    </div>
  );
}
