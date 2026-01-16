const FAQ_STORAGE_KEY = 'fragment_faq_data_v4';

const initialFAQs = [
    // --- Individual FAQs ---
    {
        id: 101,
        question: "What is Fragment?",
        answer: "Fragment helps you create your own personal planning space with multi-calendar options and to-dos. You can also follow your organizers and automatically get their updates in your calendar. Fragment brings clarity to your day by consolidating all your events, schedules, and bookings in one place.",
        date: "January 15, 2026",
        status: "answered",
        category: "Individual"
    },
    {
        id: 102,
        question: "How can I create a calendar in Fragment?",
        answer: "On Web: Click the Calendar icon to open the calendar page. Here, you’ll find an option to add personal calendars.<br>On Mobile: Tap Personal at the top, and you’ll see an option to create a new calendar.",
        date: "January 15, 2026",
        status: "answered",
        category: "Individual"
    },
    {
        id: 103,
        question: "How can I create an event in Fragment?",
        answer: "Click the Add (+) icon, and you’ll see options to add an event or a task. Choose Event, fill in the details, and select a calendar name to save it under.",
        date: "January 15, 2026",
        status: "answered",
        category: "Individual"
    },
    {
        id: 104,
        question: "How can I see my added events?",
        answer: "Events appear on the Home page in multiple views — Upcoming, Week, Month, and Year. You can also open a specific calendar to view only the events from that calendar. This applies to both personal and followed calendars.",
        date: "January 15, 2026",
        status: "answered",
        category: "Individual"
    },
    {
        id: 105,
        question: "How do I follow an organizer or calendar?",
        answer: "Click the Follow icon, search for the organizer in the app, open their profile, and tap Follow. You’ll start receiving all their events and updates automatically.",
        date: "January 15, 2026",
        status: "answered",
        category: "Individual"
    },
    {
        id: 106,
        question: "Can I follow multiple organizers?",
        answer: "Yes. You can follow as many organizers or calendars as you want — everything appears together in one unified agenda. You can also follow an organizer and turn off their agendas if you don’t want all their events to appear automatically, but still want to keep them handy to check when needed.",
        date: "January 15, 2026",
        status: "answered",
        category: "Individual"
    },
    {
        id: 107,
        question: "How do I RSVP to an event?",
        answer: "The option to mark attendance is available for business events. Click on “Attending?” and tap Going, Maybe, or Not Going to update your response. Your choice will be visible only to the organizer.",
        date: "January 15, 2026",
        status: "answered",
        category: "Individual"
    },
    {
        id: 108,
        question: "Can I change my RSVP later?",
        answer: "Yes. You can click on the same button to update your RSVP anytime, and the change will reflect instantly for the organizer.",
        date: "January 15, 2026",
        status: "answered",
        category: "Individual"
    },
    {
        id: 109,
        question: "What happens when I like an event?",
        answer: "Liking an event lets the organizer know you’re interested or found the update useful. It also helps them understand engagement with their calendar.",
        date: "January 15, 2026",
        status: "answered",
        category: "Individual"
    },
    {
        id: 110,
        question: "Can I comment on an event?",
        answer: "Yes, if the organizer has enabled comments. You can share feedback, ask questions, or interact with the organizer and other attendees directly within the event.",
        date: "January 15, 2026",
        status: "answered",
        category: "Individual"
    },
    {
        id: 111,
        question: "Can others see my comments?",
        answer: "Yes. Comments are visible to others who have access to the event. You can also delete your own comment anytime.",
        date: "January 15, 2026",
        status: "answered",
        category: "Individual"
    },
    {
        id: 112,
        question: "Do I get notified if someone replies to my comment?",
        answer: "Yes. You’ll receive a notification when someone replies to your comment, and you’ll be able to view the reply directly within the event.",
        date: "January 15, 2026",
        status: "answered",
        category: "Individual"
    },
    {
        id: 113,
        question: "How do I book a slot for an event?",
        answer: "Open the calendar of the organizer you want to book with, or ask them to share their booking link. Choose your preferred time, fill in your details, and confirm — your slot will be booked instantly.",
        date: "January 15, 2026",
        status: "answered",
        category: "Individual"
    },
    {
        id: 114,
        question: "Can I cancel a slot booking?",
        answer: "Yes. You can cancel your slots within the time allowed by the organizer. Once canceled, your calendar updates automatically.",
        date: "January 15, 2026",
        status: "answered",
        category: "Individual"
    },
    {
        id: 115,
        question: "How can I book an event?",
        answer: "You’ll see the booking option on the calendar you follow, right from your consolidated events page. If you don’t follow the organizer, or if you’ve turned off events from that calendar, you can open the calendar directly, select the event, and book the event.",
        date: "January 15, 2026",
        status: "answered",
        category: "Individual"
    },
    {
        id: 116,
        question: "What happens if an organizer updates or cancels an event?",
        answer: "Any changes — such as timing updates or cancellations — are instantly reflected in your calendar, and you’ll receive a notification.",
        date: "January 15, 2026",
        status: "answered",
        category: "Individual"
    },
    {
        id: 117,
        question: "Can I pay through Fragment?",
        answer: "Yes. If your organizer has enabled payments, you can securely complete your payment through Fragment.",
        date: "January 15, 2026",
        status: "answered",
        category: "Individual"
    },
    {
        id: 118,
        question: "Will I get a refund if I cancel a paid booking?",
        answer: "Refunds depend on the organizer’s policy. If eligible, your refund will be automatically processed to your original payment method.",
        date: "January 15, 2026",
        status: "answered",
        category: "Individual"
    },
    {
        id: 119,
        question: "Do I need an account to use Fragment?",
        answer: "Yes. Your account ensures your schedules, bookings, and preferences stay synced across devices.",
        date: "January 15, 2026",
        status: "answered",
        category: "Individual"
    },
    {
        id: 120,
        question: "Is my data private and secure?",
        answer: "Absolutely. Fragment never shares or sells your data. Only organizers you follow can send you updates.",
        date: "January 15, 2026",
        status: "answered",
        category: "Individual"
    },

    // --- Organiser FAQs ---
    {
        id: 201,
        question: "What is Fragment Business?",
        answer: "Fragment is a scheduling and collaboration platform that helps individuals, creators, organisers groups, and businesses create, share, and manage events and schedules across multiple groups.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 202,
        question: "How do I create a group/ calendar?",
        answer: "On Web: Click the Calendar icon to open the calendar page. Here, you’ll find an option to add calendars. While creating the calendar you will have an option to choose it’s status to keep it as public or private.<br>On Mobile: Tap calendar at the top, and you’ll see an option to create a new calendar.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 203,
        question: "What is a public calendar?",
        answer: "A public calendar is visible to all users on the app. Anyone can view and interact with its events. This helps you reach a wider audience, as any user can follow your calendar to receive updates automatically.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 204,
        question: "What is a private calendar?",
        answer: "A private calendar is visible only to people you share its link with. It works like a private group where you can share events and interact exclusively with selected users.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 205,
        question: "How can I share a private calendar?",
        answer: "Go to your private calendar, click on “Share Calendar”, copy the generated link, and share it with your users via email or message.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 206,
        question: "How will users access my private calendar?",
        answer: "When users open your shared link, they’ll be able to view the calendar and its events. They can also choose to Follow the calendar, so all current and future events will appear in their app automatically and update in real time.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 207,
        question: "Can I switch between public and private?",
        answer: "Yes, you can change your calendar’s status anytime. Even if you switch between public and private, all followers and event interactions will remain intact.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 208,
        question: "Can multiple people manage one calendar?",
        answer: "Yes. You can invite collaborators or co-admins to manage a calendar together. Everyone stays synced, and changes are updated instantly for all.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 209,
        question: "What roles are available for collaboration?",
        answer: "There are two roles:<br><strong>Viewer:</strong> Can view events but cannot make changes.<br><strong>Editor:</strong> Can add, edit, or delete events within the calendar.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 210,
        question: "Can a collaborator delete my calendar?",
        answer: "No. Only the calendar owner can delete the calendar. Collaborators, regardless of their role, cannot remove the calendar itself.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 211,
        question: "How can I add collaborators?",
        answer: "Go to the calendar you want to share, click on “Make it Collaborator”, and search for a user or send them an invite. The invited user will receive an email — once they click the link and log in, they can accept the invitation and start collaborating.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 212,
        question: "Can I make a calendar non-collaborative or revoke access?",
        answer: "Yes. You can remove collaborators anytime. Go to the calendar’s Collaborators list and click Remove next to the user’s name. Once removed, they’ll no longer have access to the calendar or its events.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 213,
        question: "Can I add tickets or bookings to my event?",
        answer: "Yes. You can make any event bookable by turning on “Bookable Event” and adding ticket details. Users will then see the booking options on your event and can book directly.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 214,
        question: "How does booking work on Fragment?",
        answer: "Organizers can enable bookings for any event. Once enabled, users can view ticket details, make payments, and book their spots right within the app.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 215,
        question: "Can I turn off bookings for an event?",
        answer: "Yes and no. You can turn off bookings only if no users have booked yet. If there are existing bookings, please contact Fragment support at hi@thefragment.app for assistance.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 216,
        question: "Can users cancel their bookings?",
        answer: "Yes. Users can cancel their bookings within the time window set by the organizer.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 217,
        question: "Can I create tickets for recurring events?",
        answer: "Currently, bookings are supported only for individual (non-recurring) events. Support for recurring bookings will be available soon.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 218,
        question: "Can I edit ticket details after publishing an event?",
        answer: "You can edit ticket details as long as no bookings have been made. Once users start booking, certain details (like price and quantity) are locked for accuracy.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 219,
        question: "Do users receive booking confirmations?",
        answer: "Yes. After completing a booking, users receive a confirmation within the app and via email, including event details and ticket information.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 220,
        question: "Can I see who booked my event?",
        answer: "Yes. Organizers can view the list of attendees for each event, including their booking details and status.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 221,
        question: "What are slots in Fragment?",
        answer: "Slots are specific time blocks within an event or calendar where users can book participation — for example, a 6 PM training session, a class batch, or a one-on-one meeting.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 222,
        question: "How do slots work on Fragment?",
        answer: "Organizers can create slots under any calendar and set available times for users to book. Users can view available slots on the calendar (whether they follow it or not) and book directly. Organizers can also share a booking link with users to let them book slots easily.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 223,
        question: "How can I add a slot?",
        answer: "Click on the Add (+) button, select Slots, enter the slot name, choose a calendar, fill in the details, and create the slot.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 224,
        question: "Are slots always linked to a calendar?",
        answer: "Yes. Every slot belongs to a calendar and appears within it.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 225,
        question: "Can I have more than one slot in a calendar?",
        answer: "Yes. You can create multiple slots within the same calendar, each with different times or purposes.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 226,
        question: "Can I delete or pause slots?",
        answer: "Yes. You can delete or pause slots at any time. However, slots that already have bookings will remain booked unless those bookings are canceled.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 227,
        question: "Can I edit a slot?",
        answer: "Yes. You can edit slot details or change the timing of a slot. The booked ones will not be impacted.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 228,
        question: "Can users cancel slot bookings?",
        answer: "Yes. Users can cancel their slot bookings within the cancellation window set by the organizer.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 229,
        question: "Can I limit the number of users per slot?",
        answer: "Yes. You can set a maximum number of users per slot to control capacity — once full, no further bookings will be accepted.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 230,
        question: "Do users get confirmation for booked slots?",
        answer: "Yes. Users receive in-app and email confirmations once they successfully book a slot.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 231,
        question: "Is my data secure on Fragment?",
        answer: "Absolutely. All data is encrypted and stored securely. Fragment does not share or sell user data to third parties.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 232,
        question: "Can I use Fragment for internal team scheduling?",
        answer: "Yes. Many teams use Fragment for internal planning — to manage meetings, task schedules, training sessions, and even team availability.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    },
    {
        id: 233,
        question: "Is Fragment Business free?",
        answer: "Yes. You can start for free. Paid plans offer advanced tools like analytics, branding, and integrations.",
        date: "January 15, 2026",
        status: "answered",
        category: "Organiser"
    }
];

export const getFAQs = () => {
    try {
        const stored = localStorage.getItem(FAQ_STORAGE_KEY);
        if (stored) {
            let parsedData = JSON.parse(stored);
            // Migration: Ensure all have a category
            let hasChanges = false;
            parsedData = parsedData.map(f => {
                if (!f.category) {
                    hasChanges = true;
                    return { ...f, category: 'Individual' }; // Default to Individual
                }
                return f;
            });
            if (hasChanges) {
                saveFAQs(parsedData);
            }
            return parsedData;
        }
    } catch (error) {
        console.error('Error reading FAQs', error);
    }
    // Seed with initial if empty
    saveFAQs(initialFAQs);
    return initialFAQs;
};

export const saveFAQs = (faqs) => {
    try {
        localStorage.setItem(FAQ_STORAGE_KEY, JSON.stringify(faqs));
        window.dispatchEvent(new Event('faq-storage-update'));
    } catch (error) {
        console.error('Error saving FAQs', error);
    }
};

export const saveQuestion = (questionText, category = 'Individual') => {
    const faqs = getFAQs();
    const newQuestion = {
        id: Date.now(),
        question: questionText,
        answer: '',
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        status: 'pending',
        likes: 0,
        dislikes: 0,
        category: category
    };
    saveFAQs([newQuestion, ...faqs]);
    return newQuestion;
};

export const answerQuestion = (id, answerText) => {
    const faqs = getFAQs();
    const updatedFAQs = faqs.map(faq =>
        faq.id === id
            ? { ...faq, answer: answerText, status: 'answered' }
            : faq
    );
    saveFAQs(updatedFAQs);
    return updatedFAQs;
};

const REACTIONS_KEY = 'fragment_faq_reactions';
const COUNTS_KEY = 'fragment_faq_counts';

export const getReaction = (faqId) => {
    try {
        const stored = localStorage.getItem(REACTIONS_KEY);
        if (stored) {
            const reactions = JSON.parse(stored);
            return reactions[faqId] || null;
        }
    } catch (error) {
        console.error('Error reading reactions', error);
    }
    return null;
};

export const getCounts = (faqId) => {
    try {
        const stored = localStorage.getItem(COUNTS_KEY);
        if (stored) {
            const counts = JSON.parse(stored);
            return counts[faqId] || { likes: 0, dislikes: 0 };
        }
    } catch (error) {
        console.error('Error reading counts', error);
    }
    return { likes: 0, dislikes: 0 };
};

export const saveFAQReaction = (faqId, newReaction, oldReaction) => {
    try {
        // 1. Update User Reaction
        const storedReactions = localStorage.getItem(REACTIONS_KEY);
        const reactions = storedReactions ? JSON.parse(storedReactions) : {};

        if (newReaction) {
            reactions[faqId] = newReaction;
        } else {
            delete reactions[faqId];
        }
        localStorage.setItem(REACTIONS_KEY, JSON.stringify(reactions));

        // 2. Update Global Counts
        const storedCounts = localStorage.getItem(COUNTS_KEY);
        const allCounts = storedCounts ? JSON.parse(storedCounts) : {};
        const currentCounts = allCounts[faqId] || { likes: 0, dislikes: 0 };

        // Decrement old reaction
        if (oldReaction === 'likes') currentCounts.likes = Math.max(0, currentCounts.likes - 1);
        if (oldReaction === 'dislikes') currentCounts.dislikes = Math.max(0, currentCounts.dislikes - 1);

        // Increment new reaction
        if (newReaction === 'likes') currentCounts.likes++;
        if (newReaction === 'dislikes') currentCounts.dislikes++;

        allCounts[faqId] = currentCounts;
        localStorage.setItem(COUNTS_KEY, JSON.stringify(allCounts));

        return currentCounts;
    } catch (error) {
        console.error('Error saving reaction', error);
        return { likes: 0, dislikes: 0 };
    }
};

export const deleteQuestion = (id) => {
    const faqs = getFAQs();
    const updatedFAQs = faqs.filter(faq => faq.id !== id);
    saveFAQs(updatedFAQs);
    return updatedFAQs;
};

export const addFAQ = (faqData) => {
    const faqs = getFAQs();
    const newFAQ = {
        id: Date.now(),
        question: faqData.question,
        answer: faqData.answer || '',
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        status: faqData.answer ? 'answered' : 'pending',
        likes: 0,
        dislikes: 0,
        category: faqData.category || 'Individual'
    };
    saveFAQs([newFAQ, ...faqs]);
    return newFAQ;
};

export const updateFAQ = (id, faqData) => {
    const faqs = getFAQs();
    const updatedFAQs = faqs.map(faq =>
        faq.id === id
            ? {
                ...faq,
                question: faqData.question,
                answer: faqData.answer,
                status: faqData.answer ? 'answered' : 'pending',
                category: faqData.category
            }
            : faq
    );
    saveFAQs(updatedFAQs);
    return updatedFAQs;
};
