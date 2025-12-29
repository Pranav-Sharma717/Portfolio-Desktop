import Window from '../Window';

const ResumeWindow = () => {
  return (
    <Window id="resume" title="Resume" defaultWidth={700} defaultHeight={600}>
      <div className="space-y-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-medium"
          >
            📥 Download PDF
          </a>
        </div>

        <div className="prose max-w-none">
          {/* Experience Section */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
              Experience
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-gray-800">Senior Full Stack Developer</h4>
                  <span className="text-sm text-gray-600">2021 - Present</span>
                </div>
                <p className="text-gray-600 text-sm mb-1">Tech Company Inc.</p>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-4">
                  <li>Led development of customer-facing web applications serving 100K+ users</li>
                  <li>Architected and implemented microservices using Node.js and Docker</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-gray-800">Full Stack Developer</h4>
                  <span className="text-sm text-gray-600">2019 - 2021</span>
                </div>
                <p className="text-gray-600 text-sm mb-1">Startup Solutions</p>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-4">
                  <li>Developed responsive web applications using React and TypeScript</li>
                  <li>Built RESTful APIs and integrated third-party services</li>
                  <li>Collaborated with design team to implement pixel-perfect UIs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
              Education
            </h3>
            <div>
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-semibold text-gray-800">Bachelor of Science in Computer Science</h4>
                <span className="text-sm text-gray-600">2015 - 2019</span>
              </div>
              <p className="text-gray-600 text-sm">University of Technology</p>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
              Certifications
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>AWS Certified Solutions Architect (2023)</li>
              <li>Google Cloud Professional Cloud Architect (2022)</li>
              <li>MongoDB Certified Developer (2021)</li>
            </ul>
          </section>
        </div>

        {/* Note about PDF */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> For a complete resume with detailed work history, please download the PDF version.
            The PDF includes additional sections such as publications, awards, and references.
          </p>
        </div>
      </div>
    </Window>
  );
};

export default ResumeWindow;

