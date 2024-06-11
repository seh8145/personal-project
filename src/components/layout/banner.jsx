import React from 'react';
import styled from 'styled-components';
import globeImage from '../img/background.png';


const BannerSection = styled.section`
  position: relative;
  background-size: cover;
  background-position: center;
  color: white;
  padding: 220px 20px;
  background-image: url(${globeImage});
  min-height: 400px;
`;

const BannerTitle = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
`;

const BannerText = styled.p`
  font-size: 1.2em;
`;

const BannerButton = styled.button`
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

function Banner() {
  return (
    <BannerSection>
      <BannerTitle>Virtual Travel Experience</BannerTitle>
      <BannerText>Explore the world from the comfort of your home</BannerText>
      <BannerButton>Get Started</BannerButton>
    </BannerSection>
  );
}

export default Banner;