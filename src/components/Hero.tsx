import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Gunjan Kothari
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 font-medium">
                Software Engineer & Data Analyst
              </p>
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                Software Engineer with a strong foundation in statistics, data science, and UI/UX design. 
                Experienced in building e-commerce platforms using Flutter and Dart, and skilled in Python, 
                R, MySQL, and machine learning. Currently transitioning into data analytics to drive 
                data-informed decision-making.
              </p>
            </div>

           <div className="flex space-x-4">
  <a
  href="/Gunjan_Kothari_resume.pdf"
  download
  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl"
>
  <Download size={20} />
  <span>Download Resume</span>
</a>

 

  <button 
    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
    className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 hover:scale-105 transition-all duration-200"
  >
    Get in Touch
  </button>
</div>

            <div className="flex flex-wrap gap-6 text-gray-600 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>Pune, Maharashtra</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} />
                <span>gunjankothari29@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} />
                <span>9359434872</span>
              </div>
            </div>

            <div className="flex space-x-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <a
                href="https://github.com/gunjan238"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center hover:bg-gray-800 hover:scale-110 transition-all duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/gunjan-kothari-bd290901"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 hover:scale-110 transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 animate-float">
              <img
                src="/self.jpg"
                alt="Gunjan Kothari"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-3xl opacity-20 transform scale-105 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;