import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCheck, FaShield, FaCloud, FaUsers, FaChartLine } from 'react-icons/fa';

const PricingContainer = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const Title = styled(motion.h2)`
  font-size: 48px;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 18px;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 80px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto 80px auto;
  }
`;

const PricingCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 40px 32px;
  position: relative;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  
  &.popular {
    border-color: #667eea;
    transform: scale(1.05);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.15);
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    
    &.popular {
      transform: scale(1.05) translateY(-8px);
    }
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 8px 24px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const PlanIcon = styled.div`
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  margin-bottom: 24px;
`;

const PlanName = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 8px;
`;

const PlanDescription = styled.p`
  font-size: 14px;
  color: #718096;
  margin-bottom: 24px;
  line-height: 1.5;
`;

const PriceSection = styled.div`
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e2e8f0;
`;

const Price = styled.div`
  font-size: 36px;
  font-weight: 800;
  color: #1a202c;
  margin-bottom: 4px;
  
  .currency {
    font-size: 20px;
    vertical-align: top;
  }
  
  .period {
    font-size: 16px;
    font-weight: 500;
    color: #718096;
  }
`;

const CustomText = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #667eea;
  margin-bottom: 4px;
`;

const BillingInfo = styled.p`
  font-size: 14px;
  color: #718096;
  margin: 0;
`;

const FeaturesList = styled.ul`
  list-style: none;
  margin: 0 0 32px 0;
  padding: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 14px;
  color: #4a5568;
  line-height: 1.4;
`;

const CheckIcon = styled.div`
  width: 20px;
  height: 20px;
  background: #48bb78;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 10px;
  flex-shrink: 0;
  margin-top: 2px;
`;

const ActionButton = styled(motion.button)`
  width: 100%;
  padding: 16px 24px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
    }
  }
  
  &.secondary {
    background: white;
    color: #667eea;
    border: 2px solid #667eea;
    
    &:hover {
      background: #667eea;
      color: white;
      transform: translateY(-2px);
    }
  }
`;

const EnterpriseSection = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 60px 40px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
`;

const EnterpriseTitle = styled.h3`
  font-size: 32px;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 16px;
`;

const EnterpriseDescription = styled.p`
  font-size: 18px;
  color: #4a5568;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const EnterpriseFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 40px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EnterpriseFeature = styled.div`
  text-align: center;
`;

const EnterpriseFeatureIcon = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  margin: 0 auto 16px auto;
`;

const EnterpriseFeatureTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 8px;
`;

const EnterpriseFeatureText = styled.p`
  font-size: 14px;
  color: #718096;
  line-height: 1.4;
  margin: 0;
`;

const Pricing = () => {
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

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small clinics and medical practices",
      price: "$299",
      period: "/month",
      icon: <FaUsers />,
      features: [
        "Up to 5 healthcare providers",
        "Basic patient management",
        "Appointment scheduling",
        "Standard reporting",
        "Email support",
        "Mobile app access"
      ],
      buttonText: "Start Free Trial",
      buttonType: "secondary"
    },
    {
      name: "Professional",
      description: "Ideal for medium-sized hospitals and medical centers",
      price: "$799",
      period: "/month",
      icon: <FaChartLine />,
      popular: true,
      features: [
        "Unlimited healthcare providers",
        "Advanced patient records (EHR)",
        "Multi-department management", 
        "Custom integrations",
        "Advanced analytics & reporting",
        "Priority phone & email support",
        "HIPAA compliance tools",
        "Cloud & on-premise options"
      ],
      buttonText: "Get Started",
      buttonType: "primary"
    },
    {
      name: "Enterprise",
      description: "For large hospital networks and healthcare systems",
      price: "Custom",
      period: "pricing",
      icon: <FaShield />,
      features: [
        "Multi-location management",
        "Advanced security & compliance",
        "Custom workflow automation",
        "API access & integrations",
        "Dedicated account manager",
        "24/7 premium support",
        "Custom training programs",
        "White-label options"
      ],
      buttonText: "Contact Sales",
      buttonType: "secondary"
    }
  ];

  const enterpriseFeatures = [
    {
      icon: <FaShield />,
      title: "Security First",
      description: "Enterprise-grade security with HIPAA compliance and data encryption"
    },
    {
      icon: <FaCloud />,
      title: "Scalable Infrastructure",
      description: "Cloud-native architecture that grows with your organization"
    },
    {
      icon: <FaUsers />,
      title: "Unlimited Users",
      description: "No limits on healthcare providers, staff, or patient records"
    },
    {
      icon: <FaChartLine />,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and business intelligence tools"
    }
  ];

  return (
    <PricingContainer id="pricing">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
        >
          <Header>
            <Title variants={itemVariants}>
              Choose Your Healthcare Solution
            </Title>
            <Subtitle variants={itemVariants}>
              Flexible pricing plans designed to meet the needs of healthcare organizations 
              of all sizes, from small clinics to large hospital networks.
            </Subtitle>
          </Header>

          <PricingGrid>
            {plans.map((plan, index) => (
              <PricingCard 
                key={index} 
                variants={itemVariants}
                className={plan.popular ? 'popular' : ''}
              >
                {plan.popular && <PopularBadge>Most Popular</PopularBadge>}
                
                <PlanIcon>{plan.icon}</PlanIcon>
                <PlanName>{plan.name}</PlanName>
                <PlanDescription>{plan.description}</PlanDescription>
                
                <PriceSection>
                  {plan.price === "Custom" ? (
                    <CustomText>Custom Pricing</CustomText>
                  ) : (
                    <Price>
                      <span className="currency">$</span>
                      {plan.price.replace('$', '')}
                      <span className="period">{plan.period}</span>
                    </Price>
                  )}
                  <BillingInfo>
                    {plan.price === "Custom" 
                      ? "Based on your specific requirements" 
                      : "Billed annually, 30-day free trial"}
                  </BillingInfo>
                </PriceSection>

                <FeaturesList>
                  {plan.features.map((feature, featureIndex) => (
                    <FeatureItem key={featureIndex}>
                      <CheckIcon>
                        <FaCheck />
                      </CheckIcon>
                      {feature}
                    </FeatureItem>
                  ))}
                </FeaturesList>

                <ActionButton
                  className={plan.buttonType}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.buttonText}
                </ActionButton>
              </PricingCard>
            ))}
          </PricingGrid>

          <EnterpriseSection variants={itemVariants}>
            <EnterpriseTitle>Why Choose Arthomed Enterprise?</EnterpriseTitle>
            <EnterpriseDescription>
              Our enterprise solution is built specifically for large healthcare organizations 
              that need maximum scalability, security, and customization options.
            </EnterpriseDescription>
            
            <EnterpriseFeatures>
              {enterpriseFeatures.map((feature, index) => (
                <EnterpriseFeature key={index}>
                  <EnterpriseFeatureIcon>
                    {feature.icon}
                  </EnterpriseFeatureIcon>
                  <EnterpriseFeatureTitle>{feature.title}</EnterpriseFeatureTitle>
                  <EnterpriseFeatureText>{feature.description}</EnterpriseFeatureText>
                </EnterpriseFeature>
              ))}
            </EnterpriseFeatures>

            <ActionButton
              className="primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ maxWidth: '300px', margin: '0 auto' }}
            >
              Schedule Enterprise Demo
            </ActionButton>
          </EnterpriseSection>
        </motion.div>
      </Container>
    </PricingContainer>
  );
};

export default Pricing;