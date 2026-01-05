import React from 'react';
import './BlogPost.css';

import { useParams, useNavigate } from 'react-router-dom';
import { blogData } from './blogData';
import './BlogPost.css';

const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = blogData.find(p => p.id === parseInt(id));

    if (!post) {
        return <div className="blog-post-wrapper"><h2>Post not found</h2></div>;
    }

    return (
        <div className="blog-post-wrapper">
            <div className="blog-navbar-placeholder"></div>

            <div className="back-button-container">
                <button className="back-button" onClick={() => navigate('/Blog')}>
                    &larr; <strong>Back</strong>
                </button>
            </div>

            <div className="blog-post-container">
                <h1>{post.title}</h1>

                <p className="blog-date">{post.date} by {post.author}</p>
                <img src={post.image} alt={post.title} style={{ maxWidth: '100%', borderRadius: '10px', margin: '20px 0' }} />

                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        </div>
    );
};

export default BlogPost;
