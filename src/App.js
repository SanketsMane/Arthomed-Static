import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import InsideSection from './components/InsideSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import AccountDeletion from './components/AccountDeletion';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #ffffff;
    color: #2d3748;
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* Performance optimizations */
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
    transform: translateZ(0);
  }

  /* Reduced motion for users who prefer it */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
  }

  /* Selection colors */
  ::selection {
    background: rgba(102, 126, 234, 0.3);
    color: #2d3748;
  }

  /* Focus styles */
  button:focus,
  a:focus {
    outline: 2px solid #667eea;
    outline-offset: 2px;
  }

  /* Optimized transitions */
  button, a, [data-animate] {
    will-change: transform;
  }

  /* Smooth animations */
  * {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

// Home page component
const HomePage = () => (
  <>
    <Hero />
    <InsideSection />
    <Features />
    <Testimonials />
    <Contact />
  </>
);

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/account-deletion" element={<AccountDeletion />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;