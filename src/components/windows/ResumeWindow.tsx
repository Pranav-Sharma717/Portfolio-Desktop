import Window from '../Window';

const ResumeWindow = () => {
  return (
    <Window id="resume" title="Resume" defaultWidth={700} defaultHeight={600}>
      <div className="space-y-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex-1 text-center">G V Pranav Sharma</h2>
          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-medium"
          >
            📥 Download PDF
          </a>
        </div>



        <div className="prose max-w-none">
          {/* About */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-gray-800">I am currently pursuing a B.Tech in Computer Science. As a builder driven by curiosity and shaped by discipline, I work
                    at the intersection of machine learning, systems thinking, and real-world impact. Whether developing intelligent
                    recommendation engines, sustainable technology, or financial inclusion tools, I approach each project with clarity, intent,
                    and respect for both the craft and my collaborators.</h4>
                </div>
              </div>
            </div>
          </section>
          {/* Certifications */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
              Certifications
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Supervised Machine Learning Deeplearning.AI (2025)</li>
              <li>Deep Learning NPTEL(2025)</li>
              <li>Responsive Web Design (2024)</li>
              <li>Python Programming HackerRank (2024)</li>
              <li>Google Analytics Google (2024)</li>
            </ul>
          </section>
          {/* Experience Section */}
          <div>
            <section className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                Experience
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-semibold text-gray-800">Web and Social Media Content Developer and Digital Marketing Intern</h4>
                    <span className="text-sm text-gray-600">Nov 2023 - Feb 2024</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-1">DreamSoft4uPvt. Ltd.</p>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-4">
                    <li>Specialized in website content development and social media management</li>
                    <li>Handled content posting and schema codes for healthcare website(Kayawell)</li>
                    <li>Drove the company's all-time highest social media engagement.</li>
                  </ul>
                </div>

                {/* <div>
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
                </div> */}
              </div>
            </section>
          </div>

          {/* Education Section */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
              Education
            </h3>
            <div>
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-semibold text-gray-800">Bachelor of Science in Computer Science</h4>
                <span className="text-sm text-gray-600">2023 - 2027</span>
              </div>
              <p className="text-gray-600 text-sm">Vellore Institute of Technology Bhopal</p>
            </div>
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

