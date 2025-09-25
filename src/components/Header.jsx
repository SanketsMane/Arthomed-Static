import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 4px 0;
  
  &:hover {
    transform: translateY(-1px);
  }
`;

const LogoImage = styled.img`
  height: 50px;
  width: auto;
  max-width: none;
  object-fit: contain;
  object-position: left center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 1px 3px rgba(43, 90, 160, 0.1));
  
  ${Logo}:hover & {
    transform: scale(1.03);
    filter: drop-shadow(0 2px 8px rgba(43, 90, 160, 0.2));
  }
  
  @media (max-width: 1024px) {
    height: 46px;
  }
  
  @media (max-width: 768px) {
    height: 42px;
  }
  
  @media (max-width: 480px) {
    height: 38px;
  }
`;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(25px) saturate(200%);
  border-bottom: 1px solid rgba(226, 232, 240, 0.3);
  z-index: 1000;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.03), rgba(118, 75, 162, 0.03));
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.2), transparent);
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  
  @media (max-width: 768px) {
    padding: 0 24px;
    height: 70px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 48px;
  
  @media (max-width: 1024px) {
    gap: 32px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #4a5568;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  padding: 10px 16px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 12px;
  }

  &:hover {
    color: #667eea;
    transform: translateY(-1px);
    
    &::before {
      opacity: 1;
    }
  }
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.2), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
    
    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-1px) scale(1.02);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #4a5568;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(226, 232, 240, 0.8);
  padding: 20px 24px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    gap: 20px;
  }
`;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate to home first, then scroll
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <HeaderContainer>
      <Container>
        <Logo onClick={() => navigate('/')}>
          <LogoImage 
            src="/arthomed-logo-final.png" 
            alt="Arthomed - Relief. Recover. Restore"
          />
        </Logo>
        
        <Nav>
          <NavLink to="/" onClick={() => scrollToSection('home')}>Home</NavLink>
          <NavLink to="/" onClick={() => scrollToSection('features')}>Features</NavLink>
          <NavLink to="/" onClick={() => scrollToSection('about')}>About</NavLink>
          <NavLink to="/" onClick={() => scrollToSection('contact')}>Contact</NavLink>
        </Nav>

        <CTAButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('contact')}
        >
          Request Demo
        </CTAButton>

        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </Container>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <NavLink to="/" onClick={() => { scrollToSection('home'); setIsMobileMenuOpen(false); }}>Home</NavLink>
        <NavLink to="/" onClick={() => { scrollToSection('features'); setIsMobileMenuOpen(false); }}>Features</NavLink>
        <NavLink to="/" onClick={() => { scrollToSection('about'); setIsMobileMenuOpen(false); }}>About</NavLink>
        <NavLink to="/" onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }}>Contact</NavLink>
        <CTAButton 
          style={{ marginTop: '10px' }}
          onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }}
        >
          Request Demo
        </CTAButton>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;