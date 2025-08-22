import { motion } from 'framer-motion';
import { SquareData } from '../types/puzzle';

interface SquareProps {
  square: SquareData;
  position: number;
  isDragOver: boolean;
  isCorrectPosition: boolean;
  onTouchStart: (position: number) => void;
  onTouchEnd: (position: number) => void;
  onClick?: () => void;
}

export const Square = ({ 
  square, 
  position, 
  isDragOver, 
  isCorrectPosition,
  onTouchStart, 
  onTouchEnd,
  onClick 
}: SquareProps) => {
  const handleTouchStart = () => {
    console.log(`=== TOUCH START sur carré ${square.id} à la position ${position} ===`);
    onTouchStart(position);
  };

  const handleTouchEnd = () => {
    console.log(`=== TOUCH END sur carré ${square.id} à la position ${position} ===`);
    onTouchEnd(position);
  };

  const handleClick = () => {
    console.log(`=== CLICK sur carré ${square.id} à la position ${position} ===`);
    if (onClick) onClick();
  };

  return (
    <motion.div
      layout
      layoutId={`square-${square.id}`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale: isDragOver ? 1.1 : 1, 
        opacity: 1,
        rotate: isDragOver ? [0, -2, 2, 0] : 0,
        y: isDragOver ? -5 : 0
      }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ 
        layout: {
          type: "spring",
          stiffness: 400,
          damping: 25,
          duration: 0.6
        },
        scale: { duration: 0.3 },
        opacity: { duration: 0.3 }
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ 
        scale: 0.95,
        rotate: [0, -5, 5, 0],
        transition: { duration: 0.3 }
      }}
    >
      <div
        className={`
          w-14 h-14 ${square.bgClass} 
          rounded-lg border-2 border-white
          cursor-pointer select-none
          flex items-center justify-center
          font-bold text-white text-lg
          transition-all duration-300
          touch-manipulation
          shadow-lg hover:shadow-xl
          ${isDragOver ? 'ring-4 ring-blue-400 ring-offset-2 shadow-blue-300' : ''}
          ${isCorrectPosition ? 'ring-3 ring-green-400 ring-offset-2 shadow-green-300' : ''}
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transform hover:brightness-110
        `}
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        tabIndex={0}
        role="button"
        aria-label={`Carré ${square.color} à la position ${position + 1}`}
              >
          {/* Pas de numéro affiché - interface épurée */}
        </div>
    </motion.div>
  );
};
