import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AccountDeletionContainer = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 120px 0 80px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23e2e8f0" fill-opacity="0.3"><circle cx="30" cy="30" r="2"/></g></svg>');
    opacity: 0.3;
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
`;

const HeaderSection = styled(motion.div)`
  text-align: center;
  margin-bottom: 60px;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
`;

const LogoIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #2E7D32 0%, #1565C0 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 24px;
  box-shadow: 0 8px 25px rgba(46, 125, 50, 0.3);
`;

const BrandName = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #2E7D32;
  margin: 0;
`;

const PageTitle = styled.h1`
  color: #1e293b;
  font-size: 42px;
  font-weight: 700;
  margin: 0 0 16px 0;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const PageSubtitle = styled.p`
  font-size: 18px;
  color: #64748b;
  margin: 0;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContentCard = styled(motion.div)`
  background: white;
  border-radius: 24px;
  padding: 60px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #2E7D32 0%, #1565C0 100%);
  }
  
  @media (max-width: 768px) {
    padding: 40px 30px;
    border-radius: 20px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: #475569;
  margin-bottom: 40px;
  line-height: 1.7;
  text-align: center;
  
  strong {
    color: #1e293b;
    font-weight: 600;
  }
`;

const SectionHeading = styled.h2`
  color: #1565C0;
  font-size: 24px;
  font-weight: 600;
  margin: 50px 0 24px 0;
  display: flex;
  align-items: center;
  gap: 12px;
  
  &::before {
    content: '';
    width: 4px;
    height: 24px;
    background: linear-gradient(135deg, #1565C0 0%, #2E7D32 100%);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 20px;
    margin: 40px 0 20px 0;
  }
`;

const ProcessSteps = styled.div`
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: 16px;
  padding: 32px;
  margin: 32px 0;
  border: 1px solid #e2e8f0;
`;

const StepsList = styled.ol`
  margin: 0;
  padding-left: 24px;
  counter-reset: step-counter;
  
  li {
    font-size: 16px;
    color: #475569;
    margin-bottom: 20px;
    line-height: 1.6;
    position: relative;
    counter-increment: step-counter;
    padding-left: 16px;
    
    &::marker {
      font-weight: 700;
      color: #1565C0;
    }
    
    strong {
      color: #1e293b;
      font-weight: 600;
    }
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const DataSection = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin: 40px 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const DataCard = styled.div`
  background: ${props => props.variant === 'delete' ? '#fef2f2' : '#f0fdf4'};
  border: 1px solid ${props => props.variant === 'delete' ? '#fecaca' : '#bbf7d0'};
  border-radius: 16px;
  padding: 24px;
  
  h3 {
    color: ${props => props.variant === 'delete' ? '#dc2626' : '#16a34a'};
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 16px 0;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const BulletList = styled.ul`
  margin: 0;
  padding-left: 20px;
  
  li {
    font-size: 15px;
    color: #475569;
    margin-bottom: 8px;
    line-height: 1.5;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ContactLink = styled.a`
  color: #1565C0;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    text-decoration: underline;
    color: #0f4c75;
  }
`;

const ContactSection = styled.div`
  background: linear-gradient(135deg, #e6f3ff 0%, #f0f8ff 100%);
  border: 1px solid #bee3f8;
  border-radius: 16px;
  padding: 32px;
  margin: 32px 0;
  
  h3 {
    color: #1565C0;
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 20px 0;
    text-align: center;
  }
  
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    margin-top: 16px;
  }
  
  .contact-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 16px;
    background: white;
    border-radius: 12px;
    border: 1px solid #e0f2fe;
    
    .contact-label {
      font-size: 12px;
      color: #64748b;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
    }
    
    .contact-value {
      font-size: 16px;
      color: #1e293b;
      font-weight: 600;
    }
  }
`;

const HighlightBox = styled.div`
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border: 2px solid #f59e0b;
  border-radius: 16px;
  padding: 28px;
  margin: 32px 0;
  text-align: center;
  position: relative;
  
  &::before {
    content: '⚠️';
    font-size: 24px;
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    padding: 4px 8px;
    border-radius: 50%;
  }
  
  p {
    margin: 8px 0 0 0;
    font-size: 18px;
    color: #92400e;
    font-weight: 600;
    
    strong {
      color: #78350f;
      font-weight: 700;
    }
  }
`;

const ImportantNote = styled.div`
  background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
  border: 1px solid #f87171;
  border-radius: 12px;
  padding: 24px;
  margin: 32px 0;
  
  h4 {
    color: #dc2626;
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 12px 0;
    display: flex;
    align-items: center;
    gap: 8px;
    
    &::before {
      content: '❗';
      font-size: 18px;
    }
  }
  
  ul {
    margin: 0;
    padding-left: 20px;
    
    li {
      font-size: 14px;
      color: #991b1b;
      margin-bottom: 6px;
      line-height: 1.5;
      
      strong {
        font-weight: 600;
      }
    }
  }
`;

const Note = styled.div`
  font-size: 14px;
  color: #64748b;
  margin-top: 50px;
  padding: 20px;
  background: #f8fafc;
  border-radius: 12px;
  border-left: 4px solid #1565C0;
  text-align: center;
  
  strong {
    color: #1e293b;
    font-weight: 600;
  }
`;

const AccountDeletion = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <AccountDeletionContainer>
      <Container>
        <HeaderSection
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <LogoSection>
            <LogoIcon>A</LogoIcon>
            <BrandName>Arthomed</BrandName>
          </LogoSection>
          <PageTitle>Account & Data Deletion</PageTitle>
          <PageSubtitle>
            Complete guide for permanently deleting your Arthomed account and associated data
          </PageSubtitle>
        </HeaderSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ContentCard variants={itemVariants}>
            <Description>
              If you wish to permanently delete your <strong>Arthomed account</strong> and all associated personal data, please follow the process outlined below. This action is irreversible and complies with data protection regulations.
            </Description>

            <SectionHeading>How to Request Account Deletion</SectionHeading>
            <ProcessSteps>
              <StepsList>
                <li>Use the <strong>"Delete My Account"</strong> button in the Arthomed app (located in User Profile → Account → Delete My Account), or</li>
                <li>Send an email to: <ContactLink href="mailto:queries@arthomed.in">queries@arthomed.in</ContactLink> with subject line "Account Deletion Request"</li>
                <li>Include your <strong>registered mobile number</strong> or <strong>email address</strong> used for login verification</li>
                <li>Clearly state: <strong>"I request permanent deletion of my account and all associated data"</strong></li>
                <li>You will receive a confirmation email within <strong>48 hours</strong> acknowledging your request</li>
              </StepsList>
            </ProcessSteps>

            <SectionHeading>What Data Will Be Affected</SectionHeading>
            <DataSection variants={itemVariants}>
              <DataCard variant="delete">
                <h3>🗑️ Data That Will Be Permanently Deleted:</h3>
                <BulletList>
                  <li>Personal information (name, email, phone number, address)</li>
                  <li>All appointment records and scheduling history</li>
                  <li>Medical documents, reports, and treatment records</li>
                  <li>Clinical notes and doctor communications</li>
                  <li>User preferences and app settings</li>
                  <li>Chat history and in-app messages</li>
                  <li>Photo uploads and document attachments</li>
                  <li>Payment history and billing information</li>
                </BulletList>
              </DataCard>

              <DataCard variant="retain">
                <h3>📊 Data That May Be Retained:</h3>
                <BulletList>
                  <li>Anonymized analytics data (no personal identifiers)</li>
                  <li>Aggregated usage statistics for app improvement</li>
                  <li>Financial records required for legal/tax compliance</li>
                  <li>Security logs (anonymized) for fraud prevention</li>
                  <li>Data required by applicable laws and regulations</li>
                </BulletList>
              </DataCard>
            </DataSection>

            <SectionHeading>Processing Timeline</SectionHeading>
            <HighlightBox>
              <p>Your deletion request will be processed within <strong>90 days</strong> of verification. You will receive email confirmation once your account and data have been permanently deleted.</p>
            </HighlightBox>

            <SectionHeading>Important Considerations</SectionHeading>
            <ImportantNote>
              <h4>Before You Delete Your Account:</h4>
              <ul>
                <li><strong>Permanent Action:</strong> Account deletion cannot be undone or reversed</li>
                <li><strong>Data Loss:</strong> All medical records, appointments, and documents will be lost</li>
                <li><strong>Active Services:</strong> Any ongoing treatments or subscriptions will be cancelled</li>
                <li><strong>Re-registration:</strong> You'll need to create a new account to use Arthomed again</li>
                <li><strong>Export Data:</strong> Consider downloading important records before deletion</li>
              </ul>
            </ImportantNote>

            <SectionHeading>Contact Support</SectionHeading>
            <ContactSection>
              <h3>Need Help? Our Support Team is Here</h3>
              <div className="contact-grid">
                <div className="contact-item">
                  <div className="contact-label">Email Support</div>
                  <div className="contact-value">
                    <ContactLink href="mailto:queries@arthomed.in">queries@arthomed.in</ContactLink>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-label">Phone Support</div>
                  <div className="contact-value">+91 99027 58444</div>
                </div>
                <div className="contact-item">
                  <div className="contact-label">Support Hours</div>
                  <div className="contact-value">Mon-Fri, 9AM-6PM IST</div>
                </div>
                <div className="contact-item">
                  <div className="contact-label">Response Time</div>
                  <div className="contact-value">Within 48 Hours</div>
                </div>
              </div>
            </ContactSection>

            <Note>
              <strong>Legal Compliance:</strong> This account deletion process is provided by <strong>Nitinkumar Karoshi / Arthomed (Formonex Solutions Pvt Ltd)</strong> in compliance with Google Play Store policies, GDPR, and other applicable data protection regulations.
            </Note>
          </ContentCard>
        </motion.div>
      </Container>
    </AccountDeletionContainer>
  );
};

export default AccountDeletion;
