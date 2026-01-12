import React from "react";
import { useNavigate } from "react-router-dom";
import "./Blog.css";
import BlogImage from "../../assets/Blog_Page_Image.png";
import BgPattern from "../../assets/background-pattern.png";
import { getBlogs } from "./blogStorage";

const BlogHero = () => {
    const navigate = useNavigate();

    const blogData = getBlogs();
    const latestBlog = blogData[0];

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
                        onClick={() => navigate(`/blog/post/${latestBlog.id}`)}
                    >
                        Read More
                    </button>
                </div>

                {/* Right image */}
                <div className="blog-image">
                    <img src={latestBlog.image} alt="Blog" />
                </div>
            </section>
        </div>
    );
};

export default BlogHero;
