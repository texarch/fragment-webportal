import React from "react";
import "./blog_page2.css";
import blogImage from "../../assets/Blog_Page_Image.png";
import { getBlogs } from "./blogStorage";
import { useNavigate } from "react-router-dom";

const BlogPage2 = ({ selectedCategory }) => {
  const navigate = useNavigate();
  const allBlogs = getBlogs();
  const blogData = allBlogs.filter(blog => blog.category === selectedCategory);

  // 1. The "Second Page" content (2nd latest blog of this category)
  // We assume index 0 is used by BlogHero, so we start from index 1
  const secondLatestBlog = blogData.length > 1 ? blogData[1] : null;

  // 2. The "You might like these" grid
  const relatedPosts = blogData.slice(2, 18);

  if (!secondLatestBlog) {
    return null;
  }

  return (
    <div className="blog-page-wrapper">
      {/* ORIGINAL CONTENT: Second Latest Blog */}
      <div className="blog-card">
        <div className="blog-image-section">
          <img src={secondLatestBlog.image} alt={secondLatestBlog.title} />
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

      {/* SEPARATOR or SPACING */}
      <div style={{ height: '80px' }}></div>

      {/* NEW CONTENT: Grid */}
      {relatedPosts.length > 0 && (
        <>
          <h2 className="related-title">You might like these</h2>
          <div className="blog-grid">
            {relatedPosts.map(post => (
              <div key={post.id} className="blog-card-new" onClick={() => navigate(`/blog/post/${post.id}`)}>
                <img src={post.image} alt={post.title} className="blog-card-image" />
                <div className="blog-card-content">
                  <h3>{post.title}</h3>
                  <p>{post.summary}</p>
                </div>
              </div>
            ))}

            {/* Mobile "See More" Card */}
            <div className="blog-see-more-card" onClick={() => navigate('/blog/all')}> {/* Adjust route as needed */}
              <div className="see-more-content">
                <span className="arrow-icon">&rarr;</span>
                <p>See More</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BlogPage2;
