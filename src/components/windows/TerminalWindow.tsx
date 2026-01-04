import { useState, useRef, useEffect } from 'react';
import Window from '../Window';

interface Command {
  input: string;
  output: string;
  timestamp: Date;
}

const TerminalWindow = () => {
  const [commands, setCommands] = useState<Command[]>([
    {
      input: '',
      output: 'Welcome to the Terminal! Type "help" to see available commands.',
      timestamp: new Date(),
    },
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands]);

  const executeCommand = (input: string): string => {
    const cmd = input.trim().toLowerCase();

    switch (cmd) {
      case 'help':
        return `Available commands:
  whoami        - Display user information
  help          - Show this help message
  show projects - Display list of projects
  clear         - Clear the terminal
  date          - Show current date and time
  echo <text>   - Echo back the text
  ls            - List directory (just for fun!)
  pwd           - Print working directory`;

      case 'whoami':
        return `User: G V Pranav Sharma
Role: Student 
Location: Earth
Interests: Coding, Machine learning, Open Source, Tech and System Thinking.
Website: localhost:5175`;

      case 'show projects':
        return `Projects:
  1. E-Commerce Platform
     - Tech: React, Node.js, MongoDB, Stripe
     - Status: Live
  
  2. Task Management App
     - Tech: Vue.js, Firebase, TailwindCSS
     - Status: Live
  
  3. Weather Dashboard
     - Tech: React, TypeScript, OpenWeather API
     - Status: Live

Type "help" for more commands.`;

      case 'clear':
        setCommands([]);
        return '';

      case 'date':
        return new Date().toLocaleString();

      case 'ls':
        return `about-me/
projects/
resume/
contact/
terminal/`;

      case 'pwd':
        return '/home/portfolio';

      case '':
        return '';

      default:
        if (cmd.startsWith('echo ')) {
          return input.substring(5).trim() || '(empty)';
        }
        return `Command not found: "${input}". Type "help" for available commands.`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim()) return;

    const output = executeCommand(currentInput);

    if (currentInput.trim().toLowerCase() !== 'clear') {
      setCommands((prev) => [
        ...prev,
        {
          input: currentInput,
          output,
          timestamp: new Date(),
        },
      ]);
    }

    setCommandHistory((prev) => [...prev, currentInput]);
    setHistoryIndex(-1);
    setCurrentInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex >= 0) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput('');
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    }
  };

  return (
    <Window id="terminal" title="Terminal" defaultWidth={700} defaultHeight={500}>
      <div
        ref={terminalRef}
        className="bg-black text-green-400 font-mono text-sm h-full overflow-y-auto p-4"
        style={{ fontFamily: 'Consolas, Monaco, "Courier New", monospace' }}
      >
        {commands.map((cmd, index) => (
          <div key={index} className="mb-2">
            {cmd.input && (
              <div className="text-cyan-400">
                <span className="text-green-400">$</span> {cmd.input}
              </div>
            )}
            {cmd.output && (
              <div className="text-green-400 whitespace-pre-wrap mt-1">{cmd.output}</div>
            )}
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-green-400 mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent text-green-400 outline-none flex-1 font-mono"
            autoFocus
            placeholder="Type a command..."
          />
        </form>
      </div>
    </Window>
  );
};

export default TerminalWindow;

