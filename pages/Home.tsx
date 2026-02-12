
import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/UI/Section';
import { SKILLS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 gradient-hero text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Lorenzo Santarelli
            </h1>
            <p className="text-xl md:text-2xl font-medium text-white/90 mb-4">
              Entry-Level Data Analyst | Junior Data Scientist
            </p>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
              Transforming raw data into actionable insights through rigorous analytics and scalable machine learning models.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/portfolio" 
                className="bg-accent hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all text-center flex items-center justify-center gap-2"
              >
                View Projects
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg border border-white/30 backdrop-blur-sm transition-all text-center"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <Section title="Professional Summary" dark>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-700 leading-relaxed">
            With a solid foundation in <strong>Computer Science</strong>, I specialize in bridging the gap between technical complexity and business strategy. I excel at cleaning messy datasets, building predictive models, and communicating complex findings to stakeholders in a clear, compelling way. My approach combines algorithmic rigor with a deep passion for data-driven decision making.
          </p>
        </div>
      </Section>

      {/* Skills Grid */}
      <Section title="Core Technical Skills" subtitle="Modern tools for modern data problems">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skillGroup) => (
            <div key={skillGroup.category} className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-primary/30 transition-colors">
              <h3 className="text-lg font-bold text-primary mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map(skill => (
                  <li key={skill} className="text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Value Proposition */}
      <Section title="How I Create Value" dark>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Translate Raw Data</h3>
            <p className="text-gray-600">Turning unstructured noise into actionable strategic insights for business growth.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Predictive Excellence</h3>
            <p className="text-gray-600">Building robust ML models that accurately forecast trends and mitigate business risks.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Clear Communication</h3>
            <p className="text-gray-600">Articulating complex technical concepts to non-technical stakeholders with clarity.</p>
          </div>
        </div>
      </Section>

      {/* CTA Footer Section */}
      <section className="py-20 bg-tech-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Interested in working together?</h2>
          <p className="text-white/70 mb-10 text-lg">I am currently open to Entry-Level Data Analyst and Junior Data Scientist opportunities in the UK and USA.</p>
          <Link 
            to="/contact" 
            className="inline-block bg-primary hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-lg transition-all"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
