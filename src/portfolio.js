import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Challa Chaitanya Phani</h1>
        <p className="text-xl text-gray-400">Aspiring Software Engineer | Web Developer</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="text-gray-300">I am a passionate software engineer with skills in web development and cloud computing. Always eager to learn and implement new technologies.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="list-disc pl-6 text-gray-300">
          <li>React.js</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>Machine Learning</li>
          <li>Cloud Computing (AWS, Azure)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <ul className="list-disc pl-6 text-gray-300">
          <li>Personal Portfolio Website - Deployed using Vercel</li>
          <li>Code Recommendation System - ML Integrated</li>
          <li>Face Recognition App - Python and OpenCV</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-gray-300">Email: chaitanyaphanichalla@gmail.com</p>
        <p className="text-gray-300">LinkedIn: linkedin.com/in/chaitanyaiscoding</p>
      </section>
    </div>
  );
}

export default App;
