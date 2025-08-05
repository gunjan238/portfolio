import React, { useState } from 'react';
import { ExternalLink, Github, Star, TrendingUp, Home, Calendar, FileText } from 'lucide-react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: 'AstroStatistics - MAGIC Gamma Ray Telescope',
      description: 'Classification of reading data from the MAGIC Gamma Ray Telescope using modern ML methods including CART (Classification and Regression Trees). Applied statistical methods to determine model accuracy and used R software for analysis and model fitting.',
      icon: <Star className="w-6 h-6" />,
      tags: ['R', 'Machine Learning', 'CART', 'Statistical Analysis', 'Classification'],
      type: 'Research',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Airbnb NYC Data Analysis',
      description: 'Comprehensive analysis of NYC Airbnb dataset including data cleaning, preprocessing, and exploratory data analysis. Uncovered trends in pricing, room types, and review patterns using advanced visualization techniques.',
      icon: <Home className="w-6 h-6" />,
      tags: ['Python', 'Pandas', 'Data Visualization', 'EDA', 'Statistical Analysis'],
      type: 'Data Analysis',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Boston Housing Regression Analysis',
      description: 'Built and evaluated a linear regression model to predict house prices. Performed feature impact assessment, model performance evaluation using R-squared and MSE, and created visualizations comparing predictions vs. actuals.',
      icon: <TrendingUp className="w-6 h-6" />,
      tags: ['Python', 'Linear Regression', 'Model Evaluation', 'Predictive Analytics'],
      type: 'Machine Learning',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Time Series Forecasting - Stock Price Analysis',
      description: 'Comprehensive time series analysis of Amazon stock data using Yahoo Finance API. Implemented seasonal decomposition, moving averages for trend analysis, and forecasting techniques to predict stock price movements.',
      icon: <Calendar className="w-6 h-6" />,
      tags: ['Python', 'Time Series', 'Yahoo Finance API', 'Forecasting', 'Financial Analysis'],
      type: 'Financial Analytics',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'OCR for Historical Data Preservation',
      description: 'Developed an OCR pipeline for the Indus script using deep learning and image processing. Created annotated datasets, implemented CNN models for symbol recognition, and facilitated digital preservation of archaeological records.',
      icon: <FileText className="w-6 h-6" />,
      tags: ['Deep Learning', 'OpenCV', 'CNN', 'OCR', 'Image Processing'],
      type: 'Research Publication',
      color: 'from-indigo-500 to-purple-500',
      publication: 'Published in International Journal of Scientific Research in Engineering and Management (IJSREM), September 2023'
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Research': return 'bg-purple-100 text-purple-800';
      case 'Data Analysis': return 'bg-blue-100 text-blue-800';
      case 'Machine Learning': return 'bg-green-100 text-green-800';
      case 'Financial Analytics': return 'bg-orange-100 text-orange-800';
      case 'Research Publication': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my work in data science, machine learning, and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center text-white`}>
                    {project.icon}
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getTypeColor(project.type)}`}>
                    {project.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {project.publication && (
                  <div className="mb-4 p-3 bg-indigo-50 rounded-lg">
                    <p className="text-xs text-indigo-700 font-medium">
                      📄 {project.publication}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 hover:scale-105 transition-all duration-200 text-sm">
                    <Github size={16} />
                    <span>View Code</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 hover:scale-105 transition-all duration-200 text-sm">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {showAll ? 'Show Less' : 'View All Projects'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;