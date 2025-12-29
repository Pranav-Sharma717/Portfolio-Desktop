import { useRef } from 'react';
import Draggable from 'react-draggable';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import { useWindowStore } from '../store/windowStore';
import { useIconStore } from '../store/iconStore';
import type { WindowId } from '../store/windowStore';
import type { IconId } from '../store/iconStore';

interface DesktopIconProps {
  id: WindowId | 'blogs' | 'portfolio';
  label: string;
  icon: string;
  onDoubleClick?: () => void;
  externalLink?: string; // URL for external links (blogs, portfolio)
}

const DesktopIcon = ({ id, label, icon, onDoubleClick, externalLink }: DesktopIconProps) => {
  const { openWindow } = useWindowStore();
  const { iconPositions, updateIconPosition } = useIconStore();
  const iconRef = useRef<HTMLDivElement>(null);
  const dragStartPos = useRef<{ x: number; y: number } | null>(null);

  // Force all icons to share the same Y (top row); X comes from store
  const stored = iconPositions[id as IconId] || { x: 24, y: 24 };
  const position = { x: stored.x, y: 24 };

  const handleDrag = (_e: DraggableEvent, data: DraggableData) => {
    // Force Y to always be 24 to keep icons in a straight horizontal line
    updateIconPosition(id as IconId, { x: data.x, y: 24 });
  };

  const handleStart = (_e: DraggableEvent, data: DraggableData) => {
    dragStartPos.current = { x: data.x, y: data.y };
  };

  const handleStop = (_e: DraggableEvent, data: DraggableData) => {
    // Check if icon was actually dragged (moved more than 5px)
    if (dragStartPos.current) {
      const deltaX = Math.abs(data.x - dragStartPos.current.x);
      const deltaY = Math.abs(data.y - dragStartPos.current.y);
      
      if (deltaX < 5 && deltaY < 5) {
        // It was a click, not a drag
        if (externalLink) {
          // Open external link in new tab
          window.open(externalLink, '_blank', 'noopener,noreferrer');
        } else {
          // Open the window
          setTimeout(() => {
            openWindow(id as WindowId);
            if (onDoubleClick) onDoubleClick();
          }, 0);
        }
      }
      dragStartPos.current = null;
    }
  };

  return (
    <Draggable
      position={position}
      onDrag={handleDrag}
      onStart={handleStart}
      onStop={handleStop}
      nodeRef={iconRef}
      bounds="parent"
    >
      <div
        ref={iconRef}
        className="desktop-icon"
      >
        <div className="text-5xl mb-2 drop-shadow-lg">{icon}</div>
        <div className="desktop-icon-label">{label}</div>
      </div>
    </Draggable>
  );
};

export default DesktopIcon;

