import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('=== MAIN.TSX STARTING ===');

try {
  console.log('=== RECHERCHE ROOT ELEMENT ===');
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    console.error('=== ERREUR: ROOT ELEMENT NOT FOUND ===');
    throw new Error('Element #root non trouvé dans le DOM');
  }
  
  console.log('=== ROOT ELEMENT TROUVÉ ===', rootElement);
  
  console.log('=== CRÉATION REACT ROOT ===');
  const root = ReactDOM.createRoot(rootElement);
  
  console.log('=== RENDU APP COMPONENT ===');
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  console.log('=== RENDU TERMINÉ AVEC SUCCÈS ===');
  
} catch (error) {
  console.error('=== ERREUR CRITIQUE DANS MAIN ===', error);
  
  // Affichage d'erreur de secours
  document.body.innerHTML = `
    <div style="padding: 20px; background: #fee; color: #c00; font-family: Arial;">
      <h1>🚨 Erreur de chargement</h1>
      <p><strong>Erreur:</strong> ${error instanceof Error ? error.message : String(error)}</p>
      <p>Vérifiez la console pour plus de détails.</p>
    </div>
  `;
}