import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogData as initialBlogData } from './blogData';
import BlogImage from '../../assets/Blog_Page_Image.png';
import './BlogAdmin.css';

const BlogAdmin = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([...initialBlogData]);
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

    // Reset form
    const resetForm = () => {
        setFormData({
            title: '',
            author: '',
            date: '',
            summary: '',
            content: ''
        });
        setSelectedBlog(null);
        setIsAdding(false);
        setIsEditing(false);
        setShowDeleteConfirm(false);
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Add new blog
    const handleAddBlog = () => {
        const newBlog = {
            id: Math.max(...blogs.map(b => b.id)) + 1,
            title: formData.title,
            author: formData.author,
            date: formData.date,
            summary: formData.summary,
            content: `<h2>${formData.title}</h2><p>${formData.content}</p>`,
            image: BlogImage
        };
        setBlogs([newBlog, ...blogs]);
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
            content: blog.content.replace(/<[^>]*>/g, ' ').trim()
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
                    content: `<h2>${formData.title}</h2><p>${formData.content}</p>`
                }
                : blog
        );
        setBlogs(updatedBlogs);
        resetForm();
    };

    // Delete blog
    const handleDeleteClick = (blog) => {
        setSelectedBlog(blog);
        setShowDeleteConfirm(true);
    };

    const confirmDelete = () => {
        setBlogs(blogs.filter(blog => blog.id !== selectedBlog.id));
        resetForm();
    };

    // View blog
    const handleViewBlog = (id) => {
        navigate(`/blog/post/${id}`);
    };

    return (
        <div className="blog-admin-wrapper">
            {/* Header */}
            <header className="admin-header">
                <div className="admin-header-content">
                    <h1>Blog Admin Dashboard</h1>
                    <p>Manage your blog posts</p>
                </div>
                <button className="back-btn" onClick={() => navigate('/blog')}>
                    ← Back to Blog
                </button>
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
                                    <label>Content *</label>
                                    <textarea
                                        name="content"
                                        value={formData.content}
                                        onChange={handleInputChange}
                                        placeholder="Full blog content..."
                                        rows="6"
                                        required
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
