import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 10%;
    right: -10%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(102, 126, 234, 0.04) 0%, transparent 70%);
    border-radius: 50%;
    animation: slowFloat 20s ease-in-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 20%;
    left: -5%;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(118, 75, 162, 0.03) 0%, transparent 70%);
    border-radius: 50%;
    animation: slowFloat 25s ease-in-out infinite reverse;
  }
  
  @keyframes slowFloat {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(20px, -30px) rotate(180deg); }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const TextContent = styled.div``;

const MainTitle = styled(motion.h2)`
  font-size: 48px;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 24px;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Description = styled(motion.p)`
  font-size: 18px;
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 32px;
`;

const MissionStatement = styled(motion.div)`
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-left: 4px solid #667eea;
  padding: 30px;
  border-radius: 12px;
  margin-bottom: 40px;
`;

const MissionText = styled.p`
  font-size: 16px;
  color: #2d3748;
  line-height: 1.6;
  margin: 0;
  font-style: italic;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ValueItem = styled(motion.div)`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
`;

const ValueTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 8px;
`;

const ValueDescription = styled.p`
  font-size: 14px;
  color: #718096;
  line-height: 1.5;
  margin: 0;
`;

const StatsSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 32px 24px;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  border: 1px solid #e2e8f0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: 0 20px 50px rgba(102, 126, 234, 0.15);
    
    &::before {
      opacity: 1;
    }
  }
`;

const StatNumber = styled.h3`
  font-size: 36px;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
`;

const StatLabel = styled.p`
  font-size: 14px;
  color: #718096;
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const VisualElement = styled(motion.div)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 24px;
  padding: 40px;
  color: white;
  text-align: center;
  box-shadow: 0 20px 50px rgba(102, 126, 234, 0.3);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    animation: rotate 20s linear infinite;
  }
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const VisualIcon = styled.div`
  font-size: 64px;
  margin-bottom: 16px;
  position: relative;
  z-index: 2;
`;

const VisualText = styled.h4`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  position: relative;
  z-index: 2;
`;

const About = () => {
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

  const values = [
    {
      title: "Innovation",
      description: "Continuously advancing healthcare technology for better patient outcomes."
    },
    {
      title: "Security",
      description: "Maintaining the highest standards of data protection and privacy."
    },
    {
      title: "Reliability",
      description: "Providing dependable solutions that hospitals can trust 24/7."
    },
    {
      title: "Support",
      description: "Offering comprehensive training and ongoing technical assistance."
    }
  ];

  return (
    <AboutContainer id="about">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
        >
          <ContentGrid>
            <TextContent>
              <MainTitle variants={itemVariants}>
                Transforming Healthcare<br />
                Through Technology
              </MainTitle>
              
              <Description variants={itemVariants}>
                Arthomed was founded with a vision to revolutionize orthopedic healthcare 
                management. We understand the unique challenges faced by hospitals and have 
                developed a comprehensive solution that streamlines operations while 
                improving patient care.
              </Description>

              <MissionStatement variants={itemVariants}>
                <MissionText>
                  "Our mission is to empower healthcare professionals with innovative 
                  technology solutions that enhance patient care, improve operational 
                  efficiency, and drive better health outcomes."
                </MissionText>
              </MissionStatement>

              <ValuesGrid>
                {values.map((value, index) => (
                  <ValueItem key={index} variants={itemVariants}>
                    <ValueTitle>{value.title}</ValueTitle>
                    <ValueDescription>{value.description}</ValueDescription>
                  </ValueItem>
                ))}
              </ValuesGrid>
            </TextContent>

            <StatsSection variants={itemVariants}>
              <StatsGrid>
                <StatCard
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <StatNumber>500+</StatNumber>
                  <StatLabel>Hospitals Served</StatLabel>
                </StatCard>
                <StatCard
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <StatNumber>1M+</StatNumber>
                  <StatLabel>Patients Managed</StatLabel>
                </StatCard>
                <StatCard
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <StatNumber>99.9%</StatNumber>
                  <StatLabel>System Uptime</StatLabel>
                </StatCard>
                <StatCard
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <StatNumber>24/7</StatNumber>
                  <StatLabel>Support Available</StatLabel>
                </StatCard>
              </StatsGrid>
              
              <VisualElement
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <VisualIcon>🏥</VisualIcon>
                <VisualText>Transforming Healthcare Technology</VisualText>
              </VisualElement>
            </StatsSection>
          </ContentGrid>
        </motion.div>
      </Container>
    </AboutContainer>
  );
};

export default About;