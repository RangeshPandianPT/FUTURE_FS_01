import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-16 bg-blue-100 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">📬 Contact</h2>
      <p className="text-gray-700 mb-6">
        Feel free to reach out for collaborations or just to connect!
      </p>
      <div className="flex justify-center gap-8 text-2xl text-gray-700">
        <a href="https://github.com/RangeshPandianPT" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/rangeshpandian-pt-428b04325" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://www.instagram.com/_rangesh_07?igsh=NmhobGJiNWJ5cTZ2" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="mailto:rangeshpandian@gmail.com"><FaEnvelope /></a>
      </div>
    </section>
  );
};

export default Contact;
