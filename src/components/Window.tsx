import { useRef } from 'react';
import Draggable from 'react-draggable';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import { useWindowStore, type WindowId } from '../store/windowStore';

interface WindowProps {
  id: WindowId;
  title: string;
  children: React.ReactNode;
  defaultWidth?: number;
  defaultHeight?: number;
}

const Window = ({ id, title, children, defaultWidth = 600 }: WindowProps) => {
  const {
    windows,
    closeWindow,
    minimizeWindow,
    setActiveWindow,
    updateWindowPosition,
  } = useWindowStore();

  const windowRef = useRef<HTMLDivElement>(null);
  const windowState = windows[id];

  if (!windowState.isOpen) return null;

  const handleDrag = (_e: DraggableEvent, data: DraggableData) => {
    updateWindowPosition(id, { x: data.x, y: data.y });
  };

  const handleStart = () => {
    setActiveWindow(id);
  };

  const handleMinimize = () => {
    minimizeWindow(id);
  };

  const handleClose = () => {
    closeWindow(id);
  };

  if (windowState.isMinimized) {
    return null;
  }

  return (
    <Draggable
      handle=".window-titlebar"
      position={windowState.position}
      onDrag={handleDrag}
      onStart={handleStart}
      nodeRef={windowRef}
      bounds="parent"
    >
      <div
        ref={windowRef}
        className="window fixed"
        style={{
          // Responsive width with sensible max; height is auto and constrained via CSS
          width: `min(95vw, ${defaultWidth}px)`,
          maxWidth: '95vw',
          maxHeight: '90vh',
          zIndex: windowState.zIndex,
        }}
        onClick={() => setActiveWindow(id)}
      >
        {/* Title Bar */}
        <div className="window-titlebar">
          <span className="font-semibold text-sm flex-1">{title}</span>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleMinimize}
              className="w-6 h-6 flex items-center justify-center bg-gray-300 hover:bg-gray-400 rounded border border-gray-500 text-gray-700 text-xs font-bold"
              title="Minimize"
            >
              −
            </button>
            <button
              onClick={handleClose}
              className="w-6 h-6 flex items-center justify-center bg-red-500 hover:bg-red-600 rounded border border-red-700 text-white text-xs font-bold"
              title="Close"
            >
              ×
            </button>
          </div>
        </div>

        {/* Window Content */}
        <div className="window-content">{children}</div>
      </div>
    </Draggable>
  );
};

export default Window;

