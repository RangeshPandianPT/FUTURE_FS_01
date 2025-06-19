import React from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import Contact from "../sections/Contact";
import QuoteDivider from "./QuoteDivider";

const MainPortfolio = () => {
  return (
    <>
      <Hero />
      <QuoteDivider text="Code is like humor. When you have to explain it, it’s bad. – Cory House" />
      <About />
      <QuoteDivider text="In God we trust. All others must bring data. – W. Edwards Deming" />
      <Skills />
      <QuoteDivider text="First, solve the problem. Then, write the code. – John Johnson" />
      <Projects />
      <QuoteDivider text="The goal is to turn data into information, and information into insight. – Carly Fiorina" />
      <Experience />
      <QuoteDivider text="Your code should tell a story. – Steve McConnell" />
      <Education />
      <QuoteDivider text="Data science is the future, and those who master it are the architects of tomorrow." />
      <Contact />
    </>
  );
};

export default MainPortfolio;
