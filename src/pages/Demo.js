import { useState } from 'react';
import businessIcon from '../business-logo.png';
import curiousImage from '../curious-illustration.png';
import logo from '../logo0.png';
import './Demo.css';


import InstaIcon from '../insta.png';       
import LinkedInIcon from '../linkedin.png';
import EmailIcon from '../email.png';

const REACT_APP_API_URL="https://fragment.thefragment.app/website"

const FAQData = [
  {
    question: 'Question Asked by someone 1?',
    answer: 'Answer to it Answer to it Answer to it Answer to it Answer to it Answer to it Answer to it Answer to it Answer to it Answer to it Answer to it Answer to it Answer to it Answer to it Answer to it',
    isOpen: false,
  },
  {
    question: 'Question Asked by someone 2?',
    answer: 'This is the answer to the second frequently asked question.',
    isOpen: false,
  },
  {
    question: 'Question Asked by someone 3?',
    answer: 'Here is a detailed explanation for the third question.',
    isOpen: false,
  },
  {
    question: 'Question Asked by someone 4?',
    answer: 'The response to the fourth query goes here.',
    isOpen: false,
  },
  {
    question: 'Question Asked by someone 5?',
    answer: 'This is the answer for the fifth frequently asked question.',
    isOpen: false,
  },
  {
    question: 'Question Asked by someone 6?',
    answer: 'Explanation for the sixth question.',
    isOpen: false,
  },
];

const FAQItem = ({ faq, index, toggleFAQ }) => {
  return (
    <div className={`faq-item ${faq.isOpen ? 'open' : ''}`} key={index}>
      <div className="faq-question" onClick={() => toggleFAQ(index)}>
        {faq.question}
        <span className="arrow">{faq.isOpen ? '▲' : '▼'}</span>
      </div>
      {faq.isOpen && <div className="faq-answer">{faq.answer}</div>}
    </div>
  );
};

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


// const FAQ = () => {
//   const [faqs, setFaqs] = useState(FAQData);

//   const toggleFAQ = (index) => {
//     setFaqs(
//       faqs.map((faq, i) =>
//         i === index ? { ...faq, isOpen: !faq.isOpen } : { ...faq, isOpen: false }
//       )
//     );
//   };

//   return (
//     <div className="faq-container">
//       <h2 className="faq-title">Frequently Asked Questions</h2>
//       <p className="faq-subtitle">Clarifying your most asked questions about our features.</p>
//       {faqs.map((faq, index) => (
//         <FAQItem key={index} faq={faq} index={index} toggleFAQ={toggleFAQ} />
//       ))}
//     </div>
//   );
// };

const Demo = () => {
  return (
    <>
      
      <Page1 />
      <Page2 />
      <Page4 />
      {/* <FAQ /> */}
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