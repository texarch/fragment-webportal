import { useState } from 'react';
import businessIcon from '../business-logo.png';
import curiousImage from '../curious-illustration.png';
import logo from '../logo0.png';
import './Demo.css';


import InstaIcon from '../insta.png';       
import LinkedInIcon from '../linkedin.png';
import EmailIcon from '../email.png';



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
  return (
    <>
    <div className='mainone'>
    <div id="demo-section" className="page-container"> {/* <- Add id here */}
      <h1 className="page4-heading">Want a Demo to onboard your Company?</h1>
      <h2 className="page4-subheading">
        Drop us a mail with date and time suitable for you
      </h2>
      <form className="page4-form">
        <input type="text" placeholder="Your Name" className="page4-input" />
        <input type="text" placeholder="Company Name" className="page4-input" />
        <input type="text" placeholder="Job title" className="page4-input" />
        <input type="text" placeholder="Country" className="page4-input" />
        <button type="submit" className="page4-button">Watch a Demo</button>
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
            <p>Email.id@email.com</p>
            <p>Phone number</p>
            <p>Address</p>
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

export default Demo;
