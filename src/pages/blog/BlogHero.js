import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Blog.css";
import BlogImage from "../../assets/Blog_Page_Image.png";
import BgPattern from "../../assets/background-pattern.png";
import { getBlogs } from "./blogStorage";

const BlogHero = ({ selectedCategory }) => {
    const navigate = useNavigate();

    const [latestBlog, setLatestBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLatest = async () => {
            const allBlogs = await getBlogs();
            const blogData = allBlogs.filter(blog => blog.category === selectedCategory);
            setLatestBlog(blogData[0]);
            setLoading(false);
        };
        fetchLatest();
    }, [selectedCategory]);

    if (loading) return null; // Or a spinner

    if (!latestBlog) {
        return (
            <div className="blog-wrapper">
                <div className="blog-navbar"></div>
                <section className="blog-hero-section" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <h2>No blogs found in {selectedCategory} category.</h2>
                </section>
            </div>
        );
    }


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
                    <h1>{latestBlog.title}</h1>

                    <p>
                        {latestBlog.summary}
                    </p>

                    <button
                        className="read-more-btn"
                        onClick={() => navigate(`/blog/post/${latestBlog._id}`)}
                    >
                        Read More
                    </button>
                </div>

                {/* Right image */}
                {latestBlog.image && latestBlog.image.trim() !== '' && !latestBlog.image.includes('UExBQ0VIT0xERVJfSU1BR0') && (
                    <div className="blog-image">
                        <img src={latestBlog.image} alt="Blog" />
                    </div>
                )}
            </section>
        </div>
    );
};

export default BlogHero;
