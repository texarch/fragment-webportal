import React, { useState, useEffect } from 'react';
import './BlogPost.css';
import DidItHelpImage from '../../assets/Did it help_.png';
import LikeImage from '../../assets/like.png';
import UnlikeImage from '../../assets/unlike.png';

import { useParams, useNavigate } from 'react-router-dom';
import { getBlogs, getReaction, saveReaction, getCounts } from './blogStorage';
import './BlogPost.css';

const BlogPost = ({ setView }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    // Use state for post data since we need to fetch it
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [feedback, setFeedback] = useState(null);
    const [counts, setCounts] = useState({ up: 0, down: 0 });

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            const allBlogs = await getBlogs();
            // ID from params is string, and _id from DB is string, so direct comparison works
            // If using separate getBlogById API, we could use that too. 
            // For simplicity and to match previous logic of getting all:
            const foundPost = allBlogs.find(p => p._id === id);

            // Fallback: Check if ID was still passed as int (legacy)? Not needed if we switched everywhere.

            if (foundPost) {
                setPost(foundPost);

                // Update global view based on post category
                if (setView && foundPost.category) {
                    setView(foundPost.category.toLowerCase());
                }

                const savedReaction = getReaction(foundPost._id);
                const savedCounts = getCounts(foundPost._id);
                setFeedback(savedReaction);
                setCounts(savedCounts);
            }
            setLoading(false);
        };
        fetchPost();
    }, [id, setView]);

    const handleReaction = (type) => {
        if (!post) return;
        const newFeedback = feedback === type ? null : type;
        const oldFeedback = feedback;
        setFeedback(newFeedback);
        const newCounts = saveReaction(post._id, newFeedback, oldFeedback);
        setCounts(newCounts);
    };

    if (loading) {
        return <div className="blog-post-wrapper"><h2>Loading...</h2></div>;
    }

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
