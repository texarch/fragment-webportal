import React from "react";
import "./Blog.css";
import BlogImage from "../../assets/Blog_Page_Image.png";
import BgPattern from "../../assets/background-pattern.png";

const Blog = () => {
  return (
    <div className="blog-wrapper">
      {/* Navbar spacing */}
      <div className="blog-navbar"></div>

      {/* Hero Section */}
      <section className="blog-hero-section">
        {/* Background pattern */}
        <img
          src={BgPattern}
          alt="background pattern"
          className="blog-bg-pattern"
        />

        {/* Left content */}
        <div className="blog-content">
          <h1>Title of the most recent Blog?!</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
            nisi elit. Pellentesque vitae sollicitudin massa Lorem ipsum dolor
            sit amet, consectetur vitae sollicitudin massa ......
          </p>

          <button className="read-more-btn">Read More</button>
        </div>

        {/* Right image */}
        <div className="blog-image">
          <img src={BlogImage} alt="Blog" />
        </div>
      </section>
    </div>
  );
};

export default Blog;
