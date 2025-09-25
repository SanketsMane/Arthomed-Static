import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TestimonialsContainer = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
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
  max-width: 560px;
  margin: 0 auto 60px;
  line-height: 1.6;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-bottom: 80px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const TestimonialCard = styled(motion.div)`
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid #f1f5f9;
  position: relative;
  display: flex;
  align-items: center;
  gap: 24px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
    border-color: #e2e8f0;
  }
  
  @media (max-width: 768px) {
    padding: 30px;
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }
`;

const TestimonialAvatar = styled.div`
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #f8fafc;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const TestimonialContent = styled.div`
  flex: 1;
`;

const TestimonialAuthor = styled.div`
  margin-bottom: 16px;
`;

const AuthorName = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 4px 0;
`;

const UserRole = styled.p`
  font-size: 14px;
  color: #718096;
  margin: 0;
`;

const TestimonialText = styled.p`
  font-size: 16px;
  color: #4a5568;
  line-height: 1.7;
  margin: 0;
  font-style: italic;
`;

const MobileShowcaseSection = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  margin: 80px 0;
  padding: 80px 0;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }
`;

const MobileShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const ShowcaseContent = styled.div`
  max-width: 500px;
`;

const ShowcaseTitle = styled.h3`
  font-size: 36px;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const ShowcaseDescription = styled.p`
  font-size: 18px;
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 40px;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  padding: 12px 0;
  font-size: 16px;
  color: #4a5568;
  position: relative;
  padding-left: 24px;
  
  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #3b82f6;
    font-weight: bold;
  }
`;

const PhoneMockupFrame = styled(motion.div)`
  width: 300px;
  height: 600px;
  background: linear-gradient(145deg, #1e293b, #0f172a);
  border-radius: 40px;
  padding: 20px;
  margin: 0 auto;
  position: relative;
  box-shadow: 0 25px 60px rgba(15, 23, 42, 0.4);
  
  @media (max-width: 768px) {
    width: 250px;
    height: 500px;
    padding: 15px;
  }
`;

const PhoneScreenFrame = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  border-radius: 25px;
  overflow: hidden;
  position: relative;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  
  &.active {
    opacity: 1;
  }
