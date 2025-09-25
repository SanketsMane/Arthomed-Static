import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQContainer = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #ffffff 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 20%;
    right: -5%;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(102, 126, 234, 0.05) 0%, transparent 70%);
    border-radius: 50%;
    animation: pulse 15s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.5; }
    50% { transform: scale(1.2) rotate(180deg); opacity: 0.8; }
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const MainTitle = styled(motion.h2)`
  font-size: 48px;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 18px;
  color: #718096;
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.6;
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FAQItem = styled(motion.div)`
  background: white;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.02), rgba(118, 75, 162, 0.02));
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    box-shadow: 0 12px 40px rgba(102, 126, 234, 0.08);
    transform: translateY(-2px);
    border-color: rgba(102, 126, 234, 0.2);
    
    &::before {
      opacity: 1;
    }
  }
`;

const FAQHeader = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 24px;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  color: #2d3748;
  transition: all 0.3s ease;

  &:hover {
    background: #f8fafc;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 20px;
  }
`;

const FAQIcon = styled.div`
  color: #667eea;
  font-size: 16px;
  transition: transform 0.3s ease;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

const FAQContent = styled(motion.div)`
  padding: 0 24px 24px;
  color: #718096;
  font-size: 16px;
  line-height: 1.6;

  @media (max-width: 768px) {
    padding: 0 20px 20px;
    font-size: 15px;
  }
`;

const ViewAllLink = styled(motion.div)`
  text-align: center;
  margin-top: 40px;
`;

const ViewAllButton = styled.button`
  background: none;
  border: none;
  color: #667eea;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: all 0.3s ease;

  &:hover {
    color: #5a67d8;
  }
`;

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const faqData = [
    {
      question: "Is Arthomed HIPAA compliant and secure?",
      answer: "Yes, Arthomed is fully HIPAA compliant with end-to-end encryption, secure data transfer, and robust access controls. All patient data is protected with enterprise-grade security measures and regular security audits."
    },
    {
      question: "How does Arthomed integrate with existing hospital systems?",
      answer: "Arthomed offers seamless integration with popular HIS/EMR systems through APIs. Our technical team provides complete support for data migration and system integration to ensure minimal disruption to your operations."
    },
    {
      question: "What kind of training and support do you provide?",
      answer: "We provide comprehensive training for all user roles (administrators, doctors, receptionists, patients), 24/7 technical support, user manuals, video tutorials, and ongoing assistance to ensure smooth adoption."
    },
    {
      question: "Can Arthomed handle multiple hospital locations?",
      answer: "Absolutely! Arthomed supports multi-location hospital management with centralized administration, role-based access controls, and location-specific reporting while maintaining unified patient records."
    },
    {
      question: "What are the system requirements for deployment?",
      answer: "Arthomed can be deployed on-premise or in the cloud. For web access, it supports Chrome and Edge browsers. The mobile app is available for Android devices. We provide detailed technical requirements during consultation."
    },
    {
      question: "How long does implementation typically take?",
      answer: "Implementation timeline varies by hospital size and complexity. Typically, it takes 2-4 weeks for setup, data migration, staff training, and go-live. We work closely with your team to ensure a smooth transition."
    }
  ];

  return (
    <FAQContainer id="faq">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
        >
          <SectionHeader>
            <MainTitle variants={itemVariants}>
              Frequently Asked Questions
            </MainTitle>
            <Subtitle variants={itemVariants}>
              Common questions about implementing Arthomed in your hospital
            </Subtitle>
          </SectionHeader>

          <FAQList>
            {faqData.map((faq, index) => (
              <FAQItem key={index} variants={itemVariants}>
                <FAQHeader onClick={() => toggleItem(index)}>
                  <span>{faq.question}</span>
                  <FAQIcon isOpen={openItems.has(index)}>
                    {openItems.has(index) ? <FaChevronUp /> : <FaChevronDown />}
                  </FAQIcon>
                </FAQHeader>
                
                <AnimatePresence>
                  {openItems.has(index) && (
                    <FAQContent
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </FAQContent>
                  )}
                </AnimatePresence>
              </FAQItem>
            ))}
          </FAQList>

          <ViewAllLink variants={itemVariants}>
            <ViewAllButton>View All FAQs</ViewAllButton>
          </ViewAllLink>
        </motion.div>
      </Container>
    </FAQContainer>
  );
};

export default FAQ;