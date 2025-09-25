import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const ShowcaseContainer = styled.section`
  padding: 120px 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
`;

const ShowcaseLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 60px;
  align-items: center;
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const PhoneWrapper = styled(motion.div)`
  &.profile-phone {
    grid-column: 2;
    grid-row: 1;
    --rotate: 8deg;
  }
  
  &.orders-phone {
    grid-column: 1;
    grid-row: 2;
    --rotate: -5deg;
  }

  &.interests-phone {
    grid-column: 2;
    grid-row: 2;
    --rotate: 3deg;
  }
  
  &.cart-phone {
    grid-column: 4;
    grid-row: 2;
    --rotate: -8deg;
  }
  
  &.controller-phone {
    grid-column: 3;
    grid-row: 2;
    --rotate: 0deg;
  }

  @media (max-width: 1200px) {
    &.profile-phone {
      grid-column: 2;
      grid-row: 1;
    }
    
    &.orders-phone {
      grid-column: 1;
      grid-row: 2;
    }

    &.interests-phone {
      grid-column: 2;
      grid-row: 2;
    }
    
    &.cart-phone {
      grid-column: 3;
      grid-row: 2;
    }
    
    &.controller-phone {
      grid-column: 3;
      grid-row: 1;
    }
  }

  @media (max-width: 768px) {
    &.profile-phone {
      grid-column: 1;
      grid-row: 1;
    }
    
    &.orders-phone {
      grid-column: 2;
      grid-row: 1;
    }

    &.interests-phone {
      grid-column: 1;
      grid-row: 2;
    }
    
    &.cart-phone {
      grid-column: 2;
      grid-row: 2;
    }
    
    &.controller-phone {
      grid-column: 1;
      grid-row: 3;
    }
  }
`;

const PhoneContainer = styled.div`
  width: 280px;
  height: 560px;
  background: #1a1a1a;
  border-radius: 40px;
  padding: 20px;
  box-shadow: 
    0 0 0 8px rgba(255, 255, 255, 0.1),
    0 20px 60px rgba(0, 0, 0, 0.3),
    0 8px 20px rgba(0, 0, 0, 0.2);
  transform: rotate(var(--rotate, 0deg)) scale(0.9);

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(var(--rotate, 0deg)) scale(0.9); }
    33% { transform: translateY(-20px) rotate(calc(var(--rotate, 0deg) + 2deg)) scale(0.9); }
    66% { transform: translateY(10px) rotate(calc(var(--rotate, 0deg) - 1deg)) scale(0.9); }
  }

  animation: float 6s ease-in-out infinite;

  @media (max-width: 1024px) {
    width: 240px;
    height: 480px;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 400px;
  }
`;

const PhoneScreen = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 32px;
  overflow: hidden;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
`;

const AppHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  h4 {
    font-size: 20px;
    font-weight: 600;
    color: #2d3748;
    margin: 0;
  }
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #ff9a56, #ff6b35);
  border-radius: 50%;
`;

const ProfileAvatar = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #ff9a56, #ff6b35);
  border-radius: 50%;
  margin: 0 auto 16px;
`;

const SearchBar = styled.div`
  background: #f7fafc;
  border-radius: 20px;
  padding: 12px 16px;
  margin-bottom: 24px;
  font-size: 14px;
  color: #a0aec0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ItemList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #f7fafc;
  border-radius: 12px;
`;

const ItemImage = styled.div`
  width: 40px;
  height: 40px;
  background: ${props => props.color || 'linear-gradient(135deg, #4a5568, #2d3748)'};
  border-radius: 8px;
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const ItemName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 2px;
`;

const ItemSubtext = styled.div`
  font-size: 12px;
  color: #718096;
`;

const ItemPrice = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #ff6b35;
`;

const InterestCard = styled.div`
  padding: 16px;
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  color: white;
  background: ${props => props.bg};
`;

