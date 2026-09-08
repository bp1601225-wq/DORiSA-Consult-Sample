import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface ImageModalProps {
  image: string | null;
  title?: string;
  onClose: () => void;
}

function ImageModal({
  image,
  title = "Image Preview",
  onClose,
}: ImageModalProps) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/90 p-6 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X size={24} />
          </button>

          <motion.img
            src={image}
            alt={title}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[95vw] rounded-2xl object-contain"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ImageModal;