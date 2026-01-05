import React from 'react';
import './BlogFooter.css';
import connections_page11 from '../../assets/connections_page11.png';

const BlogFooter = () => {
    return (
        <footer className="blog-footer">
            <div className="blog-footer-content">
                <div className="blog-footer-column blog-footer-connect">
                    <p className="blog-connect-text">Connect with us on</p>
                    <img
                        src={connections_page11}
                        alt="Social media icons"
                        className="blog-social-icons"
                        useMap="#social-map"
                    />
                    <map name="social-map">
                        {/* Instagram (0-40px) */}
                        <area shape="rect" coords="0,0,40,40" href="https://www.instagram.com/thefragment.app/" target="_blank" rel="noopener noreferrer" alt="Instagram" />

                        {/* LinkedIn (40-80px) */}
                        <area shape="rect" coords="40,0,80,40" href="https://www.linkedin.com/company/thefragmentapp/" target="_blank" rel="noopener noreferrer" alt="LinkedIn" />

                        {/* Facebook (80-120px) - No link */}
                        {/* <area shape="rect" coords="80,0,120,40" alt="Facebook" /> */}

                        {/* YouTube (120-160px) */}
                        <area shape="rect" coords="120,0,160,40" href="https://www.youtube.com/@thefragmentapp" target="_blank" rel="noopener noreferrer" alt="YouTube" />
                    </map>
                </div>

                <div className="blog-footer-column blog-footer-left">
                    <p className="blog-email">hi@fragment.com</p>
                    <p className="blog-contact-info">Phone number</p>
                    <p className="blog-contact-info">Address</p>
                </div>

                <div className="blog-footer-column blog-footer-middle">
                    <a href="/">About Us</a>
                    <a href="/">Work with us</a>
                    <a href="/">FAQ's</a>
                </div>

                <div className="blog-footer-column blog-footer-right">
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


