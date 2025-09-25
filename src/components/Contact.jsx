import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Title = styled(motion.h2)`
  font-size: 48px;
  font-weight: 700;
  color: #1a202c;
  text-align: center;
  margin-bottom: 16px;
`;

const Subtitle = styled(motion.p)`
  font-size: 18px;
  color: #4a5568;
  text-align: center;
  margin-bottom: 80px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const ContactInfo = styled.div``;

const InfoCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
`;

const InfoTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const InfoIcon = styled.span`
  font-size: 24px;
`;

const InfoText = styled.p`
  font-size: 16px;
  color: #4a5568;
  line-height: 1.6;
  margin: 0;
`;

const ContactForm = styled(motion.form)`
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
`;

const FormGroup = styled.div`
  margin-bottom: 24px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 16px;
  color: #2d3748;
  background: #ffffff;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: #a0aec0;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 16px;
  color: #2d3748;
  background: #ffffff;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: #a0aec0;
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 16px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <ContactContainer id="contact">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
        >
          <Title variants={itemVariants}>
            Get in Touch
          </Title>
          <Subtitle variants={itemVariants}>
            Ready to transform your healthcare operations? Contact us to schedule 
            a demo or learn more about Arthomed's solutions.
          </Subtitle>

          <ContentGrid>
            <ContactInfo>
              <InfoCard variants={itemVariants}>
                <InfoTitle>
                  <InfoIcon>📧</InfoIcon>
                  Email Us
                </InfoTitle>
                <InfoText>
                  appointments@arthomed.in<br />
                  queries@arthomed.in
                </InfoText>
              </InfoCard>

              <InfoCard variants={itemVariants}>
                <InfoTitle>
                  <InfoIcon>📞</InfoIcon>
                  Call Us
                </InfoTitle>
                <InfoText>
                  Indiranagar: +91 99027 58444
                </InfoText>
              </InfoCard>

              <InfoCard variants={itemVariants}>
                <InfoTitle>
                  <InfoIcon>🏢</InfoIcon>
                  Visit Us
                </InfoTitle>
                <InfoText>
                  Indiranagar, Bengaluru<br />
                  Karnataka, India
                </InfoText>
              </InfoCard>

              <InfoCard variants={itemVariants}>
                <InfoTitle>
                  <InfoIcon>⏰</InfoIcon>
                  Business Hours
                </InfoTitle>
                <InfoText>
                  Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                  24/7 Emergency Support Available
                </InfoText>
              </InfoCard>
            </ContactInfo>

            <ContactForm variants={itemVariants} onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="company">Hospital/Company</Label>
                <Input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your hospital or company name"
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Message *</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements or questions..."
                  required
                />
              </FormGroup>

              <SubmitButton
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </SubmitButton>
            </ContactForm>
          </ContentGrid>
        </motion.div>
      </Container>
    </ContactContainer>
  );
};

export default Contact;