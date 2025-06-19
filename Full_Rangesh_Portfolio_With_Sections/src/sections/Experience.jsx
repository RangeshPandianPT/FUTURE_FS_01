import React from "react";

const Experience = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">💼 Experience</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 text-left">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-xl font-semibold text-blue-700">Frontend Developer</h3>
          <p className="text-sm text-gray-500 mb-2">CodeAlpha — June–July 2025</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Worked with modern frontend frameworks</li>
            <li>Agile team experience</li>
          </ul>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-xl font-semibold text-blue-700">Content Writer</h3>
          <p className="text-sm text-gray-500 mb-2">Kshitiksha Foundation — June–July 2025</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Persuasive content writing for social causes</li>
            <li>Nonprofit communication strategy</li>
          </ul>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-xl font-semibold text-blue-700">Full Stack Developer</h3>
          <p className="text-sm text-gray-500 mb-2">Future Interns — June–July 2025</p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Built full-stack applications (frontend + backend)</li>
            <li>Debugging and deployment practice</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
