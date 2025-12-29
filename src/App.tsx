import { useEffect } from 'react';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import AboutWindow from './components/windows/AboutWindow';
import ProjectsWindow from './components/windows/ProjectsWindow';
import ResumeWindow from './components/windows/ResumeWindow';
import ContactWindow from './components/windows/ContactWindow';
import TerminalWindow from './components/windows/TerminalWindow';

function App() {
  useEffect(() => {
    // Always set dark mode
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark');
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden dark">
      <Desktop />
      <Taskbar />
      
      {/* Render all windows */}
      <AboutWindow />
      <ProjectsWindow />
      <ResumeWindow />
      <ContactWindow />
      <TerminalWindow />
    </div>
  );
}

export default App;

