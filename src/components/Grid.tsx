import { useState } from 'react';
import { motion } from 'framer-motion';
import { Square } from './Square';
import { SQUARES } from '../types/puzzle';

interface GridProps {
  positions: number[];
  onMoveSquare: (fromIndex: number, toIndex: number) => void;
  gameState: string;
}

export const Grid = ({ positions, onMoveSquare }: GridProps) => {
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);

  const handleClick = (position: number) => {
    console.log(`=== CLICK sur position ${position} ===`);
    
    if (selectedPosition === null) {
      // Premier clic : sélectionner le carré
      console.log(`=== SÉLECTION de la position ${position} ===`);
      setSelectedPosition(position);
    } else if (selectedPosition === position) {
      // Clic sur le même carré : désélectionner
      console.log(`=== DÉSÉLECTION de la position ${position} ===`);
      setSelectedPosition(null);
    } else {
      // Clic sur un autre carré : échanger
      console.log(`=== ÉCHANGE: position ${selectedPosition} ↔ position ${position} ===`);
      onMoveSquare(selectedPosition, position);
      setSelectedPosition(null);
    }
  };

  return (
    <motion.div
      layout
      className="grid grid-cols-5 gap-3 p-4 bg-white rounded-2xl shadow-xl w-full overflow-hidden"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.6,
        type: "spring",
        stiffness: 300,
        damping: 25
      }}
    >
      {positions.map((squareId, position) => {
        const square = SQUARES[squareId];
        const isCorrectPosition = squareId === position;
        const isSelected = selectedPosition === position;
        
        return (
          <div key={`${position}-${squareId}`}>
            <Square
              square={square}
              position={position}
              isDragOver={isSelected}
              isCorrectPosition={isCorrectPosition}
              onTouchStart={() => {}}
              onTouchEnd={() => {}}
              onClick={() => handleClick(position)}
            />
          </div>
        );
      })}
    </motion.div>
  );
};
