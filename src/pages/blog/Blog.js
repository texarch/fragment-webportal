import React, { useState } from 'react';
import BlogHero from './BlogHero';
import BlogPage2 from './blog_page2';
import BlogFooter from './BlogFooter';
import './Blog.css'; // Ensure CSS is imported

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Organiser');

  return (
    <div>
      <div className="blog-tabs">
        <button
          className={`organiser-tab ${selectedCategory === 'Organiser' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('Organiser')}
        >
          <span>Organiser</span>
        </button>
        <button
          className={`individual-tab ${selectedCategory === 'Individual' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('Individual')}
        >
          <span>Individual</span>
        </button>
      </div>

      <BlogHero selectedCategory={selectedCategory} />
      <BlogPage2 selectedCategory={selectedCategory} />
      <BlogFooter />
    </div>
  );
};

export default Blog;