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

      <nav className="bg-white shadow-md p-4 sticky top-0 flex justify-center gap-6">
        {['About Me', 'Education', 'Technical Skills', 'Professional Experience', 'Contact'].map((item, index) => (
          <a key={index} href={`#${item.replace(/\s+/g, '').toLowerCase()}`} className="text-gray-700 hover:text-indigo-500 transition duration-300">
            {item}
          </a>
        ))}
      </nav>

      <main className="container mx-auto p-6">
        {["About Me", "Education", "Technical Skills", "Professional Experience", "Contact"].map((section, index) => (
          <motion.section 
            key={index} 
            id={section.replace(/\s+/g, '').toLowerCase()}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`bg-white p-6 shadow-lg rounded-lg mb-6 border-l-4 border-${["indigo", "purple", "blue", "teal", "pink"][index]}-400 hover:scale-105 transition-transform duration-300`}
          >
            <h2 className="text-2xl font-bold mb-2">{section}</h2>
            {section === "About Me" && <p>Highly analytical and detail-oriented software developer with expertise in Python, data science, and machine learning. Passionate about problem-solving and innovation.</p>}
            {section === "Education" && <ul className="list-disc pl-6"><li>Diploma in Electrical Engineering – Government Polytechnic College</li><li>Intermediate – DAV Public School</li><li>Secondary Education – DAV Public School</li></ul>}
            {section === "Technical Skills" && <ul className="list-disc pl-6"><li>Programming: Python (Advanced), SQL</li><li>Cloud Computing: AWS, Azure OpenAI</li><li>Data Science: NumPy, Pandas, Matplotlib</li><li>Machine Learning: Linear Regression, Logistic Regression</li><li>Software Development: Agile, Automation, ServiceNow</li></ul>}
            {section === "Professional Experience" && <ul className="list-disc pl-6"><li>Engineered and maintained Python-based applications.</li><li>Developed and deployed machine learning models.</li><li>Optimized SQL queries for better performance.</li><li>Automated reporting workflows, reducing manual effort.</li><li>Monitored system performance using ServiceNow and Dynatrace.</li></ul>}
            {section === "Contact" && <p>Email: <a href="mailto:aatishr763@gmail.com" className="text-blue-500">aatishr763@gmail.com</a></p>}
            {section === "Contact" && <p>LinkedIn: <a href="https://linkedin.com/in/aatishr763" target="_blank" className="text-blue-500">linkedin.com/in/aatishr763</a></p>}
          </motion.section>
        ))}
      </main>
    </div>
  );
};

export default Portfolio;
