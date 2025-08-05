import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'PG Diploma in Data Science and AI',
      institution: 'Savitribai Phule Pune University',
      period: 'July 2022 – Aug 2023',
      cgpa: '8.72',
      type: 'Postgraduate',
      color: 'from-blue-500 to-purple-500'
    },
    {
      degree: 'BS in Statistics',
      institution: 'Sir Parashurambhau College, Pune',
      period: 'July 2019 – March 2022',
      cgpa: '9.46',
      type: 'Undergraduate',
      color: 'from-green-500 to-blue-500'
    }
  ];

  const achievements = [
    {
      title: 'Outstanding Academic Performance',
      description: 'Maintained consistently high CGPA across both undergraduate and postgraduate studies',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'Research Publication',
      description: 'Published research on OCR for Historical Data Preservation in IJSREM journal',
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      title: 'Industry Simulation',
      description: 'Completed Tata Group Data Analytics Job Simulation with distinction',
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Education & Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Strong academic foundation in statistics and data science
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Background</h3>
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className={`h-1 bg-gradient-to-r ${edu.color} rounded-full mb-6`}></div>
                
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${edu.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                    <GraduationCap size={20} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        edu.type === 'Postgraduate' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {edu.type}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{edu.degree}</h4>
                    
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">CGPA</span>
                        <span className="text-lg font-bold text-gray-900">{edu.cgpa}</span>
                      </div>
                      <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 bg-gradient-to-r ${edu.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${(parseFloat(edu.cgpa) / 10) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Highlight */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Core Competencies</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">9.46</div>
                  <div className="text-sm text-gray-600">Statistics CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">8.72</div>
                  <div className="text-sm text-gray-600">Data Science CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">20+</div>
                  <div className="text-sm text-gray-600">User Stories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">60+</div>
                  <div className="text-sm text-gray-600">Test Cases</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;