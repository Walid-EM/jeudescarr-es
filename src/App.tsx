import { motion } from 'framer-motion';
import { Grid } from './components/Grid';
import { WinModal } from './components/WinModal';
import { usePuzzle } from './hooks/usePuzzle';

function App() {
  try {
    const { positions, gameState, moveSquare, startNewGame } = usePuzzle();

    console.log('=== APP COMPONENT STARTING ===');
    console.log('App rendered - positions:', positions, 'gameState:', gameState);

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-sm mx-auto">

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
            <div className="bg-gray-300 rounded-full h-2 w-full max-w-xs mx-auto">
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
        </div>
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