`;

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Chief Orthopedic Surgeon, Apollo Hospital",
      text: "Arthomed has revolutionized how we manage patient care. The integrated system allows us to track patient progress seamlessly from admission to discharge.",
      avatar: "/api/placeholder/80/80",
    },
    {
      name: "Sarah Mitchell",
      role: "Hospital Administrator, City General",
      text: "The efficiency gains are remarkable. We've reduced administrative overhead by 40% while improving patient satisfaction scores significantly.",
      avatar: "/api/placeholder/80/80",
    },
    {
      name: "Dr. Michael Chen",
      role: "Emergency Department Director",
      text: "Real-time patient data access has been game-changing for emergency situations. Critical decisions are made faster with better patient outcomes.",
      avatar: "/api/placeholder/80/80",
    },
    {
      name: "Lisa Rodriguez",
      role: "Nursing Supervisor, Memorial Healthcare",
      text: "The mobile app keeps our entire team connected. Communication between departments has never been smoother, and patient care coordination is seamless.",
      avatar: "/api/placeholder/80/80",
    },
  ];

  const appScreenshots = [
    "/build/Screenshot_2025-08-10-13-17-51-117_com.arthomed.jpg",
    "/build/Screenshot_2025-08-10-13-18-07-937_com.arthomed.jpg",
    "/build/Screenshot_2025-08-10-13-19-32-797_com.arthomed.jpg",
    "/build/Screenshot_2025-08-10-13-19-45-092_com.arthomed.jpg",
    "/build/Screenshot_2025-08-10-13-20-25-092_com.arthomed.jpg",
    "/build/Screenshot_2025-08-10-13-20-33-237_com.arthomed.jpg",
    "/build/Screenshot_2025-08-10-13-20-36-860_com.arthomed.jpg",
    "/build/Screenshot_2025-08-10-13-20-43-860_com.arthomed.jpg",
    "/build/Screenshot_2025-08-10-13-20-57-625_com.arthomed.jpg",
    "/build/Screenshot_2025-08-10-13-21-16-999_com.arthomed.jpg",
    "/build/Screenshot_2025-08-10-13-21-23-897_com.arthomed.jpg",
    "/build/Screenshot_2025-08-10-13-21-30-476_com.arthomed.jpg",
    "/build/Screenshot_2025-08-10-13-21-34-676_com.arthomed.jpg",
    "/build/Screenshot_2025-08-10-13-21-43-969_com.arthomed.jpg",
    "/build/Screenshot_2025-08-10-13-21-53-549_com.arthomed.jpg",
    "/build/Screenshot_2025-08-10-13-22-08-479_com.arthomed.jpg",
    "/build/Screenshot_2025-08-10-13-26-48-529_com.arthomed.jpg",
    "/build/Screenshot_2025-08-10-13-27-04-392_com.arthomed.jpg",
    "/build/Screenshot_2025-08-10-13-27-08-193_com.arthomed.jpg",
    "/build/Screenshot_2025-08-10-13-27-15-569_com.arthomed.jpg",
    "/build/Screenshot_2025-08-10-13-28-00-492_com.arthomed.jpg",
    "/build/Screenshot_2025-08-10-13-28-33-277_com.arthomed.jpg",
    "/build/Screenshot_2025-08-10-13-28-36-619_com.arthomed.jpg",
    "/build/Screenshot_2025-08-10-13-28-51-972_com.arthomed.jpg",
    "/build/Screenshot_2025-08-10-13-29-02-267_com.arthomed.jpg",
    "/build/Screenshot_2025-08-10-13-29-07-963_com.arthomed.jpg",
    "/build/Screenshot_2025-08-10-13-29-20-511_com.arthomed.jpg",
    "/build/Screenshot_2025-08-10-13-29-41-624_com.arthomed.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % appScreenshots.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [appScreenshots.length]);

  return (
    <TestimonialsContainer>
      <Container>
        <SectionHeader>
          <MainTitle
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What Healthcare Professionals Say
          </MainTitle>
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Trusted by thousands of healthcare professionals worldwide for streamlined patient management
          </Subtitle>
        </SectionHeader>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <TestimonialsGrid>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <TestimonialAvatar>
                  <img src={testimonial.avatar} alt={testimonial.name} loading="lazy" />
                </TestimonialAvatar>
                <TestimonialContent>
                  <TestimonialAuthor>
                    <AuthorName>{testimonial.name}</AuthorName>
                    <UserRole>{testimonial.role}</UserRole>
                  </TestimonialAuthor>
                  <TestimonialText>"{testimonial.text}"</TestimonialText>
                </TestimonialContent>
              </TestimonialCard>
            ))}
          </TestimonialsGrid>

          <MobileShowcaseSection
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <MobileShowcaseGrid>
              <ShowcaseContent>
                <ShowcaseTitle>Experience Arthomed on Mobile</ShowcaseTitle>
                <ShowcaseDescription>
                  Our mobile app brings powerful healthcare management tools directly to your fingertips. 
                  Access patient data, manage appointments, and coordinate care from anywhere.
                </ShowcaseDescription>
                <FeaturesList>
                  <FeatureItem>Real-time patient monitoring</FeatureItem>
                  <FeatureItem>Secure messaging with team members</FeatureItem>
                  <FeatureItem>Appointment scheduling and management</FeatureItem>
                  <FeatureItem>Digital prescription management</FeatureItem>
                </FeaturesList>
              </ShowcaseContent>
              
              <PhoneMockupFrame
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <PhoneScreenFrame>
                  {appScreenshots.map((screenshot, index) => (
                    <SlideImage 
                      key={index}
                      src={screenshot}
                      alt={`Arthomed App Screenshot ${index + 1}`}
                      className={index === currentSlide ? 'active' : ''}
                      loading="lazy"
                    />
                  ))}
                </PhoneScreenFrame>
              </PhoneMockupFrame>
            </MobileShowcaseGrid>
          </MobileShowcaseSection>
        </motion.div>
      </Container>
    </TestimonialsContainer>
  );
};

export default Testimonials;