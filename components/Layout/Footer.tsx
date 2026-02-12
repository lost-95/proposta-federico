
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white text-sm font-bold">
                LS
              </div>
              <h3 className="text-xl font-bold text-slate-900">LS Digital</h3>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed text-sm">
              Data-driven insights for enterprise environments. Specialized in SQL query optimization and machine learning model deployment.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">Explore</h4>
            <ul className="space-y-3 text-sm text-slate-500 font-medium">
              <li><Link to="/" className="hover:text-primary transition-colors">About Me</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/resume" className="hover:text-primary transition-colors">Resume / CV</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Technical Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">Connect</h4>
            <ul className="space-y-3 text-sm text-slate-500 font-medium">
              <li><a href="mailto:lorenzosantarelli95@gmail.com" className="hover:text-primary transition-colors">Email</a></li>
              <li><a href="https://www.linkedin.com/in/lorenzo-santarelli/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com/lost-95" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 font-bold uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} LS DIGITAL • Lorenzo Santarelli</p>
          <div className="mt-4 md:mt-0">
            Open for Remote Opportunities
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;