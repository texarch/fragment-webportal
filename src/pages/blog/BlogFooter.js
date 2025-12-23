import React from 'react';
import './BlogFooter.css';
import connections_page11 from '../../assets/connections_page11.png';

const BlogFooter = () => {
    return (
        <footer className="blog-footer">
            <div className="blog-footer-content">
                <div className="blog-footer-column blog-footer-left">
                    <p className="blog-connect-text">Connect with us on</p>
                    <img
                        src={connections_page11}
                        alt="Social media icons"
                        className="blog-social-icons"
                    />
                    <p className="blog-email">hi@fragment.com</p>
                    <p className="blog-contact-info">Phone number</p>
                    <p className="blog-contact-info">Address</p>
                </div>

                <div className="blog-footer-column blog-footer-middle blog-offset-top">
                    <a href="/">About Us</a>
                    <a href="/">Work with us</a>
                    <a href="/">FAQ's</a>
                </div>

                <div className="blog-footer-column blog-footer-right blog-offset-top">
                    <a href="/">Privacy</a>
                    <a href="/">Terms and Conditions</a>
                </div>
            </div>

            <div className="blog-copyright">
                <p>CopyRight Info</p>
            </div>
        </footer>
    );
};

export default BlogFooter;
