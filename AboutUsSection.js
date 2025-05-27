const AboutUsSection = () => {
    return (
      <div className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section - Image and Talent Pool */}
          <div>
            <img src="C:\Users\shara\OneDrive\Desktop\mindtree-solutions\New Images\about us.jpg" alt="Team working" className="w-full h-auto mb-6" />
  
            {/* Talent Pool Section */}
            <h3 className="font-semibold text-xl mb-2">We have amassed a talent pool of 60+ overachievers, comprised of:</h3>
            <ul className="list-none space-y-2 mb-6">
              <li className="flex items-center"><span className="text-blue-500 mr-2">✔</span> Imaginative user experience (UX) architects</li>
              <li className="flex items-center"><span className="text-blue-500 mr-2">✔</span> Industry certified software developers</li>
              <li className="flex items-center"><span className="text-blue-500 mr-2">✔</span> Battle hardened digital strategists</li>
              <li className="flex items-center"><span className="text-blue-500 mr-2">✔</span> Inescapable project managers</li>
            </ul>
  
            <h3 className="font-semibold text-xl mb-2">Exposure to world class Development</h3>
            <p className="text-gray-600 mb-6">
              Relationships with companies who are at the forefront of technology provide our engineers with exposure to world-class development.
            </p>
          </div>
  
          {/* Right Section - Content */}
          <div>
            <h2 className="text-4xl font-extrabold mb-4 text-blue-700">ABOUT US</h2>
            <h2 className="text-3xl font-bold mb-4 leading-tight">We are designers. <br />We are developers.</h2>
            <p className="text-gray-600 mb-6">
              Centrepoint is a global company specializing in software product and technology. ALIF offers customized software product and IT services. We provide "cutting-edge" solutions that deliver competitive advantage to our valued clients. Our disciplined management techniques, domain knowledge and holistic approach constantly develop ways to enhance value to our clients.
            </p>
  
            {/* Dropdown Section */}
            <div className="space-y-2">
              <details className="border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer bg-gray-100 text-blue-600 font-medium flex justify-between items-center">
                  Talented resource through training
                  <span className="text-gray-500">▼</span>
                </summary>
                <div className="px-4 py-2 text-gray-600">
                  We provide financial assistance for job-related education and training to build a strong team across various platforms.
                </div>
              </details>
  
              <details className="border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer bg-gray-100 text-blue-600 font-medium flex justify-between items-center">
                  Professional Environment
                  <span className="text-gray-500">▼</span>
                </summary>
                <div className="px-4 py-2 text-gray-600">
                  Centrepoint provides a safe, energetic and professional environment in which to pursue challenging career opportunities.
                </div>
              </details>
  
              <details className="border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer bg-gray-100 text-blue-600 font-medium flex justify-between items-center">
                  Performance Appraisals
                  <span className="text-gray-500">▼</span>
                </summary>
                <div className="px-4 py-2 text-gray-600">
                  Centrepoint rewards individual excellence within a team framework and encourages fresh and innovative ideas.
                </div>
              </details>
  
              <details className="border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer bg-gray-100 text-blue-600 font-medium flex justify-between items-center">
                  Employee Benefits
                  <span className="text-gray-500">▼</span>
                </summary>
                <div className="px-4 py-2 text-gray-600">
                  Various loan schemes, a comprehensive health insurance scheme and generous travel allowances are just a few of the benefits availed to employees at Centrepoint. Centrepoint offers a comprehensive benefit program to meet employee needs, which includes salary advance, loans, education grant, etc.
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUsSection;
  