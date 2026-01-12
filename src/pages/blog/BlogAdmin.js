import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBlogs, saveBlogs } from './blogStorage';
import BlogImage from '../../assets/Blog_Page_Image.png';
import RichTextEditor from '../../components/RichTextEditor';
import './BlogAdmin.css';

// Admin credentials - TODO: Replace with database authentication later
const ADMIN_CREDENTIALS = {
    email: 'admin@fragment.com',
    password: 'admin123'
};

const BlogAdmin = () => {
    const navigate = useNavigate();

    // Authentication state
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [loginError, setLoginError] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    // Blog management state
    const [blogs, setBlogs] = useState([]);

    // Load blogs on mount
    useEffect(() => {
        setBlogs(getBlogs());
    }, []);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        date: '',
        summary: '',
        content: ''
    });

    // Handle login input changes
    const handleLoginInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prev => ({
            ...prev,
            [name]: value
        }));
        setLoginError(''); // Clear error when user types
    };

    // Handle login submission
    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoggingIn(true);
        setLoginError('');

        // Simulate API call delay
        setTimeout(() => {
            if (loginData.email === ADMIN_CREDENTIALS.email &&
                loginData.password === ADMIN_CREDENTIALS.password) {
                setIsAuthenticated(true);
                setLoginError('');
            } else {
                setLoginError('Invalid email or password');
            }
            setIsLoggingIn(false);
        }, 800);
    };

    // Handle logout
    const handleLogout = () => {
        setIsAuthenticated(false);
        setLoginData({ email: '', password: '' });
    };

    // Reset form
    const resetForm = () => {
        setFormData({
            title: '',
            author: '',
            date: '',
            summary: '',
            content: '',
            image: null
        });
        setSelectedBlog(null);
        setIsAdding(false);
        setIsEditing(false);
        setShowDeleteConfirm(false);
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle image file selection
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({
                    ...prev,
                    image: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle remove image
    const handleRemoveImage = () => {
        setFormData(prev => ({
            ...prev,
            image: BlogImage
        }));
        // Clear file input
        const fileInput = document.getElementById('blog-image-input');
        if (fileInput) fileInput.value = '';
    };

    // Handle rich text content changes
    const handleContentChange = (htmlContent) => {
        setFormData(prev => ({
            ...prev,
            content: htmlContent
        }));
    };

    // Add new blog
    const handleAddBlog = () => {
        const newBlog = {
            id: Math.max(...blogs.map(b => b.id), 0) + 1,
            title: formData.title,
            author: formData.author,
            date: formData.date,
            summary: formData.summary,
            content: formData.content, // Content is already HTML from rich text editor
            image: formData.image || BlogImage // Use uploaded image or default
        };
        const updatedBlogs = [newBlog, ...blogs];
        setBlogs(updatedBlogs);
        saveBlogs(updatedBlogs);
        resetForm();
    };

    // Edit existing blog
    const handleEditClick = (blog) => {
        setSelectedBlog(blog);
        setFormData({
            title: blog.title,
            author: blog.author,
            date: blog.date,
            summary: blog.summary,
            content: blog.content, // Keep HTML content for rich text editor
            image: blog.image
        });
        setIsEditing(true);
        setIsAdding(false);
    };

    // Save edited blog
    const handleSaveEdit = () => {
        const updatedBlogs = blogs.map(blog =>
            blog.id === selectedBlog.id
                ? {
                    ...blog,
                    title: formData.title,
                    author: formData.author,
                    date: formData.date,
                    summary: formData.summary,
                    content: formData.content, // Content is already HTML from rich text editor
                    image: formData.image || blog.image // Update image if changed, else keep old
                }
                : blog
        );
        setBlogs(updatedBlogs);
        saveBlogs(updatedBlogs);
        resetForm();
    };

    // Delete blog
    const handleDeleteClick = (blog) => {
        setSelectedBlog(blog);
        setShowDeleteConfirm(true);
    };

    const confirmDelete = () => {
        const updatedBlogs = blogs.filter(blog => blog.id !== selectedBlog.id);
        setBlogs(updatedBlogs);
        saveBlogs(updatedBlogs);
        resetForm();
    };

    // View blog
    const handleViewBlog = (id) => {
        navigate(`/blog/post/${id}`);
    };

    // If not authenticated, show login screen
    if (!isAuthenticated) {
        return (
            <div className="blog-admin-wrapper">
                <div className="login-container">
                    <div className="login-card">
                        <div className="login-header">
                            <div className="login-icon">🔐</div>
                            <h1>Admin Login</h1>
                            <p>Sign in to manage your blog</p>
                        </div>
                        <form className="login-form" onSubmit={handleLogin}>
                            <div className="login-form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={loginData.email}
                                    onChange={handleLoginInputChange}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div className="login-form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={loginData.password}
                                    onChange={handleLoginInputChange}
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                            {loginError && (
                                <div className="login-error">
                                    <span>⚠️</span> {loginError}
                                </div>
                            )}
                            <button
                                type="submit"
                                className="login-submit-btn"
                                disabled={isLoggingIn}
                            >
                                {isLoggingIn ? 'Signing in...' : 'Sign In'}
                            </button>
                        </form>
                        <button className="back-to-blog-btn" onClick={() => navigate('/blog')}>
                            ← Back to Blog
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Authenticated: Show admin dashboard
    return (
        <div className="blog-admin-wrapper">
            {/* Header */}
            <header className="admin-header">
                <div className="admin-header-content">
                    <h1>Blog Admin Dashboard</h1>
                    <p>Manage your blog posts</p>
                </div>
                <div className="header-buttons">
                    <button className="back-btn" onClick={() => navigate('/blog')}>
                        ← Back to Blog
                    </button>
                    <button className="logout-btn" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <div className="admin-container">
                {/* Actions Bar */}
                <div className="admin-actions">
                    <button
                        className="add-btn"
                        onClick={() => { setIsAdding(true); setIsEditing(false); setShowDeleteConfirm(false); }}
                    >
                        + Add New Blog
                    </button>
                    <span className="blog-count">{blogs.length} blogs</span>
                </div>

                {/* Add/Edit Form Modal */}
                {(isAdding || isEditing) && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2>{isAdding ? 'Add New Blog' : 'Edit Blog'}</h2>
                                <button className="close-btn" onClick={resetForm}>×</button>
                            </div>
                            <form className="blog-form" onSubmit={(e) => {
                                e.preventDefault();
                                isAdding ? handleAddBlog() : handleSaveEdit();
                            }}>
                                <div className="form-group">
                                    <label>Title *</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        placeholder="Enter blog title"
                                        required
                                    />
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Author *</label>
                                        <input
                                            type="text"
                                            name="author"
                                            value={formData.author}
                                            onChange={handleInputChange}
                                            placeholder="Author name"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Date *</label>
                                        <input
                                            type="text"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleInputChange}
                                            placeholder="e.g., January 8, 2026"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Summary *</label>
                                    <textarea
                                        name="summary"
                                        value={formData.summary}
                                        onChange={handleInputChange}
                                        placeholder="Brief summary of the blog post"
                                        rows="2"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Blog Image</label>
                                    <div className="image-upload-container">
                                        <input
                                            type="file"
                                            id="blog-image-input"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="file-input"
                                        />
                                        <div className="image-controls">
                                            <label htmlFor="blog-image-input" className="file-input-label">
                                                {formData.image && formData.image !== BlogImage ? 'Change Image' : 'Choose Image'}
                                            </label>
                                            {formData.image && formData.image !== BlogImage && (
                                                <button
                                                    type="button"
                                                    className="remove-image-btn"
                                                    onClick={handleRemoveImage}
                                                >
                                                    Remove Image
                                                </button>
                                            )}
                                        </div>
                                        {formData.image && (
                                            <div className="image-preview">
                                                <img src={formData.image} alt="Preview" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Content *</label>
                                    <RichTextEditor
                                        value={formData.content}
                                        onChange={handleContentChange}
                                        placeholder="Write your blog content here... Use the toolbar to format your text."
                                    />
                                </div>
                                <div className="form-actions">
                                    <button type="button" className="cancel-btn" onClick={resetForm}>Cancel</button>
                                    <button type="submit" className="submit-btn">
                                        {isAdding ? 'Add Blog' : 'Save Changes'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Delete Confirmation Modal */}
                {showDeleteConfirm && (
                    <div className="modal-overlay">
                        <div className="modal-content delete-modal">
                            <div className="delete-icon">🗑️</div>
                            <h3>Delete Blog Post?</h3>
                            <p>Are you sure you want to delete "<strong>{selectedBlog?.title}</strong>"?</p>
                            <p className="warning-text">This action cannot be undone.</p>
                            <div className="form-actions">
                                <button className="cancel-btn" onClick={resetForm}>Cancel</button>
                                <button className="delete-confirm-btn" onClick={confirmDelete}>Delete</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Blog Table */}
                <div className="blog-table-container">
                    <table className="blog-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map((blog) => (
                                <tr key={blog.id}>
                                    <td className="id-cell">{blog.id}</td>
                                    <td className="title-cell">
                                        <div className="title-wrapper">
                                            <img src={blog.image} alt="" className="blog-thumbnail" />
                                            <span>{blog.title}</span>
                                        </div>
                                    </td>
                                    <td>{blog.author}</td>
                                    <td className="date-cell">{blog.date}</td>
                                    <td className="actions-cell">
                                        <button
                                            className="action-btn view-btn"
                                            onClick={() => handleViewBlog(blog.id)}
                                            title="View"
                                        >
                                            👁️
                                        </button>
                                        <button
                                            className="action-btn edit-btn"
                                            onClick={() => handleEditClick(blog)}
                                            title="Edit"
                                        >
                                            ✏️
                                        </button>
                                        <button
                                            className="action-btn delete-btn"
                                            onClick={() => handleDeleteClick(blog)}
                                            title="Delete"
                                        >
                                            🗑️
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BlogAdmin;
