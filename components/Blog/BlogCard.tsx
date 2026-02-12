
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
        <span>{post.date}</span>
        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
        <span>{post.readTime} read</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group">
        <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
          {post.title}
        </Link>
      </h3>
      <p className="text-gray-600 text-sm mb-6 flex-grow">
        {post.preview}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {post.tags.map(tag => (
          <span key={tag} className="bg-gray-50 text-gray-600 px-2 py-1 rounded text-[10px] font-medium uppercase">
            #{tag}
          </span>
        ))}
      </div>
      <Link 
        to={`/blog/${post.id}`}
        className="text-primary font-bold text-sm inline-flex items-center gap-1 hover:underline"
      >
        Read Full Article
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </article>
  );
};

export default BlogCard;
