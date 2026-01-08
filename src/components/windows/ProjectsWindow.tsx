import Window from '../Window';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Product Recommendation System for E-commerce website',
    description: 'An E-commerce website with integrated content based filtering recommendation system. Along with implementation of different types of recommendation systems',
    tech: ['Html', 'CSS', 'MySQL', 'Flask', 'JavaScript', 'Python'],
    image: '🛒',
    link: 'https://example.com',
    github: 'https://github.com/example',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
    tech: ['Vue.js', 'Firebase', 'TailwindCSS'],
    image: '📋',
    link: 'https://example.com',
    github: 'https://github.com/example',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and weather alerts.',
    tech: ['React', 'TypeScript', 'OpenWeather API'],
    image: '🌤️',
    link: 'https://example.com',
    github: 'https://github.com/example',
  },
];

const ProjectsWindow = () => {
  return (
    <Window id="projects" title="Projects" defaultWidth={700} defaultHeight={600}>
      <div className="space-y-6">
        <p className="text-gray-600 mb-4">
          Here are some of my recent projects. Click on any project to learn more or view the source code.
        </p>

        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-400 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="text-5xl flex-shrink-0">{project.image}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    <div className="flex space-x-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-800 text-sm"
                          title="View on GitHub"
                        >
                          📦 GitHub
                        </a>
                      )}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        title="View Live Demo"
                      >
                        🔗 Live Demo
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
};

export default ProjectsWindow;

