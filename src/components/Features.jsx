import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUserMd, FaCalendarAlt, FaChartLine, FaUsers } from 'react-icons/fa';

const FeaturesContainer = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%);
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
  font-size: 40px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 16px;
  letter-spacing: -0.5px;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 18px;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  position: relative;
  padding: 48px 32px;
  background: transparent;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 0;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, transparent 0%, #e2e8f0 20%, #e2e8f0 80%, transparent 100%);
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, #e2e8f0 20%, #e2e8f0 80%, transparent 100%);
  }

  &:nth-child(1)::before,
  &:nth-child(3)::after {
    display: none;
  }

  &:nth-child(2)::after,
  &:nth-child(4)::before {
    display: none;
  }

  @media (max-width: 768px) {
    &::before {
      display: none;
    }
    
    &::after {
      display: block;
      top: auto;
      bottom: 0;
      transform: none;
      width: 60%;
      left: 20%;
    }

    &:last-child::after {
      display: none;
    }
  }

  &:hover {
    background: rgba(248, 250, 252, 0.8);
    
    &::before,
    &::after {
      background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    }
  }
`;

const FeatureIconWrapper = styled.div`
  position: relative;
  display: inline-flex;
  margin-bottom: 32px;
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border: 1px solid #e2e8f0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  font-size: 28px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;

  ${FeatureCard}:hover & {
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    color: white;
    border-color: #3b82f6;
    transform: scale(1.1) rotate(5deg);
  }
`;

const FeatureIconBg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%);
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${FeatureCard}:hover & {
    background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
    transform: translate(-50%, -50%) scale(1.2);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 16px;
  transition: color 0.3s ease;

  ${FeatureCard}:hover & {
    color: #3b82f6;
  }
`;

const FeatureDescription = styled.p`
  font-size: 15px;
  color: #64748b;
  line-height: 1.6;
  max-width: 240px;
  margin: 0 auto;
  transition: color 0.3s ease;

  ${FeatureCard}:hover & {
    color: #475569;
  }
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.05) 0%, transparent 25%),
    radial-gradient(circle at 75% 75%, rgba(29, 78, 216, 0.05) 0%, transparent 25%);
  pointer-events: none;
`;

const Features = () => {
  const features = [
    {
      icon: <FaUserMd />,
      title: 'Doctor Management',
      description: 'Streamline healthcare professional workflows with comprehensive scheduling and patient management tools.',
    },
    {
      icon: <FaCalendarAlt />,
      title: 'Smart Scheduling',
      description: 'Intelligent appointment booking system that optimizes time slots and reduces scheduling conflicts.',
    },
    {
      icon: <FaChartLine />,
      title: 'Analytics Dashboard',
      description: 'Real-time insights and performance metrics to enhance operational efficiency and patient outcomes.',
    },
    {
      icon: <FaUsers />,
      title: 'Patient Portal',
      description: 'Secure patient communication platform enabling seamless interaction and health record access.',
    },
  ];

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
    <FeaturesContainer id="features">
      <BackgroundPattern />
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionHeader>
            <MainTitle variants={itemVariants}>
              Core Features for Everyone
            </MainTitle>
            <Subtitle variants={itemVariants}>
              Comprehensive healthcare management tools designed to enhance efficiency,
              improve patient care, and streamline clinical workflows.
            </Subtitle>
          </SectionHeader>

          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <FeatureIconWrapper>
                  <FeatureIconBg />
                  <FeatureIcon>
                    {feature.icon}
                  </FeatureIcon>
                </FeatureIconWrapper>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </motion.div>
      </Container>
    </FeaturesContainer>
  );
};

export default Features;