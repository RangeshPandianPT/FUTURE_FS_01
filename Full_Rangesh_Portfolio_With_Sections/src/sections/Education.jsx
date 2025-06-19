import React from "react";

const Education = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">🎓 Education</h2>
      <div className="max-w-3xl mx-auto text-left space-y-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-blue-700">SRM Institute of Science and Technology</h3>
          <p className="text-sm text-gray-500 mb-2">B.Tech – Computer Science & Engineering</p>
          <p className="text-gray-700">Expected Graduation: 2028</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-blue-700">Fairlands A Foundation School</h3>
          <p className="text-sm text-gray-500 mb-2">Higher Secondary (CBSE)</p>
          <p className="text-gray-700">Completed: 2024 – 92.8%</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
