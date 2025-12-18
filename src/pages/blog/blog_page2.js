import React from "react";
import "./blog_page2.css";
import blogImage from "../../assets/Blog_Page_Image.png";

const BlogPage2 = () => {
  return (
    <div className="blog-page-wrapper">
      {/* CURRENT BLOG */}
      <div className="blog-card">
        <div className="blog-image-section">
          <img src={blogImage} alt="Blog" />
        </div>

        <div className="blog-content-section">
          <h2>Tips / tricks to use</h2>

          <ul>
            <li>trick 1</li>
            <li>trick 1</li>
            <li>trick 1</li>
            <li>trick 1</li>
            <li>trick 1</li>
          </ul>

          <button className="read-more-btn">Read More</button>
        </div>
      </div>

      {/* PREVIOUS BLOG */}
      <div className="previous-blog">
        <h3>Previous Blog</h3>

        <div className="previous-blog-card">
          <img src={blogImage} alt="Previous Blog" />

          <div className="previous-blog-content">
            <h4>Previous blog title</h4>
            <p>
              Short description of the previous blog goes here so users can
              quickly understand what it is about.
            </p>
            <button className="read-more-btn small">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage2;
