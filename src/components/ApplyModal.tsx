import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

interface ApplyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  internshipTitle: string;
}

const ApplyModal = ({ open, onOpenChange, internshipTitle }: ApplyModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
            <Info className="w-6 h-6 text-primary" />
          </div>
          <DialogTitle className="text-center text-xl">
            Application Coming Soon
          </DialogTitle>
          <DialogDescription className="text-center pt-4">
            Thank you for your interest in the <strong>{internshipTitle}</strong>!
            <br /><br />
            The registration Google Form will be added soon. Stay tuned for updates!
            <br /><br />
            You can bookmark this page and check back later.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center mt-4">
          <Button 
            onClick={() => onOpenChange(false)}
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            Got it, Thanks!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApplyModal;
