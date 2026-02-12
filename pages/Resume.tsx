
import React from 'react';
import Section from '../components/UI/Section';
import { SKILLS } from '../constants';

const Resume: React.FC = () => {
  return (
    <div className="pt-24 fade-in">
      <Section title="Professional Resume" subtitle="My journey from Computer Science to Data Science">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-6 border-b-2 border-primary w-fit pb-2">Experience</h3>
              <div className="space-y-8 border-l-2 border-gray-100 ml-3">
                
                <div className="relative pl-8">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
                  <div className="mb-2">
                    <span className="text-sm font-bold text-accent uppercase tracking-wider">Jan 2024 – Present</span>
                    <h4 className="text-xl font-bold text-gray-900">Independent Data Project Lead</h4>
                    <p className="text-gray-500 font-medium">Self-Directed | Portfolio Development</p>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-gray-600 space-y-2 text-sm md:text-base">
                    <li>Developed end-to-end ML pipelines including data ingestion, cleaning, feature engineering, and deployment using Streamlit.</li>
                    <li>Designed an automated SQL-based reporting system for hypothetical retail clients, reducing manual effort by 80%.</li>
                    <li>Performed sentiment analysis on 50k+ Twitter data points using NLP techniques.</li>
                  </ul>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gray-300 border-4 border-white"></div>
                  <div className="mb-2">
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Sep 2022 – Jun 2023</span>
                    <h4 className="text-xl font-bold text-gray-900">Research Assistant (CS Graduate Project)</h4>
                    <p className="text-gray-500 font-medium">University of Technical Excellence</p>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-gray-600 space-y-2 text-sm md:text-base">
                    <li>Optimized sorting algorithms for large-scale genetic datasets, improving processing speed by 15%.</li>
                    <li>Assisted in the development of a predictive maintenance model for campus server infrastructure.</li>
                    <li>Drafted technical documentation and presented findings to faculty stakeholders.</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 border-b-2 border-primary w-fit pb-2">Education</h3>
              <div className="space-y-8 border-l-2 border-gray-100 ml-3">
                <div className="relative pl-8">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
                  <div className="mb-2">
                    <span className="text-sm font-bold text-accent">2020 – 2023</span>
                    <h4 className="text-xl font-bold text-gray-900">BSc Computer Science</h4>
                    <p className="text-gray-500">University of Technical Excellence | First Class Honours</p>
                  </div>
                  <p className="text-sm text-gray-600">Focused on Algorithms, Distributed Systems, and Artificial Intelligence. Thesis: "Machine Learning in Financial Fraud Detection."</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-6 border-b-2 border-primary w-fit pb-2">Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900">Google Data Analytics Professional</h4>
                  <p className="text-sm text-gray-500">Coursera | 2024</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900">Supervised Machine Learning</h4>
                  <p className="text-sm text-gray-500">DeepLearning.AI | 2023</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900">Microsoft Certified: Power BI Data Analyst</h4>
                  <p className="text-sm text-gray-500">Microsoft | 2024</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900">Advanced SQL for Data Science</h4>
                  <p className="text-sm text-gray-500">Udemy | 2023</p>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar / Skills */}
          <div className="space-y-12">
            <div className="bg-tech-dark p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-2">Technical Summary</h3>
              <div className="space-y-6">
                {SKILLS.map(group => (
                  <div key={group.category}>
                    <h4 className="text-accent font-bold text-xs uppercase mb-3">{group.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map(item => (
                        <span key={item} className="bg-white/10 px-3 py-1 rounded text-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-10 bg-primary hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2">
                Download PDF CV
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
};

export default Resume;
