import React from 'react';
import styled from 'styled-components';
import globeImage from '../img/background.png';


const HeroSection = styled.section`
  position: relative;
  background-size: cover;
  background-position: center;
  color: white;
  padding: 220px 20px;
  background-image: url(${globeImage});
  min-height: 400px;
`;

const HeroTitle = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
`;

const HeroText = styled.p`
  font-size: 1.2em;
`;

const HeroButton = styled.button`
  background-color: #00796b;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #004d40;
  }
`;

function Hero() {
  return (
    <HeroSection>
      <HeroTitle>Virtual Travel Experience</HeroTitle>
      <HeroText>Explore the world from the comfort of your home</HeroText>
      <HeroButton>Get Started</HeroButton>
    </HeroSection>
  );
}

export default Hero;