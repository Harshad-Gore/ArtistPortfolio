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
      <Card className={cn(
        "glass-morphism border-[hsl(15,100%,60%)]/20 overflow-hidden",
        horizontal ? "min-w-[320px]" : "",
        video.isVertical ? "min-w-[280px]" : ""
      )}>
        <CardContent className="p-6">
          <div className={cn(
            "rounded-xl mb-4 overflow-hidden",
            video.isVertical ? "aspect-[9/16]" : "video-preview"
          )}>
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <h3 className="font-bold text-lg mb-2">{video.title}</h3>
          <p className="text-[hsl(0,0%,40%)] text-sm">{video.description}</p>
        </CardContent>
      </Card>
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
