import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AccountDeletionContainer = styled.section`
  min-height: 100vh;
  background: #f8fafc;
  padding: 100px 0 60px;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
`;

const ContentCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 60px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  
  @media (max-width: 768px) {
    padding: 40px 30px;
    border-radius: 16px;
  }
`;

const Title = styled.h1`
  color: #2E7D32;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 32px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 24px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: #4a5568;
  margin-bottom: 32px;
  line-height: 1.6;
  
  strong {
    color: #2d3748;
    font-weight: 600;
  }
`;

const SectionHeading = styled.h2`
  color: #1565C0;
  font-size: 24px;
  font-weight: 600;
  margin: 40px 0 20px 0;
  
  @media (max-width: 768px) {
    font-size: 20px;
    margin: 32px 0 16px 0;
  }
`;

const StepsList = styled.ol`
  margin-left: 20px;
  margin-bottom: 32px;
  
  li {
    font-size: 16px;
    color: #4a5568;
    margin-bottom: 12px;
    line-height: 1.6;
    
    strong {
      color: #2d3748;
      font-weight: 600;
    }
  }
`;

const BulletList = styled.ul`
  margin-left: 20px;
  margin-bottom: 32px;
  
  li {
    font-size: 16px;
    color: #4a5568;
    margin-bottom: 8px;
    line-height: 1.6;
  }
`;

const ContactLink = styled.a`
  color: #1565C0;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ContactSection = styled.div`
  background: #f1f5f9;
  border-radius: 12px;
  padding: 24px;
  margin: 32px 0;
  
  ul {
    margin: 0;
    padding-left: 20px;
    
    li {
      font-size: 16px;
      color: #4a5568;
      margin-bottom: 8px;
      line-height: 1.6;
    }
  }
`;

const Note = styled.p`
  font-size: 14px;
  color: #718096;
  margin-top: 40px;
  padding: 16px;
  background: #f7fafc;
  border-radius: 8px;
  border-left: 4px solid #1565C0;
  
  strong {
    color: #2d3748;
  }
`;

const HighlightBox = styled.div`
  background: linear-gradient(135deg, #e6f3ff 0%, #f0f8ff 100%);
  border: 1px solid #bee3f8;
  border-radius: 12px;
  padding: 24px;
  margin: 24px 0;
  text-align: center;
  
  p {
    margin: 0;
    font-size: 16px;
    color: #2d3748;
    
    strong {
      color: #1565C0;
      font-weight: 600;
    }
  }
`;

const AccountDeletion = () => {
  return (
    <AccountDeletionContainer>
      <Container>
        <ContentCard
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title>Arthomed – Account & Data Deletion</Title>
          
          <Description>
            If you wish to delete your <strong>Arthomed account</strong> and all associated data, please follow these steps:
          </Description>

          <StepsList>
            <li>Use the <strong>Delete Account</strong> button in the Arthomed app (available in your user profile), or</li>
            <li>Send an email to: <ContactLink href="mailto:queries@arthomed.in">queries@arthomed.in</ContactLink></li>
            <li>Include your <strong>registered mobile number</strong> or <strong>email address</strong> used to log in.</li>
            <li>Specify that you want your <strong>account and all associated data deleted</strong>.</li>
          </StepsList>

          <SectionHeading>Data that will be deleted:</SectionHeading>
          <BulletList>
            <li>Personal information (name, email, phone number)</li>
            <li>Appointment records</li>
            <li>Medical documents and treatment records</li>
            <li>Clinical notes</li>
          </BulletList>

          <SectionHeading>Data that may be retained:</SectionHeading>
          <BulletList>
            <li>Anonymized or aggregated analytics data used for app improvement</li>
            <li>Required legal or regulatory records (if applicable)</li>
          </BulletList>

          <SectionHeading>Retention & Processing Time:</SectionHeading>
          <HighlightBox>
            <p>Your request will be processed within <strong>90 days</strong>. You will receive a confirmation email once your account and data have been deleted.</p>
          </HighlightBox>

          <SectionHeading>Contact:</SectionHeading>
          <ContactSection>
            <ul>
              <li>Email: <ContactLink href="mailto:queries@arthomed.in">queries@arthomed.in</ContactLink></li>
              <li>Phone: +91 99027 58444</li>
            </ul>
          </ContactSection>

          <Note>
            This page is provided by <strong>Nitinkumar Karoshi / Arthomed</strong> for users to request account and data deletion in compliance with Google Play policies.
          </Note>
        </ContentCard>
      </Container>
    </AccountDeletionContainer>
  );
};

export default AccountDeletion;