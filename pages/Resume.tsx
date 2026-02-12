
import React from 'react';
import Section from '../components/UI/Section';
import { SKILLS } from '../constants';

const Resume: React.FC = () => {
  return (
    <div className="pt-24 fade-in">
      <Section title="Curriculum Vitae" subtitle="Data Analyst — SQL, Python, Machine Learning">
        
        {/* Top Header with Download Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Lorenzo Santarelli</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                lorenzosantarelli95@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                +39 335 672 0071
              </span>
              <span className="flex items-center gap-2 text-primary font-bold">
                Italy · Open to Remote / Hybrid
              </span>
            </div>
          </div>
          <a 
            href="/cv-lorenzo-santarelli.pdf" 
            download="Lorenzo_Santarelli_CV.pdf"
            className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg shadow-primary/20 whitespace-nowrap"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Full CV (PDF)
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Profile Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6 border-b-2 border-primary w-fit pb-2">Profile</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                Data Analyst with a background in enterprise systems and digital products, focused on turning data into actionable business insights. Skilled in SQL and Python (data cleaning, EDA, visualization, KPI reporting) and comfortable communicating results to non-technical stakeholders. I am interested in entry-level roles in analytics, reporting, and within enterprise environments.
              </p>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-6 border-b-2 border-primary w-fit pb-2">Experience</h3>
              <div className="space-y-10 border-l-2 border-gray-100 ml-3">
                
                <div className="relative pl-8">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
                  <div className="mb-3">
                    <span className="text-xs font-black text-primary uppercase tracking-widest">Oct 2025 – Present</span>
                    <h4 className="text-xl font-bold text-gray-900">Software / Systems Analyst Intern</h4>
                    <p className="text-gray-500 font-bold">SYS-DAT Group</p>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-gray-600 space-y-2 text-sm leading-relaxed">
                    <li>Supported production issue investigation and bug fixing across ERP modules; collaborated with dev/support teams on root-cause analysis.</li>
                    <li>Wrote and optimized SQL queries on large relational databases for evidence gathering and reporting needs.</li>
                    <li>Performed data validation checks and documented findings to improve handoffs and reduce regressions.</li>
                  </ul>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary/50 border-4 border-white"></div>
                  <div className="mb-3">
                    <span className="text-xs font-black text-primary uppercase tracking-widest">Jul 2024 – Sep 2025</span>
                    <h4 className="text-xl font-bold text-gray-900">Data Analyst - Freelance / Personal Projects</h4>
                    <p className="text-gray-500 font-bold">LS Digital</p>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-gray-600 space-y-2 text-sm leading-relaxed">
                    <li>Delivered analysis outputs (notebooks + concise summaries) using Python + SQL, data cleaning, EDA, KPI exploration, insight storytelling.</li>
                    <li>Built reproducible preparation workflows (missing values, outliers, feature creation) and clear visualizations for decision-making.</li>
                    <li>Translated results into business-oriented takeaways (drivers, segments, next actions) for non-technical audiences.</li>
                  </ul>
                </div>

                <div className="relative pl-8">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gray-300 border-4 border-white"></div>
                  <div className="mb-3">
                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Mar 2023 – Jul 2024</span>
                    <h4 className="text-xl font-bold text-gray-900">Project Coordinator - Startup</h4>
                    <p className="text-gray-500 font-bold">WebWiseItalia</p>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-gray-600 space-y-2 text-sm leading-relaxed">
                    <li>Coordinated digital initiatives end-to-end; translated requirements into clear scope, priorities, and delivery updates.</li>
                    <li>Supported data-informed decisions with basic analysis of internal/public datasets (trends, simple KPIs, summary reporting).</li>
                    <li>Improved stakeholder alignment by clarifying acceptance criteria and reducing rework.</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-2xl font-bold mb-6 border-b-2 border-primary w-fit pb-2">Key Projects</h3>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 className="text-lg font-bold text-slate-900 mb-2">Customer Churn Analysis & Prediction - Banking Dataset</h4>
                <ul className="list-disc list-outside ml-6 text-sm text-slate-600 space-y-2 mb-4">
                  <li>End-to-end project: EDA, feature engineering, and model evaluation with scikit-learn; focus on interpretability and business relevance.</li>
                  <li>Identified key churn drivers and customer segments; communicated insights with clear visualizations and narrative.</li>
                </ul>
                <a href="https://github.com/lost-95/customer-churn-banking" target="_blank" className="text-xs font-bold text-primary hover:underline">View on GitHub →</a>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 border-b-2 border-primary w-fit pb-2">Education</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-slate-900">University of Camerino (UNICAM)</h4>
                  <p className="text-slate-500 font-medium">BSc Computer Science (in progress)</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Erasmus — Universidad de Sevilla</h4>
                  <p className="text-slate-500 font-medium">Computer Engineering | Sep 2022 – Feb 2023</p>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            <div className="bg-tech-dark p-8 rounded-3xl text-white shadow-xl">
              <h3 className="text-xl font-bold mb-8 border-b border-white/20 pb-4">Technical Skills</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">Data Analysis</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Pandas", "NumPy", "SQL"].map(s => <span key={s} className="bg-white/10 px-3 py-1 rounded-lg text-xs font-medium">{s}</span>)}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">Visualization</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Matplotlib", "Seaborn"].map(s => <span key={s} className="bg-white/10 px-3 py-1 rounded-lg text-xs font-medium">{s}</span>)}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">ML & Concepts</h4>
                  <div className="flex flex-wrap gap-2">
                    {["scikit-learn", "EDA", "KPI Reporting", "Data Cleaning", "Data Quality"].map(s => <span key={s} className="bg-white/10 px-3 py-1 rounded-lg text-xs font-medium">{s}</span>)}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "GitHub", "Jupyter", "VS Code", "MySQL Workbench"].map(s => <span key={s} className="bg-white/10 px-3 py-1 rounded-lg text-xs font-medium">{s}</span>)}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mt-16 mb-8 border-b border-white/20 pb-4">Certifications</h3>
              <div className="space-y-6">
                <div className="group">
                  <h4 className="font-bold text-sm group-hover:text-primary transition-colors">SQL for Data Analysis</h4>
                  <p className="text-xs text-white/50">Maven Analytics</p>
                </div>
                <div className="group">
                  <h4 className="font-bold text-sm group-hover:text-primary transition-colors">Machine Learning A–Z</h4>
                  <p className="text-xs text-white/50">SuperDataScience</p>
                </div>
                <div className="group">
                  <h4 className="font-bold text-sm group-hover:text-primary transition-colors">Google AI Essentials</h4>
                  <p className="text-xs text-white/50">Google</p>
                </div>
                <div className="group">
                  <h4 className="font-bold text-sm group-hover:text-primary transition-colors">English B2</h4>
                  <p className="text-xs text-white/50">Cambridge</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
};

export default Resume;
