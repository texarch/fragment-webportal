import { useState } from 'react';
import curiousImage from '../assets/curious-illustration.png';
import './Demo.css';


import InstaIcon from '../assets/insta.png';
import LinkedInIcon from '../assets/linkedin.png';
import EmailIcon from '../assets/email.png';
import LikeImage from '../assets/like.png';
import UnlikeImage from '../assets/unlike.png';



const REACT_APP_API_URL = "https://fragment.thefragment.app/website"

const Page1 = () => {
  return (
    <div className="page0-container">
      <div className="page0-text">
        <h1>
          Curious how it <br />
          <span className="highlight">Works?</span>
        </h1>
        <a href="#demo-section" className="demo-link">Request a Demo</a>
      </div>
      <div className="page0-image">
        <img src={curiousImage} alt="Curious character asking a question" />
      </div>
    </div>
  );
};

const Page2 = () => {
  return (
    <div className="page2-wrapper">
      <div className="section fragment">
        <div className="text-group">
          <h1 className="title">Fragment</h1>
          <p className="description">
            With Fragment, create your own planning space, receive
            schedules from your organiser, interact, and confirm your
            attendance—all in one place.
          </p>
        </div>
      </div>

      <div className="section business">
        <div className="text-group">
          <h1 className="title1">Fragment Business</h1>
          <p className="description1">
            Fragment Business helps you share and manage your
            daily and recurring events with your users effortlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

const Page4 = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    jobTitle: '',
    country: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setMessage('');

    // Validation - all fields including email are required
    if (!formData.name || !formData.company || !formData.jobTitle || !formData.country || !formData.email) {
      setMessage('All fields including email are required.');
      setMessageType('error');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage('Please enter a valid email address.');
      setMessageType('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${REACT_APP_API_URL}/demo-request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setMessageType('success');
        setFormData({
          name: '',
          company: '',
          jobTitle: '',
          country: '',
          email: ''
        });
      } else {
        setMessage(data.error || 'An error occurred');
        setMessageType('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Network error. Please try again later.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className='mainone'>
        <div id="demo-section" className="page-container">
          <h1 className="page4-heading">Want a Demo to onboard your Company?</h1>
          <h2 className="page4-subheading">
            Drop us your details and we'll get back to you soon
          </h2>

          {message && (
            <div className={`message ${messageType}`}>
              {message}
            </div>
          )}

          <form className="page4-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="page4-input"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="page4-input"
              value={formData.company}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              className="page4-input"
              value={formData.jobTitle}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              className="page4-input"
              value={formData.country}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              className="page4-input page4-email-input"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <button
              type="submit"
              className="page4-button page4-button-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Request Demo'}
            </button>
          </form>
          <p className="page4-contact-note">For More Information contact Us!</p>
        </div>
      </div>
    </>
  );
};


import { getFAQs, saveQuestion, getReaction, getCounts, saveFAQReaction } from './blog/faqStorage';

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
  // Use function to initialize state so it runs once
  const [faqs, setFaqs] = useState(() => {
    const allFaqs = getFAQs();
    // Filter to only show answered FAQs in the public list
    return allFaqs.filter(f => f.status === 'answered' && f.answer).map(f => {
      const counts = getCounts(f.id);
      const userReaction = getReaction(f.id);
      return {
        ...f,
        isOpen: false,
        likes: counts.likes,
        dislikes: counts.dislikes,
        userReaction: userReaction
      };
    });
  });

  // Effect to update FAQs if storage changes (optional, but good for sync)
  // For now, we rely on the initial load or local updates, but if we want it to be reactive to the Admin panel changes immediately without reload, we might need a listener.
  // Kept simple as per original code.

  const handleReaction = (id, type) => {
    // Find current FAQ to get old reaction
    const currentFaq = faqs.find(f => f.id === id);
    if (!currentFaq) return;

    // Calculate new reaction (toggle logic)
    const oldReaction = currentFaq.userReaction;
    const newReaction = oldReaction === type ? null : type;

    // Update storage
    const newCounts = saveFAQReaction(id, newReaction, oldReaction);

    // Update local state
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

  // Filter based on selected category (Strict Filtering Enabled)
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Use storage function with category
    saveQuestion(question, category);

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

const Demo = () => {
  const [showAskModal, setShowAskModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Organiser");

  return (
    <>
      <Page1 />
      <Page2 />
      <Page4 />

      {/* TABS Moved Here */}
      <div className="faq-tabs" style={{ marginTop: '20px' }}>
        <button
          className={`organiser-tab ${selectedCategory === 'Organiser' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('Organiser')}
        >
          <span>Organiser</span>
        </button>
        <button
          className={`individual-tab ${selectedCategory === 'Individual' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('Individual')}
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

export default Demo;

