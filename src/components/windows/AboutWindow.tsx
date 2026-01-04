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
            <h2 className="text-2xl font-bold text-gray-800">G V Pranav Sharma</h2>
            <p className="text-gray-600">Student </p>
          </div>
        </div>

        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Bio</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            I’m a computer science student interested in building reliable, well-understood systems.

            I work across machine learning, full-stack development, and systems, with an emphasis on learning by doing and strengthening fundamentals through real projects. I value clarity, discipline, and steady progress, and
            I am focused on growing into an engineer who can translate ideas into solutions that actually work.

          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Skills</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {['C++', 'TypeScript', 'Node.js', 'Python', 'TailwindCSS', 'Express', 'React', 'AWS', 'HTML', 'Javascript', 'Pandas', 'NumPy', 'Scikit-learn', 'PyTorch', 'Flask', 'Git', 'Github', 'MySQL'].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium transition-all duration-200 hover:bg-blue-500 hover:text-white hover:scale-110 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Interests</h3>
          <p className="text-gray-700 leading-relaxed">
            My interests sit at the intersection of software engineering, machine learning, systems, and
            human-centered intelligence. I think in terms of architectures, feedback loops,
            and constraints—and I care deeply about how ideas move from theory to execution.
            Reading Tech blogs, System Design, Machine learning and Problem solving takes up most of my time.

          </p>
        </div>
      </div>
    </Window>
  );
};

export default AboutWindow;

