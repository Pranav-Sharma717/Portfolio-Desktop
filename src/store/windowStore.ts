import { create } from 'zustand';

export type WindowId = 'about' | 'projects' | 'resume' | 'contact' | 'terminal';

export interface WindowState {
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
  position: { x: number; y: number };
}

interface WindowStore {
  windows: Record<WindowId, WindowState>;
  activeWindow: WindowId | null;
  nextZIndex: number;
  darkMode: boolean;
  openWindow: (id: WindowId) => void;
  closeWindow: (id: WindowId) => void;
  minimizeWindow: (id: WindowId) => void;
  restoreWindow: (id: WindowId) => void;
  setActiveWindow: (id: WindowId) => void;
  updateWindowPosition: (id: WindowId, position: { x: number; y: number }) => void;
  toggleDarkMode: () => void;
  getOpenWindows: () => WindowId[];
}

const getInitialPosition = (id: WindowId): { x: number; y: number } => {
  const positions: Record<WindowId, { x: number; y: number }> = {
    about: { x: 100, y: 100 },
    projects: { x: 150, y: 150 },
    resume: { x: 200, y: 200 },
    contact: { x: 250, y: 250 },
    terminal: { x: 300, y: 300 },
  };
  return positions[id] || { x: 100, y: 100 };
};

const createInitialWindowState = (id: WindowId): WindowState => ({
  isOpen: false,
  isMinimized: false,
  zIndex: 0,
  position: getInitialPosition(id),
});

export const useWindowStore = create<WindowStore>((set, get) => ({
  windows: {
    about: createInitialWindowState('about'),
    projects: createInitialWindowState('projects'),
    resume: createInitialWindowState('resume'),
    contact: createInitialWindowState('contact'),
    terminal: createInitialWindowState('terminal'),
  },
  activeWindow: null,
  nextZIndex: 1,
  darkMode: false,

  openWindow: (id) => {
    const state = get();
    const window = state.windows[id];
    
    set({
      windows: {
        ...state.windows,
        [id]: {
          ...window,
          isOpen: true,
          isMinimized: false,
          zIndex: state.nextZIndex,
        },
      },
      activeWindow: id,
      nextZIndex: state.nextZIndex + 1,
    });
  },

  closeWindow: (id) => {
    const state = get();
    set({
      windows: {
        ...state.windows,
        [id]: {
          ...state.windows[id],
          isOpen: false,
          isMinimized: false,
        },
      },
      activeWindow: state.activeWindow === id ? null : state.activeWindow,
    });
  },

  minimizeWindow: (id) => {
    const state = get();
    set({
      windows: {
        ...state.windows,
        [id]: {
          ...state.windows[id],
          isMinimized: true,
        },
      },
    });
  },

  restoreWindow: (id) => {
    const state = get();
    const window = state.windows[id];
    
    set({
      windows: {
        ...state.windows,
        [id]: {
          ...window,
          isMinimized: false,
          zIndex: state.nextZIndex,
        },
      },
      activeWindow: id,
      nextZIndex: state.nextZIndex + 1,
    });
  },

  setActiveWindow: (id) => {
    const state = get();
    const window = state.windows[id];
    
    if (window.isOpen && !window.isMinimized) {
      set({
        windows: {
          ...state.windows,
          [id]: {
            ...window,
            zIndex: state.nextZIndex,
          },
        },
        activeWindow: id,
        nextZIndex: state.nextZIndex + 1,
      });
    }
  },

  updateWindowPosition: (id, position) => {
    const state = get();
    set({
      windows: {
        ...state.windows,
        [id]: {
          ...state.windows[id],
          position,
        },
      },
    });
  },

  toggleDarkMode: () => {
    set({ darkMode: !get().darkMode });
  },

  getOpenWindows: () => {
    const state = get();
    return (Object.keys(state.windows) as WindowId[]).filter(
      (id) => state.windows[id].isOpen
    );
  },
}));

