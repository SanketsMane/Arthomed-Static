import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #ffffff;
  padding: 120px 0 60px;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 48px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e2e8f0;
`;

const BackButton = styled(Link)`
  color: #64748b;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #1e293b;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LogoImage = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;

const BrandName = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 8px 0;
`;

const LastUpdated = styled.p`
  font-size: 14px;
  color: #64748b;
  margin: 0 0 40px 0;
`;

const Content = styled.div`
  background: #ffffff;
  line-height: 1.7;
`;

const Section = styled.div`
  margin-bottom: 32px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 16px 0;
`;

const SubSectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #374151;
  margin: 24px 0 12px 0;
`;

const Paragraph = styled.p`
  font-size: 15px;
  color: #4b5563;
  margin: 0 0 16px 0;
  line-height: 1.6;
`;

const List = styled.ul`
  margin: 16px 0;
  padding-left: 20px;
`;

const ListItem = styled.li`
  font-size: 15px;
  color: #4b5563;
  margin-bottom: 8px;
  line-height: 1.5;
`;

const ImportantNote = styled.div`
  background: #fef3c7;
  border-left: 4px solid #f59e0b;
  padding: 16px 20px;
  margin: 24px 0;
  border-radius: 4px;
`;

const ImportantText = styled.p`
  font-size: 14px;
  color: #92400e;
  margin: 0;
  line-height: 1.5;
`;

const ContactSection = styled.div`
  background: #f8fafc;
  padding: 24px;
  border-radius: 8px;
  margin-top: 32px;
  border: 1px solid #e2e8f0;
`;

const ContactTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 16px 0;
`;

const ContactText = styled.p`
  font-size: 14px;
  color: #4b5563;
  margin: 0 0 8px 0;
  line-height: 1.5;
`;

const ContactLink = styled.a`
  color: #3b82f6;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const PrivacyPolicy = () => {
  return (
    <PageContainer>
      <Container>
        <Header>
          <BackButton to="/">← Back to Home</BackButton>
          <LogoSection>
            <LogoImage 
              src="/arthomed-footer-logo.png" 
              alt="Arthomed"
            />
            <BrandName>Arthomed</BrandName>
          </LogoSection>
        </Header>

        <Title>Privacy Policy</Title>
        <LastUpdated>Last updated: September 25, 2025</LastUpdated>

        <Content>
          <Section>
            <SectionTitle>Introduction</SectionTitle>
            <Paragraph>
              Arthomed ("we," "our," or "us") is committed to protecting the privacy and security 
              of your personal information. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you use our healthcare management 
              platform and mobile application.
            </Paragraph>
            <Paragraph>
              Publisher Name: Nitinkumar Karoshi
            </Paragraph>
            <ImportantNote>
              <ImportantText>
                <strong>Healthcare Data Notice:</strong> This platform processes Protected Health 
                Information (PHI) and is designed to comply with HIPAA and other healthcare privacy 
                regulations.
              </ImportantText>
            </ImportantNote>
          </Section>

          <Section>
            <SectionTitle>Information We Collect</SectionTitle>
            
            <SubSectionTitle>Personal Information</SubSectionTitle>
            <List>
              <ListItem>Name, email address, and phone number</ListItem>
              <ListItem>Hospital or clinic affiliation and professional credentials</ListItem>
              <ListItem>User account information and preferences</ListItem>
              <ListItem>Communication records and support inquiries</ListItem>
            </List>

            <SubSectionTitle>Protected Health Information (PHI)</SubSectionTitle>
            <List>
              <ListItem>Patient demographics and contact information</ListItem>
              <ListItem>Medical history and treatment records</ListItem>
              <ListItem>Appointment and scheduling information</ListItem>
              <ListItem>Clinical notes and treatment plans</ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>How We Use Your Information</SectionTitle>
            <List>
              <ListItem>Providing and maintaining our healthcare management services</ListItem>
              <ListItem>Facilitating patient care coordination and clinical workflows</ListItem>
              <ListItem>Processing appointments, billing, and administrative functions</ListItem>
              <ListItem>Ensuring compliance with healthcare regulations</ListItem>
              <ListItem>Providing customer support and technical assistance</ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>Data Security</SectionTitle>
            <Paragraph>
              We implement comprehensive security measures including end-to-end encryption, 
              multi-factor authentication, regular security audits, and compliance with 
              healthcare industry standards (HIPAA Security Rule).
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>Your Rights</SectionTitle>
            <List>
              <ListItem>Access and review your personal information</ListItem>
              <ListItem>Request corrections to inaccurate information</ListItem>
              <ListItem>Request deletion of your personal information</ListItem>
              <ListItem>Opt-out of certain communications</ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>Updates to This Policy</SectionTitle>
            <Paragraph>
              We may update this Privacy Policy from time to time. We will notify you of 
              any material changes by posting the updated policy on our platform.
            </Paragraph>
          </Section>

          <ContactSection>
            <ContactTitle>Contact Us</ContactTitle>
            <ContactText>
              <strong>Email:</strong> <ContactLink href="mailto:queries@arthomed.in">queries@arthomed.in</ContactLink>
            </ContactText>
            <ContactText>
              <strong>Phone:</strong> <ContactLink href="tel:+919902758444">+91 99027 58444</ContactLink>
            </ContactText>
            <ContactText>
              <strong>Address:</strong> Indiranagar, Bengaluru, Karnataka, India
            </ContactText>
            <ContactText style={{ marginTop: '16px', fontSize: '12px', color: '#64748b' }}>
              © 2025 Formonex Solutions Pvt Ltd. All Rights Reserved
            </ContactText>
          </ContactSection>
        </Content>
      </Container>
    </PageContainer>
  );
};

export default PrivacyPolicy;
