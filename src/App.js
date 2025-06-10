import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.js';
import Page1 from './Page1.js';
import Page2 from './Page2.js';
import Page3 from './Page3.js';
import Page4 from './Page4.js';
import Page5 from './Page5.js';
import Page6 from './Page6.js';
import Page7 from './Page7.js';
import Page8 from './Page8.js';
import Page9 from './Page9.js';
import Page10 from './Page10.js';
import Page11 from './Page11.js';
import Page12 from './Page12.js';
// import Page13 from './Page13.js';
import Page14 from './Page14.js';
import Page16 from './Page16.js';
import Page17 from './Page17.js';
import Page18 from './Page18.js';
import Page19 from './Page19.js';
import Page20 from './Page20.js';
import Page21 from './Page21.js';
import Page23 from './Page23.js';
import Page24 from './Page24.js';
import Pagel from './Pagel.js';
import Contact from './pages/Contact.js';
import { About } from './pages/About.js';
import Pricing from './pages/Pricing.js';
import SignUp from './pages/SignUp';  
import Login from './pages/Login';     
import Demo from './pages/Demo.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div>
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
            <Page5 />
            <Page6 />
            <Page7 />
            <Page8 />
            <Page9 />
            <Page10 />
            <Page11 />
            <Page12 />
            {/* <Page13 /> */}
            <Page14 />
            <Page18 />
            <Page16 />
            <Page17 />
            <Page20 />
            <Page19 />
            <Pagel />
            <Page21 />
            <Page23 />
            <Page24 />
          </div>
        } />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/Demo" element={<Demo />} />
        {/* <Route path="/Blog" element={<Pricing />} /> */}
        <Route path="/signup" element={<SignUp />} />   {/* Route for Sign Up */}
        <Route path="/login" element={<Login />} />     {/* Route for Log In */}
      </Routes>
    </Router>
  );
}

export default App;
