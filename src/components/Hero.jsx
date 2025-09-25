import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #ffffff 100%);
  position: relative;
  overflow: hidden;
  padding-top: 70px;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 10%;
    left: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(102, 126, 234, 0.08) 0%, transparent 70%);
    border-radius: 50%;
    animation: float 20s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 10%;
    right: -10%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(118, 75, 162, 0.06) 0%, transparent 70%);
    border-radius: 50%;
    animation: float 25s ease-in-out infinite reverse;
  }

  @keyframes float {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(20px, -20px) rotate(90deg); }
    50% { transform: translate(-10px, -40px) rotate(180deg); }
    75% { transform: translate(-30px, -10px) rotate(270deg); }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
    padding: 40px 24px;
  }
`;

const TextContent = styled.div`
  z-index: 2;
`;

const MainHeading = styled(motion.h1)`
  font-size: 56px;
  font-weight: 700;
  line-height: 1.2;
  color: #1a202c;
  margin-bottom: 24px;
  
  @media (max-width: 1024px) {
    font-size: 44px;
  }
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 20px;
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 520px;
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin: 0 auto 40px;
  }
`;

const AppStoreBadge = styled(motion.a)`
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  img {
    height: 60px;
    width: auto;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    img {
      height: 50px;
    }
  }
`;

const BadgesContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 32px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const AvailabilityText = styled.p`
  font-size: 14px;
  color: #718096;
  margin-bottom: 24px;
  font-weight: 500;
`;

const PhoneMockupContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhoneMockup = styled(motion.div)`
  width: 320px;
  height: 640px;
  background: linear-gradient(145deg, #2d3748 0%, #1a202c 100%);
  border-radius: 42px;
  padding: 8px;
  position: relative;
  box-shadow: 
    0 0 0 3px #4a5568,
    0 25px 50px rgba(0, 0, 0, 0.25),
    0 12px 25px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transform: rotate(-3deg);

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
    width: 280px;
    height: 560px;
    transform: rotate(0deg);
    
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

const HabitCard = styled.div`
  background: #f8fafc;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const HabitIcon = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const HabitInfo = styled.div`
  flex: 1;
`;

const HabitName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 4px;
`;

const HabitProgress = styled.div`
  font-size: 12px;
  color: #718096;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
  margin-top: 8px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  width: ${props => props.width || '70%'};
  border-radius: 3px;
`;

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const phoneVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  return (
    <HeroContainer id="hero">


      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <TextContent>
            <MainHeading variants={itemVariants}>
              Transform Your<br />
              Orthopedic Practice<br />
              with Arthomed
            </MainHeading>
            
            <Subtitle variants={itemVariants}>
              The complete digital solution for orthopedic hospitals. Manage appointments, 
              patient records, treatments, and analytics all in one powerful mobile application.
            </Subtitle>

            <motion.div variants={itemVariants}>
              <AvailabilityText>Available for download:</AvailabilityText>
              <BadgesContainer>
                <AppStoreBadge
                  href="#"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Get it on Google Play"
                  />
                </AppStoreBadge>
                
                <AppStoreBadge
                  href="#"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                    alt="Download on the App Store"
                  />
                </AppStoreBadge>
              </BadgesContainer>
            </motion.div>
          </TextContent>
        </motion.div>

        <PhoneMockupContainer>
          <PhoneMockup
            variants={phoneVariants}
            initial="hidden"
            animate="visible"
          >
            <PhoneScreen>
              <ScreenImage 
                src="/Screenshot_2025-08-10-13-20-33-237_com.arthomed.jpg" 
                alt="Arthomed App Dashboard"
              />



              <HabitCard>
                <HabitIcon>�‍⚕️</HabitIcon>
                <HabitInfo>
                  <HabitName>Active Patients</HabitName>
                  <HabitProgress>8 IPD, 15 OPD</HabitProgress>
                  <ProgressBar>
                    <ProgressFill width="60%" />
                  </ProgressBar>
                </HabitInfo>
              </HabitCard>

              <HabitCard>
                <HabitIcon>📋</HabitIcon>
                <HabitInfo>
                  <HabitName>Pending Reports</HabitName>
                  <HabitProgress>5 lab results</HabitProgress>
                  <ProgressBar>
                    <ProgressFill width="40%" />
                  </ProgressBar>
                </HabitInfo>
              </HabitCard>
            </PhoneScreen>
          </PhoneMockup>
        </PhoneMockupContainer>
      </Container>
    </HeroContainer>
  );
};

export default Hero;