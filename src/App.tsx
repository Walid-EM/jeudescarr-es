import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Grid } from './components/Grid';
import { WinModal } from './components/WinModal';
import { usePuzzle } from './hooks/usePuzzle';

function App() {
  try {
    const { positions, gameState, moveSquare, startNewGame } = usePuzzle();
    const [showLoveMessage, setShowLoveMessage] = useState(false);
    const [hearts, setHearts] = useState<Array<{ id: number; x: number; delay: number }>>([]);

    console.log('=== APP COMPONENT STARTING ===');
    console.log('App rendered - positions:', positions, 'gameState:', gameState);

    const handleLoveButton = () => {
      // Créer une nouvelle vague de cœurs
      const newHearts = Array.from({ length: 8 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100, // Position horizontale aléatoire
        delay: Math.random() * 0.5 // Délai aléatoire pour l'animation
      }));
      
      setHearts(prev => [...prev, ...newHearts]);
      
      // Afficher le message d'amour
      setShowLoveMessage(true);
      setTimeout(() => setShowLoveMessage(false), 3000);
      
      // Nettoyer les cœurs après animation
      setTimeout(() => {
        setHearts(prev => prev.filter(heart => !newHearts.find(nh => nh.id === heart.id)));
      }, 5000);
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <motion.div 
          className="w-full max-w-sm mx-auto relative z-10"
          animate={{ 
            filter: hearts.length > 0 ? 'blur(2px)' : 'blur(0px)'
          }}
          transition={{ duration: 0.3 }}
        >

          {/* Grille de jeu centrée */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Grid 
              positions={positions}
              onMoveSquare={moveSquare}
              gameState={gameState}
            />
          </motion.div>

          {/* Indicateur de progression compact */}
          <motion.div
            className="mb-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-sm text-gray-700 font-medium mb-3">
              {positions.filter((squareId, position) => squareId === position).length}/10
            </div>
            <div className="bg-gray-200 rounded-full h-full w-full max-w-xs mx-auto">
              <motion.div 
                className="bg-green-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ 
                  width: `${positions.filter((squareId, position) => squareId === position).length * 10}%` 
                }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Bouton d'amour */}
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              className="bg-pink-500 hover:bg-pink-600 active:bg-pink-700 text-white font-bold 
                         py-4 px-8 rounded-xl text-lg
                         transition-all duration-150 active:scale-95
                         min-h-[56px] w-full max-w-xs touch-manipulation
                         shadow-lg active:shadow-md transform hover:scale-105"
              onClick={handleLoveButton}
            >
              💖 Hafsa tricheuse 💖
            </button>
          </motion.div>

          {/* Bouton tactile optimisé */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              className="bg-blue-600 active:bg-blue-800 text-white font-bold 
                         py-4 px-8 rounded-xl text-lg
                         transition-all duration-150 active:scale-95
                         min-h-[56px] w-full max-w-xs touch-manipulation
                         shadow-lg active:shadow-md"
              onClick={startNewGame}
            >
              🔄 Nouvelle Partie
            </button>
          </motion.div>

          {/* Modal de victoire */}
          <WinModal 
            isVisible={gameState === 'won'}
            onPlayAgain={startNewGame}
          />
        </motion.div>

        {/* Animation des cœurs */}
        <AnimatePresence>
          {hearts.map((heart) => (
            <motion.div
              key={heart.id}
              className="fixed text-4xl text-pink-400 pointer-events-none z-50"
              style={{ left: `${heart.x}%` }}
              initial={{ 
                y: '100vh',
                opacity: 0,
                scale: 0.5,
                rotate: -45
              }}
              animate={{ 
                y: '-50vh',
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1.2, 1, 0.8],
                rotate: [-45, 0, 15, -30]
              }}
              transition={{ 
                duration: 5,
                delay: heart.delay,
                ease: "easeOut"
              }}
              exit={{ opacity: 0, scale: 0 }}
            >
              💖
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Message d'amour */}
        <AnimatePresence>
          {showLoveMessage && (
            <motion.div
              className="fixed inset-0 flex items-start justify-center z-50 pointer-events-none pt-20"
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-8 py-6 rounded-2xl shadow-2xl text-center max-w-sm mx-4">
                <h2 className="text-2xl font-bold mb-2 font-serif">
                  Je rigole t'es la meilleur mon bébé 💕
                </h2>
                <div className="text-pink-200 text-sm">
                  Tu es parfaite ! ✨
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  } catch (error) {
    console.error('=== ERREUR DANS LE RENDU DE APP.TSX ===', error);
    return (
      <div style={{ padding: '20px', color: 'red', fontSize: '18px' }}>
        ERREUR: {error instanceof Error ? error.message : String(error)}
      </div>
    );
  }
}

export default App;