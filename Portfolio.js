import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 text-gray-900">
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 text-center shadow-md"
      >
        <h1 className="text-3xl font-bold">Aatish Ranjan</h1>
        <p className="text-lg">Software Developer & Data Science Enthusiast</p>
      </motion.header>

      <nav className="bg-white/70 backdrop-blur-md shadow-lg p-4 sticky top-0 flex justify-center gap-6 rounded-b-xl z-10">
        {['About Me', 'Education', 'Technical Skills', 'Professional Experience', 'Personal Projects', 'Contact'].map((item, index) => (
          <a key={index} href={`#${item.replace(/\s+/g, '').toLowerCase()}`} className="text-gray-700 font-medium hover:text-indigo-600 hover:underline underline-offset-4 transition duration-300 px-2 py-1 rounded-lg hover:bg-indigo-50">
            {item}
          </a>
        ))}
      </nav>

      <main className="container mx-auto p-6">
        {[
          "About Me",
          "Education",
          "Technical Skills",
          "Professional Experience",
          "Personal Projects",
          "Contact"
        ].map((section, index) => (
          <motion.section
            key={index}
            id={section.replace(/\s+/g, '').toLowerCase()}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.18 }}
            className={`bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl mb-8 border-l-8 border-${["indigo", "purple", "blue", "teal", "orange", "pink"][index]}-400 hover:scale-[1.03] transition-transform duration-300`}
            style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)' }}
          >
            <h2
              className={
                `text-2xl font-extrabold mb-3 tracking-tight drop-shadow-sm text-${["indigo", "purple", "blue", "teal", "orange", "pink"][index]}-600`
              }
            >
              {section}
            </h2>
            {section === "About Me" && (
              <p className="text-lg leading-relaxed">
                Highly analytical and detail-oriented software developer with expertise in Python, data science, and machine learning. Passionate about problem-solving, innovation, and building impactful digital solutions.
              </p>
            )}
            {section === "Education" && (
              <ul className="list-disc pl-6 space-y-1">
                <li>Diploma in Electrical Engineering – Government Polytechnic College</li>
                <li>Intermediate – DAV Public School</li>
                <li>Secondary Education – DAV Public School</li>
              </ul>
            )}
            {section === "Technical Skills" && (
              <ul className="list-disc pl-6 space-y-1">
                <li>Programming: <span className="font-semibold text-indigo-600">Python (Advanced)</span>, SQL</li>
                <li>Cloud Computing: AWS, Azure OpenAI</li>
                <li>Data Science: NumPy, Pandas, Matplotlib</li>
                <li>Machine Learning: Linear Regression, Logistic Regression</li>
                <li>Software Development: Agile, Automation, ServiceNow</li>
              </ul>
            )}
            {section === "Professional Experience" && (
              <ul className="list-disc pl-6 space-y-1">
                <li>Engineered and maintained Python-based applications.</li>
                <li>Developed and deployed machine learning models.</li>
                <li>Optimized SQL queries for better performance.</li>
                <li>Automated reporting workflows, reducing manual effort.</li>
                <li>Monitored system performance using ServiceNow and Dynatrace.</li>
              </ul>
            )}
            {section === "Personal Projects" && (
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-orange-200 via-yellow-100 to-pink-100 p-4 rounded-xl shadow flex flex-col md:flex-row md:items-center gap-3 border-l-4 border-orange-400">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-orange-600 mb-1">Smartiyo.com</h3>
                    <p className="text-gray-700">A modern platform for smart digital solutions, designed and developed as a personal project to solve real-world problems with technology.</p>
                  </div>
                  <a href="https://smartiyo.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 md:mt-0 px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition">Visit Site</a>
                </div>
              </div>
            )}
            {section === "Contact" && (
              <div className="space-y-1">
                <p>Email: <a href="mailto:aatishr763@gmail.com" className="text-blue-500 hover:underline">aatishr763@gmail.com</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/aatishr763" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">linkedin.com/in/aatishr763</a></p>
              </div>
            )}
          </motion.section>
        ))}
      </main>
    </div>
  );
};

export default Portfolio;
