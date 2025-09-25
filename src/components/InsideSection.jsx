import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const InsideContainer = styled.section`
  padding: 120px 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
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
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const PhonesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    gap: 40px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const PhoneWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &:nth-child(1) {
    transform: rotate(2deg);
  }
  
  &:nth-child(2) {
    transform: rotate(-1deg);
  }
  
  &:nth-child(3) {
    transform: rotate(1deg);
  }
  
  @media (max-width: 768px) {
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
      transform: rotate(0deg);
    }
  }
`;

const PhoneLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #718096;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const PhoneMockup = styled.div`
  width: 280px;
  height: 560px;
  background: linear-gradient(145deg, #2d3748 0%, #1a202c 100%);
  border-radius: 42px;
  padding: 8px;
  box-shadow: 
    0 0 0 3px #4a5568,
    0 25px 50px rgba(0, 0, 0, 0.35),
    0 12px 25px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;

  /* Camera notch */
  &::before {
    content: '';
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 24px;
    background: #1a202c;
    border-radius: 12px;
    z-index: 2;
  }

  /* Speaker */
  &::after {
    content: '';
    position: absolute;
    top: 18px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: #4a5568;
    border-radius: 2px;
    z-index: 3;
  }

  @media (max-width: 768px) {
    width: 240px;
    height: 480px;
    border-radius: 36px;
    
    &::before {
      width: 100px;
      height: 20px;
      border-radius: 10px;
    }
    
    &::after {
      width: 50px;
      height: 3px;
    }
  }
`;

const PhoneScreen = styled.div`
  width: 100%;
  height: 100%;
  background: #000000;
  border-radius: 36px;
  overflow: hidden;
  position: relative;
  
  @media (max-width: 768px) {
    border-radius: 30px;
  }
`;

const ScreenImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 36px;
  
  @media (max-width: 768px) {
    border-radius: 30px;
  }
`;

const InsideSection = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <InsideContainer id="inside">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
        >
          <SectionHeader>
            <MainTitle variants={itemVariants}>
              Take a Look Inside Arthomed
            </MainTitle>
            <Subtitle variants={itemVariants}>
              Experience the comprehensive healthcare management platform designed 
              specifically for orthopedic hospitals and their patients.
            </Subtitle>
          </SectionHeader>

          <PhonesGrid>
            {/* Login Screen */}
            <PhoneWrapper variants={itemVariants}>
              <PhoneLabel>Patient Login</PhoneLabel>
              <PhoneMockup>
                <PhoneScreen>
                  <ScreenImage 
                    src="/Screenshot_2025-08-10-13-17-51-117_com.arthomed.jpg" 
                    alt="Arthomed Login Screen"
                  />
                </PhoneScreen>
              </PhoneMockup>
            </PhoneWrapper>

            {/* Appointment Management */}
            <PhoneWrapper variants={itemVariants}>
              <PhoneLabel>Appointment Management</PhoneLabel>
              <PhoneMockup>
                <PhoneScreen>
                  <ScreenImage 
                    src="/Screenshot_2025-08-10-13-21-34-676_com.arthomed.jpg" 
                    alt="Arthomed Appointment Management"
                  />
                </PhoneScreen>
              </PhoneMockup>
            </PhoneWrapper>

            {/* Medical Records */}
            <PhoneWrapper variants={itemVariants}>
              <PhoneLabel>Medical Records</PhoneLabel>
              <PhoneMockup>
                <PhoneScreen>
                  <ScreenImage 
                    src="/Screenshot_2025-08-10-13-21-53-549_com.arthomed.jpg" 
                    alt="Arthomed Medical Records"
                  />
                </PhoneScreen>
              </PhoneMockup>
            </PhoneWrapper>
          </PhonesGrid>
        </motion.div>
      </Container>
    </InsideContainer>
  );
};

export default InsideSection;