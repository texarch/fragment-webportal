import { blogData as initialData } from './blogData';

const STORAGE_KEY = 'fragment_blog_posts';

/**
 * Get all blog posts from storage.
 * If storage is empty, initializes it with default data.
 * @returns {Array} Array of blog post objects
 */
export const getBlogs = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            return JSON.parse(stored);
        }
    } catch (error) {
        console.error('Error reading from localStorage', error);
    }

    // If no data or error, return initial data and try to save it
    saveBlogs(initialData);
    return initialData;
};

/**
 * Save blog posts to storage.
 * @param {Array} blogs Array of blog post objects
 */
export const saveBlogs = (blogs) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
        // Dispatch a custom event so other components can react if needed (optional but good practice)
        window.dispatchEvent(new Event('blog-storage-update'));
    } catch (error) {
        console.error('Error saving to localStorage', error);
    }
};

const REACTIONS_KEY = 'fragment_blog_reactions';

/**
 * Get reaction for a specific blog post.
 * @param {number} blogId The ID of the blog post
 * @returns {string|null} 'up', 'down', or null
 */
export const getReaction = (blogId) => {
    try {
        const stored = localStorage.getItem(REACTIONS_KEY);
        if (stored) {
            const reactions = JSON.parse(stored);
            return reactions[blogId] || null;
        }
    } catch (error) {
        console.error('Error reading reactions', error);
    }
    return null;
};

/**
 * Save reaction for a blog post.
 * @param {number} blogId The ID of the blog post
 * @param {string|null} reaction 'up', 'down', or null
 */
export const saveReaction = (blogId, reaction) => {
    try {
        const stored = localStorage.getItem(REACTIONS_KEY);
        const reactions = stored ? JSON.parse(stored) : {};

        if (reaction) {
            reactions[blogId] = reaction;
        } else {
            delete reactions[blogId];
        }

        localStorage.setItem(REACTIONS_KEY, JSON.stringify(reactions));
    } catch (error) {
        console.error('Error saving reaction', error);
    }
};
