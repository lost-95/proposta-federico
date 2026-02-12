
import React from 'react';
import Section from '../components/UI/Section';
import ProjectCard from '../components/Portfolio/ProjectCard';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <div className="pt-24 fade-in">
      <Section 
        title="Technical Portfolio" 
        subtitle="End-to-end data solutions solving complex business problems."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project) => (
            <div key={project.id}>
              <ProjectCard project={project} />
              
              {/* Optional detailed summary visible only on larger screens for context */}
              <div className="mt-6 px-4 hidden lg:block">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">Methodology</h4>
                    <p className="text-sm text-gray-600 line-clamp-2">{project.methodology}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">Key Insight</h4>
                    <p className="text-sm text-gray-600 line-clamp-2">{project.insights[0]}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Contribution CTA */}
        <div className="mt-24 p-8 bg-gray-50 border border-gray-200 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold mb-2">Looking for the source code?</h3>
            <p className="text-gray-600">All my projects are open-source and documented on GitHub. Explore my Jupyter notebooks, SQL scripts, and Power BI templates.</p>
          </div>
          <a 
            href="#" 
            className="whitespace-nowrap bg-tech-dark hover:bg-black text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all"
          >
            Explore on GitHub
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.412-4.041-1.412-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </Section>
    </div>
  );
};

export default Portfolio;
