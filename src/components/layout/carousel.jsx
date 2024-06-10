import React from 'react';
import styled from 'styled-components';

const CarouselSection = styled.section`
  display: flex;
  overflow-x: auto;
  padding: 20px;
  background-color: #e0f7fa;
`;

const CarouselImage = styled.img`
  margin-right: 15px;
  width: 300px;
  height: 200px;
  object-fit: cover;
`;

function Carousel() {
  return (
    <CarouselSection>
      <CarouselImage src="path_to_image1.jpg" alt="Location 1" />
      <CarouselImage src="path_to_image2.jpg" alt="Location 2" />
      <CarouselImage src="path_to_image3.jpg" alt="Location 3" />
      <CarouselImage src="path_to_image4.jpg" alt="Location 4" />
    </CarouselSection>
  );
}

export default Carousel;