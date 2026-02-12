
import React from 'react';
import Section from '../components/UI/Section';
import BlogCard from '../components/Blog/BlogCard';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="pt-24 fade-in">
      <Section 
        title="Technical Blog" 
        subtitle="Sharing my thoughts on machine learning, data engineering, and the future of analytics."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Newsletter / Stay Updated */}
        <div className="mt-20 text-center max-w-2xl mx-auto p-10 bg-primary/5 rounded-3xl border border-primary/10">
          <h3 className="text-2xl font-bold mb-4">Stay curious about data</h3>
          <p className="text-gray-600 mb-8">I occasionally write about new ML frameworks and industry trends. Follow my journey on LinkedIn for regular updates.</p>
          <a 
            href="https://www.linkedin.com/in/lorenzo-santarelli/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-all"
          >
            Follow on LinkedIn
          </a>
        </div>
      </Section>
    </div>
  );
};

export default Blog;