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

const TermsConditions = () => {
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

        <Title>Terms & Conditions</Title>
        <LastUpdated>Last updated: September 25, 2025</LastUpdated>

        <Content>
          <Section>
            <SectionTitle>Agreement to Terms</SectionTitle>
            <Paragraph>
              By accessing and using Arthomed's healthcare management platform and mobile application, 
              you agree to be bound by these Terms & Conditions and all applicable laws and regulations.
            </Paragraph>
            <ImportantNote>
              <ImportantText>
                <strong>Medical Disclaimer:</strong> This platform is designed to assist healthcare 
                professionals and is not intended to replace professional medical judgment or direct 
                patient care.
              </ImportantText>
            </ImportantNote>
          </Section>

          <Section>
            <SectionTitle>Use License</SectionTitle>
            <Paragraph>
              Permission is granted to temporarily access and use Arthomed for personal and 
              professional healthcare management purposes.
            </Paragraph>
            
            <SubSectionTitle>You may not:</SubSectionTitle>
            <List>
              <ListItem>Modify or copy the platform materials</ListItem>
              <ListItem>Use materials for unauthorized commercial purposes</ListItem>
              <ListItem>Remove copyright or proprietary notations</ListItem>
              <ListItem>Transfer materials to unauthorized parties</ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>User Responsibilities</SectionTitle>
            <List>
              <ListItem>Maintain confidentiality of account credentials</ListItem>
              <ListItem>Use platform in compliance with healthcare regulations</ListItem>
              <ListItem>Ensure accuracy of entered information</ListItem>
              <ListItem>Report security breaches immediately</ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>Healthcare Compliance</SectionTitle>
            <Paragraph>
              Users must ensure compliance with applicable healthcare regulations including 
              HIPAA, state medical practice laws, and institutional policies.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>Data and Privacy</SectionTitle>
            <Paragraph>
              Personal and health information handling is governed by our Privacy Policy, 
              which is incorporated into these terms by reference.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>Service Availability</SectionTitle>
            <Paragraph>
              We strive for high availability but cannot guarantee uninterrupted access. 
              Maintenance may temporarily limit platform availability.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>Limitation of Liability</SectionTitle>
            <Paragraph>
              Arthomed shall not be liable for damages arising from platform use. 
              Healthcare professionals remain fully responsible for clinical decisions.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>Modifications</SectionTitle>
            <Paragraph>
              Arthomed may revise these terms at any time. Continued use constitutes 
              acceptance of updated terms.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>Governing Law</SectionTitle>
            <Paragraph>
              These terms are governed by the laws of India and subject to the 
              jurisdiction of Karnataka courts.
            </Paragraph>
          </Section>

          <ContactSection>
            <ContactTitle>Contact Information</ContactTitle>
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

export default TermsConditions;
