import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-morphism border-[hsl(15,100%,60%)]/20 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Get In Touch</DialogTitle>
          <DialogDescription className="text-center text-[hsl(0,0%,40%)]">
            Let's create something amazing together!
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[hsl(15,100%,60%)] to-[hsl(15,100%,65%)] rounded-full flex items-center justify-center">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <a 
                href="mailto:kunalgarud2@gmail.com" 
                className="text-[hsl(15,100%,60%)] hover:text-[hsl(15,100%,65%)] transition-colors text-sm"
              >
                kunalgarud2@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[hsl(15,100%,60%)] to-[hsl(15,100%,65%)] rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold">Phone</p>
              <a 
                href="tel:+919579073855" 
                className="text-[hsl(15,100%,60%)] hover:text-[hsl(15,100%,65%)] transition-colors text-sm"
              >
                +91 9579073855
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[hsl(15,100%,60%)] to-[hsl(15,100%,65%)] rounded-full flex items-center justify-center">
              <Instagram className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold">Instagram</p>
              <a 
                href="https://www.instagram.com/kunaalgarud/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[hsl(15,100%,60%)] hover:text-[hsl(15,100%,65%)] transition-colors text-sm"
              >
                @kunaalgarud
              </a>
            </div>
          </div>
        </div>
        
        <Button 
          onClick={onClose} 
          className="w-full bg-gradient-to-r from-[hsl(15,100%,60%)] to-[hsl(15,100%,65%)] hover:scale-105 transition-transform duration-300"
        >
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
}
