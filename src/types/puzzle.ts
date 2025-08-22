export type GameState = 'playing' | 'won';

export interface PuzzleColors {
  red: string;
  green: string;
  blue: string;
  yellow: string;
  purple: string;
  orange: string;
  cyan: string;
  pink: string;
  brown: string;
  lightgray: string;
}

export interface SquareData {
  id: number;
  color: string;
  bgClass: string;
}

export const PUZZLE_COLORS: PuzzleColors = {
  red: '#ef4444',
  green: '#22c55e',
  blue: '#3b82f6',
  yellow: '#eab308',
  purple: '#a855f7',
  orange: '#f97316',
  cyan: '#06b6d4',
  pink: '#ec4899',
  brown: '#8b4513',
  lightgray: '#d1d5db',
};

export const SQUARES: SquareData[] = [
  { id: 0, color: 'red', bgClass: 'bg-red-500' },
  { id: 1, color: 'green', bgClass: 'bg-green-500' },
  { id: 2, color: 'blue', bgClass: 'bg-blue-500' },
  { id: 3, color: 'yellow', bgClass: 'bg-yellow-500' },
  { id: 4, color: 'purple', bgClass: 'bg-purple-500' },
  { id: 5, color: 'orange', bgClass: 'bg-orange-500' },
  { id: 6, color: 'cyan', bgClass: 'bg-cyan-500' },
  { id: 7, color: 'pink', bgClass: 'bg-pink-500' },
  { id: 8, color: 'brown', bgClass: 'bg-amber-700' },
  { id: 9, color: 'lightgray', bgClass: 'bg-gray-400' },
];
