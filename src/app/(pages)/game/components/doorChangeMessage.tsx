import { motion, AnimatePresence } from 'framer-motion';

const DoorChangeMessage: React.FC<{ isVisible: boolean }> = ({ isVisible }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="door-change-message"
      >
        Você deseja trocar de porta?
      </motion.div>
    )}
  </AnimatePresence>
);

export default DoorChangeMessage;
