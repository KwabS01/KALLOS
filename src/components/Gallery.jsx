import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const Card = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s ease;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-top: 10px;
`;

const images = [
  {
    id: 1,
    src: '/images/hair-stylist.jpg',
    title: 'Hair Styling',
    description: 'Professional Hair Styling Services',
  },
  {
    id: 2,
    src: '/images/dermatology.jpg',
    title: 'Dermatology',
    description: 'Advanced Skin Care Solutions',
  },
  // Add more images as necessary
];

const Gallery = () => {
  return (
    <GalleryWrapper>
      {images.map((image) => (
        <Card
          key={image.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image src={image.src} alt={image.title} />
          <Overlay
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <div>
              <Title>{image.title}</Title>
              <Description>{image.description}</Description>
            </div>
          </Overlay>
        </Card>
      ))}
    </GalleryWrapper>
  );
};

export default Gallery;
