
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-primary mb-4">Lorenzo Santarelli</h3>
            <p className="text-gray-600 max-w-sm">
              Computer Science graduate transitioning into Data Analytics and ML. Focused on building data-driven solutions that drive real business impact.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/resume" className="hover:text-primary transition-colors">Resume</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Technical Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Me</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Lorenzo Santarelli. Built with React & Tailwind.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span>Based in London / remote</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
