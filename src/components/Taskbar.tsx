import { useEffect, useState } from 'react';
import { useWindowStore } from '../store/windowStore';
import type { WindowId } from '../store/windowStore';

const Taskbar = () => {
  const { windows, restoreWindow, setActiveWindow } = useWindowStore();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const windowLabels: Record<WindowId, string> = {
    about: 'About Me',
    projects: 'Projects',
    resume: 'Resume',
    contact: 'Contact',
    terminal: 'Terminal',
  };

  const openWindows = (Object.keys(windows) as WindowId[]).filter(
    (id) => windows[id].isOpen
  );

  const handleTaskbarClick = (id: WindowId) => {
    const window = windows[id];
    if (window.isMinimized) {
      restoreWindow(id);
    } else {
      setActiveWindow(id);
    }
  };

  return (
    <div className="taskbar fixed bottom-0 left-0 right-0 h-12 flex items-center justify-between px-2 z-50">
      {/* Open windows */}
      <div className="flex-1 flex items-center justify-center space-x-1 overflow-x-auto">
        {openWindows.map((id) => (
          <button
            key={id}
            onClick={() => handleTaskbarClick(id)}
            className={`taskbar-button text-xs font-medium ${
              windows[id].isMinimized
                ? 'opacity-60'
                : 'bg-gradient-to-b from-blue-400 to-blue-500 text-white border-blue-600'
            }`}
          >
            {windowLabels[id]}
          </button>
        ))}
      </div>

      {/* System tray with time */}
      <div className="flex items-center space-x-2 px-3">
        <div className="text-right text-xs font-semibold text-white">
          <div>{formatTime(currentTime)}</div>
          <div className="text-[10px] text-gray-300">{formatDate(currentTime)}</div>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;

