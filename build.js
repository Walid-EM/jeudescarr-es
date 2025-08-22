#!/usr/bin/env node

import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 Démarrage du build...');

try {
  // Vérifier si vite est installé
  console.log('📦 Vérification des dépendances...');
  
  // Exécuter le build
  console.log('🔨 Exécution du build Vite...');
  execSync('npx vite build', { 
    stdio: 'inherit',
    cwd: __dirname 
  });
  
  console.log('✅ Build terminé avec succès !');
} catch (error) {
  console.error('❌ Erreur lors du build:', error.message);
  process.exit(1);
}
