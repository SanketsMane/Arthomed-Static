import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaShoppingCart, FaHeart } from 'react-icons/fa';
import styled from 'styled-components';

const PhoneContainer = styled(motion.div)`
  width: 280px;
  height: 560px;
  background: #1a1a1a;
  border-radius: 40px;
  padding: 20px;
  box-shadow: 
    0 0 0 8px rgba(255, 255, 255, 0.1),
    0 20px 60px rgba(0, 0, 0, 0.3),
    0 8px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: all 0.4s ease;

  &.main-phone {
    transform: rotate(-5deg) scale(1.1);
    z-index: 3;
  }

  &.floating {
    animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(var(--rotate, 0deg)); }
    33% { transform: translateY(-20px) rotate(calc(var(--rotate, 0deg) + 2deg)); }
    66% { transform: translateY(10px) rotate(calc(var(--rotate, 0deg) - 1deg)); }
  }

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
  position: relative;
`;

const AppInterface = styled.div`
  padding: 24px 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  
  h3 {
    font-size: 24px;
    font-weight: 600;
    color: #2d3748;
    margin: 0;
  }
`;

const ProductImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #f7fafc, #edf2f7);
  border-radius: 16px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const ProductImagePlaceholder = styled.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #4a5568, #2d3748);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  color: white;
  
  &::after {
    content: '🪑';
    font-size: 64px;
  }
`;

const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ProductName = styled.h4`
  font-size: 20px;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
`;

const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #ff6b35;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #718096;
`;

const AddToCartButton = styled.button`
  background: #ff6b35;
  color: white;
  border: none;
  padding: 16px 24px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  margin-top: auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    background: #ff5722;
  }
`;

const renderProduct = (data) => (
  <ProductContainer>
    <ProductHeader>
      <h3>Furniture</h3>
      <FaHeart style={{ color: '#e2e8f0', fontSize: '20px' }} />
    </ProductHeader>
    <ProductImageContainer>
      <ProductImagePlaceholder />
    </ProductImageContainer>
    <ProductInfo>
      <ProductName>Modern Chair</ProductName>
      <ProductPrice>$120</ProductPrice>
      <ProductRating>
        <div style={{ display: 'flex', gap: '2px' }}>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} style={{ color: '#ffd700', fontSize: '12px' }} />
          ))}
        </div>
        <span>(4.5)</span>
      </ProductRating>
    </ProductInfo>
    <AddToCartButton>
      <FaShoppingCart />
      Add to Cart
    </AddToCartButton>
  </ProductContainer>
);

const PhoneMockup = ({ content, className = '', ...motionProps }) => {
  const renderContent = () => {
    switch (content?.type) {
      case 'product':
        return renderProduct(content.data);
      default:
        return renderProduct({ productName: 'Chair', price: '$120' });
    }
  };

  return (
    <PhoneContainer className={className} {...motionProps}>
      <PhoneScreen>
        <AppInterface>
          {renderContent()}
        </AppInterface>
      </PhoneScreen>
    </PhoneContainer>
  );
};

export default PhoneMockup;