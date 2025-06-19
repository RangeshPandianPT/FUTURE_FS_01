import React from "react";

const Projects = () => {
  return (
    <section className="py-16 bg-sky-50 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">💻 Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="bg-white p-6 shadow rounded">
          <h3 className="text-xl font-semibold">E-commerce Website</h3>
          <p className="text-gray-600">Built with React, Node.js, MongoDB</p>
        </div>
        <div className="bg-white p-6 shadow rounded">
          <h3 className="text-xl font-semibold">Weather App</h3>
          <p className="text-gray-600">HTML, CSS, JS & OpenWeather API</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
