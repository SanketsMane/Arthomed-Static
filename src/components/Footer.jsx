import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #1e293b;
  color: white;
  padding: 60px 0 40px;
  border-top: 1px solid #334155;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const FooterMain = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 60px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`;

const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

const BrandName = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  color: white;
`;

const BrandTagline = styled.p`
  font-size: 14px;
  color: #64748b;
  margin: 0;
  max-width: 300px;
  line-height: 1.6;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: white;
  margin: 0;
`;

const FooterLink = styled(Link)`
  color: #94a3b8;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #334155;
  padding-top: 20px;
  text-align: center;
`;

const Copyright = styled.p`
  font-size: 14px;
  color: #64748b;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterMain>
          <BrandSection>
            <LogoSection>
              <LogoImage 
                src="/arthomed-footer-logo.png" 
                alt="Arthomed"
              />
              <BrandName>Arthomed</BrandName>
            </LogoSection>
            <BrandTagline>
              Transforming orthopedic healthcare through innovative digital solutions. 
              Empowering hospitals, doctors, and patients with seamless care management.
            </BrandTagline>
          </BrandSection>

          <FooterSection>
            <SectionTitle>Platform</SectionTitle>
            <FooterLink to="#features">Features</FooterLink>
            <FooterLink to="#hospitals">For Hospitals</FooterLink>
            <FooterLink to="#about">About Us</FooterLink>
          </FooterSection>

          <FooterSection>
            <SectionTitle>Legal</SectionTitle>
            <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink to="/terms-conditions">Terms & Conditions</FooterLink>
          </FooterSection>
        </FooterMain>

        <FooterBottom>
          <Copyright>
            © 2025 Arthomed. All Rights Reserved. | Formonex Solutions PVT LD
          </Copyright>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;