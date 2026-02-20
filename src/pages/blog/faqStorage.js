// const API_URL = 'http://localhost:4000/website/admin/faqs'; // Local backend
const API_URL = 'https://fragment.thefragment.app/dev/website/admin/faqs'
// Get all FAQs
export const getFAQs = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch FAQs');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching FAQs:', error);
        return [];
    }
};

// Save a new question (Ask)
export const saveQuestion = async (questionText, category = 'Individual') => {
    try {
        const newFAQ = {
            question: questionText,
            category: category,
            status: 'pending'
        };
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newFAQ)
        });
        return await response.json();
    } catch (error) {
        console.error('Error saving question:', error);
    }
};

// Answer a question (Update)
export const answerQuestion = async (id, answerText) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ answer: answerText, status: 'answered' })
        });
        return await response.json();
    } catch (error) {
        console.error('Error answering question:', error);
    }
};

// Add FAQ (Admin)
export const addFAQ = async (faqData) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(faqData)
        });
        return await response.json();
    } catch (error) {
        console.error('Error adding FAQ:', error);
    }
};

// Update FAQ (Admin)
export const updateFAQ = async (id, faqData) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(faqData)
        });
        return await response.json();
    } catch (error) {
        console.error('Error updating FAQ:', error);
    }
};

// Delete FAQ
export const deleteQuestion = async (id) => {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.error('Error deleting FAQ:', error);
    }
};

// Save Reaction (Like/Dislike)
export const saveFAQReaction = async (id, newReaction, oldReaction) => {
    try {
        // If switching (e.g., like -> dislike), we need to decrement old and increment new
        // Ideally backend handles this, but for now let's just send the new action
        // Actually the backend toggle logic was simple increment/decrement
        // Let's refine the backend or make simple separate calls

        // Simpler approach for now matching backend "reactionFAQ":
        // We only support incrementing for now based on the backend implementation I wrote
        // "reactionFAQ" takes { type: 'likes'/'dislikes', action: 'increment'/'decrement' }

        if (oldReaction) {
            await fetch(`${API_URL}/${id}/reaction`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: oldReaction, action: 'decrement' })
            });
        }

        if (newReaction) {
            const response = await fetch(`${API_URL}/${id}/reaction`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: newReaction, action: 'increment' })
            });
            // We return the updated counts from here if needed
            const updatedDoc = await response.json();
            return { likes: updatedDoc.likes, dislikes: updatedDoc.dislikes };
        }

        // If just removing reaction, we already decremented old above.
        // We need to fetch latest to return correct counts
        const response = await fetch(`${API_URL}/${id}`);
        const data = await response.json();
        return { likes: data.likes, dislikes: data.dislikes };

    } catch (error) {
        console.error('Error saving reaction:', error);
        return { likes: 0, dislikes: 0 };
    }
};

// Helper for reactions (Client-side cache/localStorage for "user has reacted")
// We still need to know IF the user liked it locally.
const USER_REACTIONS_KEY = 'fragment_user_faq_reactions';
export const getReaction = (faqId) => {
    try {
        const stored = localStorage.getItem(USER_REACTIONS_KEY);
        if (stored) {
            const reactions = JSON.parse(stored);
            return reactions[faqId] || null;
        }
    } catch (error) {
        console.error('Error reading user reactions', error);
    }
    return null;
};

export const saveUserReactionLocal = (faqId, reaction) => {
    try {
        const stored = localStorage.getItem(USER_REACTIONS_KEY);
        const reactions = stored ? JSON.parse(stored) : {};
        if (reaction) {
            reactions[faqId] = reaction;
        } else {
            delete reactions[faqId];
        }
        localStorage.setItem(USER_REACTIONS_KEY, JSON.stringify(reactions));
    } catch (error) {
        console.error('Error saving user reactions', error);
    }
}

export const getCounts = (faqId) => {
    // This function was synchronous before. Now counts come from the object itself mainly.
    // We can keep it or deprecate it.
    // For compatibility with Demo.js loop, we might need it, but Demo.js needs refactor.
    return { likes: 0, dislikes: 0 }; // Placeholder
};
