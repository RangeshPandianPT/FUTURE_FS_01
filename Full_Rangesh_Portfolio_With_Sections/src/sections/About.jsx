import React from "react";

const About = () => {
  return (
    <section className="py-16 text-center bg-white">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-gray-700 max-w-3xl mx-auto mb-6">
        I’m RANGESHPANDIAN PT, a Computer Science and Engineering student with a strong passion for Web Development and Data Science. My mission is to create digital solutions that are impactful, efficient, and user-centric.
      </p>
      <a
        href="/resume.pdf"
        download="RANGESHPANDIAN_PT_Resume.pdf"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        📄 Download Resume
      </a>
    </section>
  );
};

export default About;
