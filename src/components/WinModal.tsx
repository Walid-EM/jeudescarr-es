import { motion, AnimatePresence } from 'framer-motion';

interface WinModalProps {
  isVisible: boolean;
  onPlayAgain: () => void;
}

export const WinModal = ({ isVisible, onPlayAgain }: WinModalProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 sm:p-8 max-w-sm sm:max-w-md mx-4 text-center shadow-2xl"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.div
              className="text-4xl sm:text-6xl mb-3 sm:mb-4"
              initial={{ rotate: 0, scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              🎉
            </motion.div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
              Félicitations !
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 px-2">
              Vous avez résolu le puzzle ! Tous les carrés sont dans le bon ordre.
            </p>
            
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
                         active:from-blue-800 active:to-purple-800
                         text-white font-bold py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg 
                         transition-all duration-200 transform hover:scale-105 active:scale-95
                         min-h-[48px] touch-manipulation"
              onClick={onPlayAgain}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🎮 Rejouer
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
