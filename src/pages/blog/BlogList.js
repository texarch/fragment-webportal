import React from 'react';
import { useNavigate } from 'react-router-dom';
import { blogData } from './blogData';
import './blog_page2.css'; // Reusing existing grid styles

const BlogList = () => {
    const navigate = useNavigate();

    return (
        <div className="blog-page-wrapper">
            <div className="blog-navbar" style={{ height: '80px' }}></div>

            <div className="back-button-container" style={{ maxWidth: '1200px', width: '100%', padding: '0 20px', marginBottom: '40px' }}>
                <button
                    className="back-button"
                    onClick={() => navigate('/blog')}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center' }}
                >
                    &larr; <strong>Back to Blog</strong>
                </button>
            </div>

            <h1 style={{ fontFamily: 'Times New Roman, serif', fontSize: '48px', marginBottom: '40px' }}>All Articles</h1>

            <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', overflowX: 'visible' }}>
                {blogData.map(post => (
                    <div key={post.id} className="blog-card-new" onClick={() => navigate(`/blog/post/${post.id}`)} style={{ gridColumn: 'auto' }}>
                        <img src={post.image} alt={post.title} className="blog-card-image" />
                        <div className="blog-card-content">
                            <h3>{post.title}</h3>
                            <p>{post.summary}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
