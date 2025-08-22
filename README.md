# 🧩 Jeu des Carrés

Un jeu de puzzle interactif où vous devez remettre 10 carrés colorés dans le bon ordre sur une grille 5x2.

## 🎮 Description du jeu

L'objectif est simple : **remettre tous les carrés colorés à leur position correcte** ! 

- **Grille fixe** : 5 colonnes × 2 lignes (10 positions au total)
- **10 carrés uniques** : Rouge, Vert, Bleu, Jaune, Violet, Orange, Cyan, Rose, Marron, Gris clair
- **Position correcte** : Carré 0 en haut à gauche → Carré 9 en bas à droite
- **Mélange initial** : Les carrés sont placés aléatoirement au démarrage
- **Victoire** : Quand tous les carrés sont dans le bon ordre !

## 🚀 Installation

1. **Installer les dépendances** :
   ```bash
   npm install
   ```

2. **Lancer en mode développement** :
   ```bash
   npm run dev
   ```

3. **Ouvrir** [http://localhost:5173](http://localhost:5173) dans votre navigateur

## 🛠️ Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile le projet pour la production
- `npm run preview` - Prévisualise la version de production
- `npm run lint` - Vérifie le code avec ESLint

## 🎯 Comment jouer

### 🖱️ **Avec la souris**
- **Glisser-déposer** : Cliquez et maintenez sur un carré, puis glissez-le sur un autre carré pour les échanger

### ⌨️ **Avec le clavier**
- **Tab** : Naviguer entre les carrés
- **Flèches directionnelles** : Déplacer le carré sélectionné dans la direction choisie
- **Entrée/Espace** : Échanger avec le carré adjacent

### ✅ **Indices visuels**
- **Bordure verte** : Le carré est à sa position correcte
- **Bordure bleue** : Zone de dépôt active pendant le glisser-déposer
- **Barre de progression** : Affiche le nombre de carrés bien placés

## 🎨 Fonctionnalités

### 🎮 **Gameplay**
- **Drag & Drop fluide** avec HTML5 Drag & Drop API
- **Navigation clavier** complète pour l'accessibilité
- **Détection automatique** de la victoire
- **Mélange aléatoire** à chaque nouvelle partie

### 🎭 **Interface & Animations**
- **Design responsive** adapté à tous les écrans
- **Animations fluides** avec Framer Motion
- **Feedback visuel** en temps réel
- **Modal de victoire** avec confettis animés

### ♿ **Accessibilité**
- **Navigation clavier** : Tab, flèches, Entrée
- **Rôles ARIA** : Boutons et états correctement définis
- **Focus visible** : Indicateurs de focus clairs
- **Labels** : Descriptions vocales pour les lecteurs d'écran

## 🏗️ Architecture

```
src/
├── components/          # Composants React
│   ├── Grid.tsx        # Grille de jeu principale
│   ├── Square.tsx      # Carré individuel
│   └── WinModal.tsx    # Modal de victoire
├── hooks/              # Hooks personnalisés
│   └── usePuzzle.ts    # Logique du puzzle
├── types/              # Types TypeScript
│   └── puzzle.ts       # Types et constantes
├── App.tsx             # Composant racine
└── main.tsx            # Point d'entrée
```

### 🧠 **Logique du jeu**

Le state principal est un tableau `positions` de 10 nombres :
- `positions[i] = j` signifie que le carré `j` est à la position `i`
- Position correcte = `positions[i] === i` pour tous les indices
- Victoire = `positions.every((squareId, position) => squareId === position)`

### 🎨 **Couleurs des carrés**

| Index | Couleur | Code couleur |
|-------|---------|--------------|
| 0 | Rouge | `#ef4444` |
| 1 | Vert | `#22c55e` |
| 2 | Bleu | `#3b82f6` |
| 3 | Jaune | `#eab308` |
| 4 | Violet | `#a855f7` |
| 5 | Orange | `#f97316` |
| 6 | Cyan | `#06b6d4` |
| 7 | Rose | `#ec4899` |
| 8 | Marron | `#8b4513` |
| 9 | Gris clair | `#d1d5db` |

## 🔧 Technologies utilisées

- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations et transitions
- **HTML5 Drag & Drop** - Système de glisser-déposer natif

## 📱 Responsive Design

L'application s'adapte automatiquement à toutes les tailles d'écran :
- **Mobile** : Grille optimisée pour le touch
- **Tablette** : Interface adaptée
- **Desktop** : Expérience complète avec hover effects

## 🎯 Stratégies de jeu

### 🔰 **Pour les débutants**
1. **Commencez par les coins** : Placez d'abord les carrés 0, 4, 5 et 9
2. **Travaillez ligne par ligne** : Complétez d'abord la ligne du haut
3. **Utilisez les indices visuels** : Les bordures vertes indiquent les bonnes positions

### 🏆 **Pour les experts**
1. **Analysez le pattern** : Identifiez les cycles dans le mélange
2. **Minimisez les mouvements** : Planifiez vos échanges à l'avance
3. **Utilisez le clavier** : Plus rapide pour les mouvements précis

## 🚀 Déploiement

Pour déployer en production :

```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

## 📈 Améliorations futures

- [ ] **Compteur de mouvements** et timer
- [ ] **Sauvegarde du meilleur score**
- [ ] **Niveaux de difficulté** (grilles plus grandes)
- [ ] **Mode compétition** multijoueur
- [ ] **Thèmes** et palettes de couleurs personnalisables
- [ ] **Son et musique** d'ambiance

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Committer vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

**Amusez-vous bien ! 🎉**