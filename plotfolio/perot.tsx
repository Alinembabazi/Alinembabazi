import React, { useState } from 'react';
import { User, Code, Send } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const personalInfo = {
    name: 'UWABABYEYI',
    title: 'Web Developer & Tech Enthusiast',
    description: `Passionate web developer, tech enthusiast, and student at CodeAlpha, 
      specializing in front-end development. Dedicated to transforming ideas into 
      functional and user-friendly websites with a creative and problem-solving mindset.`,
    skills: [
      { category: 'Technical Skills', items: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Problem-Solving'] },
      { category: 'Tools', items: ['Canva', 'MS Office', 'AI Career Essentials'] },
      { category: 'Experience', items: ['1+ years in Front-End Development'] }
    ],
    hobbies: ['Praying', 'Listening to Gospel Music', 'Continuous Learning', 'Developing Projects']
  };

  const sections = {
    about: {
      icon: <User className="w-6 h-6" />,
      content: (
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <img 
              src="/api/placeholder/250/250" 
              alt="Profile" 
              className="w-64 h-64 rounded-full border-4 border-blue-500 shadow-xl object-cover"
            />
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-blue-800 mb-2">{personalInfo.name}</h1>
              <p className="text-blue-600 text-xl mb-4">{personalInfo.title}</p>
              <p className="text-gray-700 mb-6">{personalInfo.description}</p>
              
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  📥 Download CV
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {personalInfo.skills.map((skillGroup, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-blue-700 mb-4 text-lg">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 mr-3 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )
    },
    skills: {
      icon: <Code className="w-6 h-6" />,
      content: (
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">My Journey & Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-700 mb-6">Professional Timeline</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-green-600">CodeAlpha Student</h4>
                  <p className="text-gray-600">Front-End Development Specialization</p>
                  <span className="text-sm text-gray-500">2023 - Present</span>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-green-600">Web Development Journey</h4>
                  <p className="text-gray-600">Personal Projects & Learning</p>
                  <span className="text-sm text-gray-500">2022 - 2023</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-700 mb-6">Core Competencies</h3>
              <div className="flex flex-wrap gap-3">
                {['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design', 'Problem Solving', 'UI/UX']
                  .map((skill, index) => (
                    <span 
                      key={index} 
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-700 mb-6">Personal Growth</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {personalInfo.hobbies.map((hobby, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 mr-3 rounded-full"></span>
                  <span className="text-gray-700">{hobby}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    contact: {
      icon: <Send className="w-6 h-6" />,
      content: (
        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-indigo-800 mb-8 text-center">Get In Touch</h2>
          <form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-indigo-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full p-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-indigo-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full p-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-indigo-700 mb-2">Your Message</label>
              <textarea 
                placeholder="Type your message here" 
                rows={5} 
                className="w-full p-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 text-center shadow-md">
        <h1 className="text-4xl font-bold">{personalInfo.name}</h1>
        <p className="text-blue-100 mt-2">{personalInfo.title}</p>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-800 py-4 flex justify-center space-x-6 shadow-md">
        {Object.keys(sections).map(section => (
          <button 
            key={section}
            onClick={() => setActiveSection(section)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
              activeSection === section 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {sections[section].icon}
            <span className="capitalize">{section}</span>
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {sections[activeSection].content}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 shadow-inner">
        <p>&copy; 2024 {personalInfo.name} Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;