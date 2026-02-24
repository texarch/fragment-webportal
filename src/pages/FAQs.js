import { useState, useEffect } from 'react';
import './Demo.css';

import LikeImage from '../assets/like.png';
import UnlikeImage from '../assets/unlike.png';
import InstaIcon from '../assets/insta.png';
import LinkedInIcon from '../assets/linkedin.png';
import EmailIcon from '../assets/email.png';

import { getFAQs, saveQuestion, getReaction, saveFAQReaction, saveUserReactionLocal } from './blog/faqStorage';

const FAQItem = ({ faq, index, toggleFAQ, onReaction }) => {
    return (
        <div className={`faq-item ${faq.isOpen ? 'open' : ''}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span className="arrow">v</span>
            </div>
            {faq.isOpen && (
                <div className="faq-answer">
                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    <div className="faq-feedback">
                        <span>Did it help?</span>
                        <div className="faq-feedback-buttons">
                            <button onClick={() => onReaction(faq.id, 'likes')}>
                                <img src={LikeImage} alt="Yes" />
                                <span className="reaction-count">{faq.likes || 0}</span>
                            </button>
                            <button onClick={() => onReaction(faq.id, 'dislikes')}>
                                <img src={UnlikeImage} alt="No" />
                                <span className="reaction-count">{faq.dislikes || 0}</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const FAQ = ({ selectedCategory }) => {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const allFaqs = await getFAQs();
            const mappedFaqs = allFaqs
                .filter(f => f.status === 'answered' && f.answer)
                .reverse()
                .map(f => {
                    const userReaction = getReaction(f._id);
                    return {
                        ...f,
                        id: f._id,
                        isOpen: false,
                        likes: f.likes || 0,
                        dislikes: f.dislikes || 0,
                        userReaction: userReaction
                    };
                });
            setFaqs(mappedFaqs);
        };
        loadData();
    }, []);

    const handleReaction = async (id, type) => {
        const currentFaq = faqs.find(f => f.id === id);
        if (!currentFaq) return;

        const oldReaction = currentFaq.userReaction;
        const newReaction = oldReaction === type ? null : type;

        const newCounts = await saveFAQReaction(id, newReaction, oldReaction);
        saveUserReactionLocal(id, newReaction);

        setFaqs(faqs.map(faq =>
            faq.id === id
                ? {
                    ...faq,
                    likes: newCounts.likes,
                    dislikes: newCounts.dislikes,
                    userReaction: newReaction
                }
                : faq
        ));
    };

    const toggleFAQ = (id) => {
        setFaqs(
            faqs.map((faq) =>
                faq.id === id ? { ...faq, isOpen: !faq.isOpen } : { ...faq, isOpen: false }
            )
        );
    };

    const filteredFaqs = faqs.filter(f => f.category === selectedCategory);

    return (
        <div className="faq-container">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-subtitle">Clarifying your most asked questions about our features.</p>

            <div className="faq-list">
                {filteredFaqs.length > 0 ? (
                    filteredFaqs.map((faq, index) => (
                        <FAQItem key={faq.id} faq={faq} index={index} toggleFAQ={() => toggleFAQ(faq.id)} onReaction={handleReaction} />
                    ))
                ) : (
                    <p style={{ textAlign: 'center', color: '#666' }}>No FAQs found for this category.</p>
                )}
            </div>
        </div>
    );
};

const AskModal = ({ isOpen, onClose, category }) => {
    const [question, setQuestion] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        await saveQuestion(question, category);

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                setQuestion('');
                onClose();
            }, 2000);
        }, 800);
    };

    return (
        <div className="modal-overlay">
            <div className="ask-modal-content">
                <button className="close-modal-btn" onClick={onClose}>×</button>
                {submitted ? (
                    <div className="success-message">
                        <h3>Thank you!</h3>
                        <p>Your question has been received for the {category} section. We'll get back to you soon.</p>
                    </div>
                ) : (
                    <>
                        <h2>Ask a Question ({category})</h2>
                        <form onSubmit={handleSubmit}>
                            <textarea
                                placeholder="Type your question here..."
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                required
                                rows="5"
                            />
                            <button type="submit" className="submit-question-btn" disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

const AskQuestionSection = ({ onOpenModal }) => {
    return (
        <div className="ask-question-section">
            <h2>Didn't find what you're looking for?</h2>
            <p>Have a question we haven't answered yet?</p>
            <button className="ask-btn" onClick={onOpenModal}>
                [ Ask a Question ]
            </button>
        </div>
    );
};

const FAQs = ({ currentView, setView }) => {
    const [showAskModal, setShowAskModal] = useState(false);
    const selectedCategory = currentView === 'individual' ? 'Individual' : 'Organiser';

    const handleCategoryChange = (category) => {
        if (setView) {
            setView(category.toLowerCase());
        }
    };

    // Reset to Organiser view when FAQs page loads
    useEffect(() => {
        if (setView) {
            setView('organiser');
        }
    }, [setView]);

    return (
        <>
            {/* TABS */}
            <div className="faq-tabs" style={{ marginTop: '20px' }}>
                <button
                    className={`home-organiser-tab ${selectedCategory === 'Organiser' ? 'active' : ''}`}
                    onClick={() => handleCategoryChange('Organiser')}
                >
                    <span>Organiser</span>
                </button>
                <button
                    className={`home-individual-tab ${selectedCategory === 'Individual' ? 'active' : ''}`}
                    onClick={() => handleCategoryChange('Individual')}
                >
                    <span>Individual</span>
                </button>
            </div>

            <AskQuestionSection onOpenModal={() => setShowAskModal(true)} />
            <FAQ selectedCategory={selectedCategory} />
            <AskModal isOpen={showAskModal} onClose={() => setShowAskModal(false)} category={selectedCategory} />
            <div>
                <footer className="footer">
                    <div className="footer-content">
                        <div className="footer-column social-contact">
                            <div className="social-icons-footer">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <img src={InstaIcon} alt="Instagram" />
                                </a>
                                <a href="www.linkedin.com/company/thefragmentapp/" target="_blank" rel="noopener noreferrer">
                                    <img src={LinkedInIcon} alt="LinkedIn" />
                                </a>
                                <a href="https://www.youtube.com/@thefragmentapp" target="_blank" rel="noopener noreferrer">
                                    <img src={EmailIcon} alt="YouTube" />
                                </a>
                            </div>
                            <p>Email:<span> hi@thefragment.app</span></p>
                        </div>

                        <div className="footer-column offset-top">
                            <p>About Us</p>
                            <p>Work with us</p>
                            <p>FAQs</p>
                        </div>

                        <div className="footer-column offset-top">
                            <p>Privacy</p>
                            <p>Terms and Conditions</p>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>CopyRight Info</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default FAQs;
