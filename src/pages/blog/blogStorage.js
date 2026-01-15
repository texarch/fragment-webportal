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
            let parsedData = JSON.parse(stored);

            // Migration: Ensure all blogs have a category
            let hasChanges = false;
            parsedData = parsedData.map(blog => {
                if (!blog.category) {
                    hasChanges = true;
                    return { ...blog, category: 'Individual' };
                }
                return blog;
            });

            if (hasChanges) {
                saveBlogs(parsedData);
            }

            return parsedData;
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
const COUNTS_KEY = 'fragment_blog_counts';

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
 * Get counts for a specific blog post.
 * @param {number} blogId The ID of the blog post
 * @returns {object} { up: number, down: number }
 */
export const getCounts = (blogId) => {
    try {
        const stored = localStorage.getItem(COUNTS_KEY);
        if (stored) {
            const counts = JSON.parse(stored);
            return counts[blogId] || { up: 0, down: 0 };
        }
    } catch (error) {
        console.error('Error reading counts', error);
    }
    return { up: 0, down: 0 };
};

/**
 * Save reaction for a blog post and update counts.
 * @param {number} blogId The ID of the blog post
 * @param {string|null} newReaction 'up', 'down', or null
 * @param {string|null} oldReaction Previous reaction
 */
export const saveReaction = (blogId, newReaction, oldReaction) => {
    try {
        // 1. Update User Reaction
        const storedReactions = localStorage.getItem(REACTIONS_KEY);
        const reactions = storedReactions ? JSON.parse(storedReactions) : {};

        if (newReaction) {
            reactions[blogId] = newReaction;
        } else {
            delete reactions[blogId];
        }
        localStorage.setItem(REACTIONS_KEY, JSON.stringify(reactions));

        // 2. Update Global Counts
        const storedCounts = localStorage.getItem(COUNTS_KEY);
        const allCounts = storedCounts ? JSON.parse(storedCounts) : {};
        const currentCounts = allCounts[blogId] || { up: 0, down: 0 };

        // Decrement old reaction
        if (oldReaction === 'up') currentCounts.up = Math.max(0, currentCounts.up - 1);
        if (oldReaction === 'down') currentCounts.down = Math.max(0, currentCounts.down - 1);

        // Increment new reaction
        if (newReaction === 'up') currentCounts.up++;
        if (newReaction === 'down') currentCounts.down++;

        allCounts[blogId] = currentCounts;
        localStorage.setItem(COUNTS_KEY, JSON.stringify(allCounts));

        return currentCounts;
    } catch (error) {
        console.error('Error saving reaction', error);
        return { up: 0, down: 0 };
    }
};
