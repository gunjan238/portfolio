import React from 'react';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    
    {
      title: 'Software Engineer',
      company: 'Blockbuzz Innovate Pvt. Ltd.',
      location: 'Mumbai',
      period: 'Dec 2023 – Present',
      type: 'Current',
      responsibilities: [
        'Collaborated on the development of an Android e-Commerce application, ensuring timely sprint deliveries',
        'Designed and implemented user interface features for more than 20+ user stories using Flutter and Dart, improving user interaction flow',
        'Conducted rigorous testing for 60+ test cases including functional, integration, and UI regression tests',
        'Created reusable widgets and modular components improving code maintainability by 25%'
      ]
    },
    {
      title: 'Data Analysis Intern',
      company: 'Codveda Technologies',
      location: 'Remote',
      period: 'July 2025 – Aug 2025',
      type: 'Current',
      responsibilities: [
        'Worked on exploratory data analysis (EDA) tasks using Python, Pandas, and Matplotlib to uncover trends and correlations',
        'Data cleaning, pre-processing, and visualization performed for real-world datasets to support actionable insights',
        'Used Jupyter notebooks to document workflows and present findings effectively'
      ]
    },
    {
      title: 'FullStack Developer Intern',
      company: 'Blockbuzz Innovate Pvt. Ltd.',
      location: 'Mumbai',
      period: 'June 2022 – Dec 2023',
      type: 'Past',
      responsibilities: [
        'Gained hands-on experience with Flutter and Dart while learning the company\'s technology stack',
        'Focused on designing and building interactive and visually appealing UI components for mobile applications',
        'Assisted in basic API integration and supported the testing team with UI bug fixes'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My journey through software development and data analytics roles
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    {exp.type === 'Current' && (
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <Building2 size={16} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <div key={respIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">{responsibility}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Certifications & Extra Curricular
          </h3>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Tata Group Data Analytics Job Simulation on Forage
                </h4>
                <p className="text-gray-600 mb-4">July 2025</p>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Completed a job simulation involving AI-powered data analytics and strategy development for the Financial Services team at Tata iQ</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Conducted exploratory data analysis (EDA) using GenAI tools to assess data quality, identify risk indicators, and structure insights for predictive modeling</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Designed an AI-driven collections strategy leveraging agentic AI and automation, incorporating ethical AI principles and regulatory compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;