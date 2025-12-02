import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Info, Gift } from "lucide-react";

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

        {/* Swag Banner */}
        <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
          <div className="flex items-center gap-3 justify-center">
            <Gift className="w-6 h-6 text-primary" />
            <p className="text-sm font-medium text-foreground text-center">
              Complete the internship successfully and unlock your <span className="text-primary font-bold">CodeIntern Swags</span> 🎁
            </p>
          </div>
        </div>

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
