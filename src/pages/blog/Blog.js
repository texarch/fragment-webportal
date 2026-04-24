import React, { useState } from 'react';
import BlogHero from './BlogHero';
import BlogPage2 from './blog_page2';
import './Blog.css'; // Ensure CSS is imported
import Page20 from '../../Page20';

const Blog = ({ currentView, setView }) => {
  // Map global state (lowercase) to local component expectation (Capitalized)
  // Default to 'Organiser' if currentView is undefined or 'organiser'
  const selectedCategory = currentView === 'individual' ? 'Individual' : 'Organiser';

  const handleCategoryChange = (category) => {
    // Map Capitalized back to lowercase for global state
    if (setView) {
      setView(category.toLowerCase());
    }
  };

  return (
    <div>
      <div className="blog-tabs">
        <button
          className={`home-organiser-tab ${selectedCategory === 'Organiser' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('Organiser')}
        >
          <span>Organiser</span>
        </button>
        <button
          className={`home-individual-tab ${selectedCategory === 'Individual' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('Individual')}
        >
          <span>Individual</span>
        </button>
      </div>

      <BlogHero selectedCategory={selectedCategory} />
      <BlogPage2 selectedCategory={selectedCategory} />
      <Page20 />
    </div>
  );
};

export default Blog;