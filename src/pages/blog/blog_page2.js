import React, { useState, useEffect } from "react";
import "./blog_page2.css";
import blogImage from "../../assets/Blog_Page_Image.png";
import { getBlogs } from "./blogStorage";
import { useNavigate } from "react-router-dom";

const BlogPage2 = ({ selectedCategory }) => {
  const navigate = useNavigate();
  const [secondLatestBlog, setSecondLatestBlog] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const allBlogs = await getBlogs();
      const blogData = allBlogs.filter(blog => blog.category === selectedCategory);

      // 2nd latest
      setSecondLatestBlog(blogData.length > 1 ? blogData[1] : null);
      // Related posts
      setRelatedPosts(blogData.slice(2, 18));
      setLoading(false);
    };
    fetchData();
  }, [selectedCategory]);

  if (loading) return <div style={{ height: '20px' }}></div>;

  if (!secondLatestBlog) {
    return null;
  }

  return (
    <div className="blog-page-wrapper">
      {/* ORIGINAL CONTENT: Second Latest Blog */}
      <div className="blog-card">
        {secondLatestBlog.image && secondLatestBlog.image.trim() !== '' && !secondLatestBlog.image.includes('UExBQ0VIT0xERVJfSU1BR0') && (
          <div className="blog-image-section">
            <img src={secondLatestBlog.image} alt={secondLatestBlog.title} />
          </div>
        )}
        <div className="blog-content-section">
          <h2>{secondLatestBlog.title}</h2>
          <p>{secondLatestBlog.summary}</p>
          <button
            className="read-more-btn"
            onClick={() => navigate(`/blog/post/${secondLatestBlog._id}`)}
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
              <div key={post._id} className="blog-card-new" onClick={() => navigate(`/blog/post/${post._id}`)}>
                {post.image && post.image.trim() !== '' && !post.image.includes('UExBQ0VIT0xERVJfSU1BR0') && (
                  <img src={post.image} alt={post.title} className="blog-card-image" />
                )}
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
