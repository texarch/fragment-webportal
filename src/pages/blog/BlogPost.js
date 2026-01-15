import React, { useState, useEffect } from 'react';
import './BlogPost.css';
import DidItHelpImage from '../../assets/Did it help_.png';
import LikeImage from '../../assets/like.png';
import UnlikeImage from '../../assets/unlike.png';

import { useParams, useNavigate } from 'react-router-dom';
import { getBlogs, getReaction, saveReaction, getCounts } from './blogStorage';
import './BlogPost.css';

const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const blogData = getBlogs();
    const post = blogData.find(p => p.id === parseInt(id));
    const [feedback, setFeedback] = useState(null);
    const [counts, setCounts] = useState({ up: 0, down: 0 });

    useEffect(() => {
        if (post) {
            const savedReaction = getReaction(post.id);
            const savedCounts = getCounts(post.id);
            setFeedback(savedReaction);
            setCounts(savedCounts);
        }
    }, [post]);

    const handleReaction = (type) => {
        const newFeedback = feedback === type ? null : type;
        const oldFeedback = feedback;
        setFeedback(newFeedback);
        const newCounts = saveReaction(post.id, newFeedback, oldFeedback);
        setCounts(newCounts);
    };

    if (!post) {
        return <div className="blog-post-wrapper"><h2>Post not found</h2></div>;
    }

    return (
        <div className="blog-post-wrapper">
            <div className="blog-navbar-placeholder"></div>

            <div className="back-button-container">
                <button className="back-button" onClick={() => navigate(-1)}>
                    &larr; <strong>Back</strong>
                </button>
            </div>

            <div className="blog-post-container">
                <h1>{post.title}</h1>

                <p className="blog-date">{post.date}</p>
                <img src={post.image} alt={post.title} style={{ maxWidth: '100%', borderRadius: '10px', margin: '20px 0' }} />

                <div dangerouslySetInnerHTML={{ __html: post.content }} />

                <div className="feedback-section">
                    <img src={DidItHelpImage} alt="Did it help?" className="feedback-question-img" />
                    <div className="feedback-buttons">
                        <button
                            className="feedback-btn"
                            onClick={() => handleReaction('up')}
                        >
                            <img src={LikeImage} alt="Yes" />
                            <span>{counts.up}</span>
                        </button>
                        <button
                            className="feedback-btn"
                            onClick={() => handleReaction('down')}
                        >
                            <img src={UnlikeImage} alt="No" />
                            <span>{counts.down}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
