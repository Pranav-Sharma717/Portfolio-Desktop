import Window from '../Window';

const AboutWindow = () => {
  return (
    <Window id="about" title="About Me" defaultWidth={600} defaultHeight={500}>
      <div className="space-y-4">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-5xl">
            👤
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
            <p className="text-gray-600">Full Stack Developer</p>
          </div>
        </div>

        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Bio</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hello! I'm a passionate full-stack developer with over 5 years of experience
            building web applications. I love creating beautiful, functional, and user-friendly
            interfaces that solve real-world problems.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Skills</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {['React', 'TypeScript', 'Node.js', 'Python', 'TailwindCSS', 'PostgreSQL', 'Docker', 'AWS'].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Interests</h3>
          <p className="text-gray-700 leading-relaxed">
            When I'm not coding, I enjoy contributing to open-source projects, reading tech blogs,
            and exploring new frameworks. I'm always eager to learn and share knowledge with the
            developer community.
          </p>
        </div>
      </div>
    </Window>
  );
};

export default AboutWindow;

