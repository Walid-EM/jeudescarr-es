import { useState, useCallback } from 'react';

export type GameState = 'idle' | 'won';

export const usePuzzle = () => {
  const [positions, setPositions] = useState<number[]>(() => {
    // Position initiale mélangée - s'assurer qu'aucun carré n'est bien placé
    let shuffled;
    do {
      shuffled = [...Array(10).keys()].sort(() => Math.random() - 0.5);
    } while (shuffled.some((squareId, position) => squareId === position));
    return shuffled;
  });

  const [gameState, setGameState] = useState<GameState>('idle');

  const moveSquare = useCallback((fromIndex: number, toIndex: number) => {
    setPositions(prev => {
      const newPositions = [...prev];
      [newPositions[fromIndex], newPositions[toIndex]] = [newPositions[toIndex], newPositions[fromIndex]];
      
      // Vérifier la victoire
      const isWon = newPositions.every((squareId, position) => squareId === position);
      if (isWon) {
        setGameState('won');
      }
      
      return newPositions;
    });
  }, []);

  const startNewGame = useCallback(() => {
    // S'assurer qu'aucun carré n'est bien placé au début
    let shuffled;
    do {
      shuffled = [...Array(10).keys()].sort(() => Math.random() - 0.5);
    } while (shuffled.some((squareId, position) => squareId === position));
    
    setPositions(shuffled);
    setGameState('idle');
  }, []);

  return {
    positions,
    gameState,
    moveSquare,
    startNewGame
  };
};
