import { create } from 'zustand';

export type IconId = 'about' | 'projects' | 'resume' | 'contact' | 'terminal' | 'blogs' | 'portfolio';

interface IconPosition {
  x: number;
  y: number;
}

interface IconStore {
  iconPositions: Record<IconId, IconPosition>;
  updateIconPosition: (id: IconId, position: IconPosition) => void;
}

const getInitialIconPosition = (id: IconId): IconPosition => {
  // Responsive horizontal spacing - tighter on mobile, wider on desktop
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const startX = isMobile ? 12 : 24;
  const spacingX = isMobile ? 90 : 120;

  const positions: Record<IconId, IconPosition> = {
    about: { x: startX + spacingX * 0, y: 24 },
    projects: { x: startX + spacingX * 0, y: 24 },
    resume: { x: startX + spacingX * 0, y: 24 },
    contact: { x: startX + spacingX * 0, y: 24 },
    terminal: { x: startX + spacingX * 0, y: 24 },
    blogs: { x: startX + spacingX * 0, y: 24 },
    portfolio: { x: startX + spacingX * 0, y: 24 },
  };
  return positions[id] || { x: startX, y: 24 };
};

export const useIconStore = create<IconStore>((set) => {
  // Initialize all icons with Y=24 to ensure they're in a straight line
  const initialPositions = {
    about: getInitialIconPosition('about'),
    projects: getInitialIconPosition('projects'),
    resume: getInitialIconPosition('resume'),
    contact: getInitialIconPosition('contact'),
    terminal: getInitialIconPosition('terminal'),
    blogs: getInitialIconPosition('blogs'),
    portfolio: getInitialIconPosition('portfolio'),
  };

  // Ensure all Y positions are 24
  Object.keys(initialPositions).forEach((key) => {
    initialPositions[key as IconId].y = 24;
  });

  return {
    iconPositions: initialPositions,
    updateIconPosition: (id, position) => {
      set((state) => ({
        iconPositions: {
          ...state.iconPositions,
          [id]: {
            ...position,
            y: 24, // Always force Y to 24 to keep icons in a straight line
          },
        },
      }));
    },
  };
});

