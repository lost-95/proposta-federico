
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import Section from '../components/UI/Section';

const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="pt-32 text-center h-screen">
        <h2 className="text-2xl font-bold mb-4">Post not found</h2>
        <Link to="/blog" className="text-primary hover:underline">Return to Blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 fade-in">
      <article className="max-w-3xl mx-auto px-4 py-16">
        <Link to="/blog" className="text-primary font-bold text-sm mb-8 inline-flex items-center gap-2 hover:gap-1 transition-all">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>
        
        <div className="mb-10">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span>{post.date}</span>
            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
            <span>{post.readTime} read</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          {/* We split content by newlines to simulate basic formatting for this demo */}
          {post.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('## ')) {
              return <h2 key={idx} className="text-2xl font-bold text-gray-900 mt-12 mb-4">{paragraph.replace('## ', '')}</h2>;
            }
            if (paragraph.startsWith('```')) {
              return (
                <pre key={idx} className="bg-gray-900 text-white p-6 rounded-xl overflow-x-auto font-mono text-sm">
                  <code>{paragraph.replace(/```[a-z]*\n/g, '').replace(/```/g, '')}</code>
                </pre>
              );
            }
            if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n');
                return (
                    <ul key={idx} className="list-disc list-outside ml-6 space-y-2">
                        {items.map((item, i) => <li key={i}>{item.replace('- ', '')}</li>)}
                    </ul>
                )
            }
            return <p key={idx}>{paragraph}</p>;
          })}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">LS</div>
              <div>
                <p className="font-bold text-gray-900">Lorenzo Santarelli</p>
                <p className="text-sm text-gray-500">Junior Data Scientist</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-primary transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.152-1.11-1.458-1.11-1.458-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostDetail;
