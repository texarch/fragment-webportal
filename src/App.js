import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.js';
import Organiser from './Organiser.js';
import Individual from './Individual.js';
import Page1 from './Page1.js';
import Contact from './pages/Contact.js';
import { About } from './pages/About.js';
import Pricing from './pages/Pricing.js';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Demo from './pages/Demo.js';
import Blog from './pages/blog/Blog.js';
import BlogPost from './pages/blog/BlogPost.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ScrollToTop from './ScrollToTop.js';



function App() {
  const [currentView, setCurrentView] = React.useState('organiser');

  const Home = () => {
    return (
      <>
        {currentView === 'organiser' ? (
          <Organiser setView={setCurrentView} />
        ) : (
          <Individual setView={setCurrentView} />
        )}
      </>
    );
  };

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/organiser" element={<Organiser />} /> */}
        {/* <Route path="/individual" element={<Individual />} /> */}
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/Demo" element={<Demo />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/blog/post" element={<BlogPost />} />
        <Route path="/signup" element={<SignUp />} />   {/* Route for Sign Up */}
        <Route path="/login" element={<Login />} />     {/* Route for Log In */}
      </Routes>
    </Router>
  );
}

export default App;