const ProductDetail = styled.div`
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProductImage = styled.div`
  width: 180px;
  height: 180px;
  background: linear-gradient(135deg, #f7fafc, #edf2f7);
  border-radius: 16px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 72px;
  
  &::after {
    content: '🎮';
    font-size: 72px;
  }
`;

const Button = styled.button`
  background: #ff6b35;
  color: white;
  border: none;
  padding: 16px 24px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  margin-top: auto;
  cursor: pointer;
`;

// Individual Phone Components
const ShoppingPhone = ({ type }) => {
  const renderContent = () => {
    switch (type) {
      case 'profile':
        return (
          <>
            <AppHeader>
              <h4>Profile</h4>
              <Avatar />
            </AppHeader>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <ProfileAvatar />
              <div style={{ fontSize: '18px', fontWeight: '600', color: '#2d3748', marginBottom: '4px' }}>
                Leslie Flores
              </div>
              <div style={{ fontSize: '14px', color: '#718096', lineHeight: '1.4' }}>
                Lorem ipsum dolor sit amet consectetur.
                Adipiscing elit sed do eiusmod tempor.
              </div>
            </div>
            <div>
              <div style={{ fontSize: '16px', fontWeight: '600', color: '#2d3748', marginBottom: '16px' }}>
                My Interests
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Music', 'Art', 'Travel', 'Food', 'Books', 'Sports'].map((interest, i) => (
                  <div key={i} style={{ 
                    background: '#f7fafc', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '16px',
                    padding: '6px 12px',
                    fontSize: '12px',
                    color: '#4a5568',
                    fontWeight: '500'
                  }}>
                    {interest}
                  </div>
                ))}
              </div>
            </div>
          </>
        );

      case 'orders':
        return (
          <>
            <AppHeader>
              <h4>Orders</h4>
              <Avatar />
            </AppHeader>
            <SearchBar>
              🔍 Search
            </SearchBar>
            <ItemList>
              <ListItem>
                <ItemImage color="linear-gradient(135deg, #667eea, #764ba2)" />
                <ItemInfo>
                  <ItemName>Gaming Controller</ItemName>
                  <ItemSubtext>Delivered</ItemSubtext>
                </ItemInfo>
                <ItemPrice>$59</ItemPrice>
              </ListItem>
              <ListItem>
                <ItemImage color="linear-gradient(135deg, #4facfe, #00f2fe)" />
                <ItemInfo>
                  <ItemName>Blue Shoes</ItemName>
                  <ItemSubtext>Processing</ItemSubtext>
                </ItemInfo>
                <ItemPrice>$89</ItemPrice>
              </ListItem>
              <ListItem>
                <ItemImage color="linear-gradient(135deg, #f093fb, #f5576c)" />
                <ItemInfo>
                  <ItemName>Headphones</ItemName>
                  <ItemSubtext>Shipped</ItemSubtext>
                </ItemInfo>
                <ItemPrice>$129</ItemPrice>
              </ListItem>
            </ItemList>
          </>
        );

      case 'interests':
        return (
          <>
            <AppHeader>
              <h4>My Interests</h4>
              <div style={{ fontSize: '12px', color: '#718096' }}>See more</div>
            </AppHeader>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
              <InterestCard bg="linear-gradient(135deg, #ff6b35, #ff9a56)">
                🎮 Gaming
              </InterestCard>
              <InterestCard bg="linear-gradient(135deg, #4facfe, #00f2fe)">
                👟 Shoes
              </InterestCard>
              <InterestCard bg="linear-gradient(135deg, #667eea, #764ba2)">
                ⚽ Sports
              </InterestCard>
              <InterestCard bg="linear-gradient(135deg, #f093fb, #f5576c)">
                🌟 Lifestyle
              </InterestCard>
            </div>
          </>
        );

      case 'cart':
        return (
          <>
            <AppHeader>
              <h4>Your Cart</h4>
              <Avatar />
            </AppHeader>
            <ItemList>
              <ListItem>
                <ItemImage color="linear-gradient(135deg, #667eea, #764ba2)" />
                <ItemInfo>
                  <ItemName>Gaming Controller</ItemName>
                  <ItemSubtext>Black Edition</ItemSubtext>
                </ItemInfo>
                <ItemPrice>$59</ItemPrice>
              </ListItem>
              <ListItem>
                <ItemImage color="linear-gradient(135deg, #4facfe, #00f2fe)" />
                <ItemInfo>
                  <ItemName>Blue Shoes</ItemName>
                  <ItemSubtext>Size 42</ItemSubtext>
                </ItemInfo>
                <ItemPrice>$89</ItemPrice>
              </ListItem>
            </ItemList>
            <div style={{ 
              marginTop: 'auto', 
              padding: '16px', 
              background: '#f7fafc', 
              borderRadius: '12px',
              textAlign: 'center',
              fontWeight: '600',
              color: '#2d3748',
              marginBottom: '16px'
            }}>
              Subtotal: $148
            </div>
            <Button>Checkout</Button>
          </>
        );

      case 'controller':
        return (
          <>
            <ProductDetail>
              <ProductImage />
              <div style={{ fontSize: '20px', fontWeight: '600', color: '#2d3748', marginBottom: '8px' }}>
                Gaming Controller
              </div>
              <div style={{ fontSize: '24px', fontWeight: '700', color: '#ff6b35', marginBottom: '16px' }}>
                $59.99
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#ffd700' }}>⭐</span>
                  ))}
                </div>
                <span style={{ fontSize: '14px', color: '#718096' }}>(4.8)</span>
              </div>
              <Button>Add to Cart</Button>
            </ProductDetail>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <PhoneContainer>
      <PhoneScreen>
        {renderContent()}
      </PhoneScreen>
    </PhoneContainer>
  );
};

const Showcase = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const phoneVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <ShowcaseContainer id="showcase">
      <Container>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <ShowcaseLayout>
            <PhoneWrapper
              className="profile-phone floating"
              variants={phoneVariants}
            >
              <ShoppingPhone type="profile" />
            </PhoneWrapper>

            <PhoneWrapper
              className="orders-phone floating"
              variants={phoneVariants}
            >
              <ShoppingPhone type="orders" />
            </PhoneWrapper>

            <PhoneWrapper
              className="interests-phone floating"
              variants={phoneVariants}
            >
              <ShoppingPhone type="interests" />
            </PhoneWrapper>

            <PhoneWrapper
              className="cart-phone floating"
              variants={phoneVariants}
            >
              <ShoppingPhone type="cart" />
            </PhoneWrapper>

            <PhoneWrapper
              className="controller-phone floating"
              variants={phoneVariants}
            >
              <ShoppingPhone type="controller" />
            </PhoneWrapper>
          </ShowcaseLayout>
        </motion.div>
      </Container>
    </ShowcaseContainer>
  );
};

export default Showcase;