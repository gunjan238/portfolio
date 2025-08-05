import React from 'react';
import { Code, Database, BarChart3, Palette, Brain, Target } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      items: ['Python (NumPy, Pandas)', 'R (Data cleaning, Visualization)', 'Flutter', 'Dart', 'MySQL (DDL, DML, Constraints)']
    },
    {
      category: 'Data & Analytics',
      icon: <BarChart3 className="w-6 h-6" />,
      items: ['Statistical Analysis', 'Hypothesis Testing', 'Machine Learning (KNN, Classification)', 'PowerBI', 'Time Series Analysis']
    },
    {
      category: 'Development & Design',
      icon: <Palette className="w-6 h-6" />,
      items: ['UI/UX Design', 'Mobile App Development', 'API Integration', 'Testing (Functional, Integration, UI Regression)']
    }
  ];

  const highlights = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: 'Problem Solver',
      description: 'Demonstrated ability to extract actionable insights from complex datasets and build scalable solutions.'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: 'Continuous Learner',
      description: 'Currently transitioning into data analytics while maintaining expertise in software development.'
    },
    {
      icon: <Database className="w-8 h-8 text-green-600" />,
      title: 'Data-Driven',
      description: 'Strong foundation in statistics and data science with hands-on experience in real-world projects.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm passionate about leveraging technology and data to solve complex problems and drive meaningful insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="prose prose-lg text-gray-700 animate-fade-in">
              <p>
                Software Engineer with expertise in data science, Flutter development, and machine learning. 
                Currently transitioning into data analytics with hands-on experience in Python, R, and statistical analysis.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 animate-slide-up">
              {highlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-200 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{highlight.title}</h3>
                    <p className="text-gray-600 text-sm">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 animate-fade-in">Skills & Expertise</h3>
            {skills.map((skillGroup, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-blue-600">
                    {skillGroup.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">{skillGroup.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;