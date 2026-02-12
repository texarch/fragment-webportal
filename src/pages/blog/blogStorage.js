
const API_URL = 'http://localhost:4000/website/admin/blogs'; // Local backend

/**
 * Get all blog posts from API.
 * @returns {Promise<Array>} Array of blog post objects
 */
export const getBlogs = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching blogs from API', error);
        return [];
    }
};

/**
 * Save blog posts (Not used directly anymore, replaced by individual API calls in Admin)
 * Keeping minimal implementation or removing if not needed.
 * But Admin.js might still call it until we refactor Admin.js completely.
 * Since we are refactoring Admin.js next, we can remove this or make it a no-op/proxy.
 */
export const saveBlogs = async (blogs) => {
    console.warn('saveBlogs is deprecated. Use direct API calls.');
};

/**
 * Get single blog by ID from API
 */
export const getBlogById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch blog');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching blog', error);
        return null;
    }
};

// ... existing reaction logic ...
const REACTIONS_KEY = 'fragment_blog_reactions';
const COUNTS_KEY = 'fragment_blog_counts';

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

export const saveReaction = (blogId, newReaction, oldReaction) => {
    try {
        const storedReactions = localStorage.getItem(REACTIONS_KEY);
        const reactions = storedReactions ? JSON.parse(storedReactions) : {};

        if (newReaction) {
            reactions[blogId] = newReaction;
        } else {
            delete reactions[blogId];
        }
        localStorage.setItem(REACTIONS_KEY, JSON.stringify(reactions));

        const storedCounts = localStorage.getItem(COUNTS_KEY);
        const allCounts = storedCounts ? JSON.parse(storedCounts) : {};
        const currentCounts = allCounts[blogId] || { up: 0, down: 0 };

        if (oldReaction === 'up') currentCounts.up = Math.max(0, currentCounts.up - 1);
        if (oldReaction === 'down') currentCounts.down = Math.max(0, currentCounts.down - 1);

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
