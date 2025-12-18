import React from "react";
import "./blog_page2.css";
import blogImage from "../../assets/Blog_Page_Image.png";
import { blogData } from "./blogData";
import { useNavigate } from "react-router-dom";

const BlogPage2 = () => {
  const navigate = useNavigate();
  // We want the 2nd latest blog (index 1)
  const secondLatestBlog = blogData.length > 1 ? blogData[1] : null;



  if (!secondLatestBlog) {
    return null; // or some placeholder if no previous blog exists
  }

  return (
    <div className="blog-page-wrapper">
      {/* CURRENT BLOG (Actually 2nd Latest in this flow) */}
      <div className="blog-card">
        <div className="blog-image-section">
          <img src={secondLatestBlog.image} alt="Blog" />
        </div>

        <div className="blog-content-section">
          <h2>{secondLatestBlog.title}</h2>

          <p>{secondLatestBlog.summary}</p>

          <button
            className="read-more-btn"
            onClick={() => navigate(`/blog/post/${secondLatestBlog.id}`)}
          >
            Read More
          </button>
        </div>
      </div>

      {/* PREVIOUS BLOG (Actually 3rd Latest in this flow) */}

    </div>
  );
};

export default BlogPage2;
