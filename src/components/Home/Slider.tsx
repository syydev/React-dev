import React, { useState } from 'react';
import styled from 'styled-components';
import bg1 from '../../assets/img/bg-1.jpg';
import bg2 from '../../assets/img/bg-2.jpg';
import bg3 from '../../assets/img/bg-3.jpg';

interface ISlide {
  sliding: boolean,
  direction: string,
}

interface IImg {
  order: number,
  imageUrl: string,
  textColor: string,
}

const Slider: React.FC = () => {
  const images = [
    { url: bg1, title: 'MINIMALLISM', content: '미니멀리즘을 추구 한다면,', textColor: 'white' },
    { url: bg2, title: 'AS YOU NEED', content: '필요에 따라 목적에 맞게.', textColor: 'white' },
    { url: bg3, title: 'Whenever, Wherever', content: '언제 어디서든 0-9 BOX 와 함께 하세요!', textColor: 'black' },
  ];
  const slideLen = images.length;
  const [sliding, setSliding] = useState(true);
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState('next');

  const doSliding = (position: number, direction: string) => {
    setSliding(true);
    setPosition(position);
    setDirection(direction);
    setTimeout(() => {
      setSliding(false);
    }, 50);
  }

  const prevSlide = () => {
    doSliding(position === 0 ? slideLen - 1 : position - 1, 'prev');
  }

  const nextSlide = () => {
    doSliding(position === slideLen - 1 ? 0 : position + 1, 'next');
  }

  const getOrder = (itemIndex: number) => {
    if (itemIndex - position < 0) {
      return slideLen - Math.abs(itemIndex - position);
    }
    return itemIndex - position;
  }

  return (
    <Container>
      <Slide sliding={sliding} direction={direction}>
        {images.map((image, index) => (
          <Img key={index} order={getOrder(index)} imageUrl={image.url} textColor={image.textColor}>
            <ImgTitle>{image.title}</ImgTitle>
            <ImgContent>{image.content}</ImgContent>
          </Img>
        ))}
      </Slide>
      <LeftArrow onClick={prevSlide}>&lt;</LeftArrow>
      <RightArrow onClick={nextSlide}>&gt;</RightArrow>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const Slide = styled.div`
  display: flex;
  height: 600px;
  transition: ${(props: ISlide) => props.sliding ? 'none' : 'transform 1s ease'};
  transform: ${(props: ISlide) => {
    if (!props.sliding) return 'translateX(calc(-100%))'
    if (props.direction === 'prev') return 'translateX(calc(-200%))'
    return 'translateX(0%)'
  }};
`;

const Img = styled.div`
  flex: 1 0 100%;
  max-height: 100%;
  max-width: 100%;
  text-align: center;
  color: ${(props: IImg) => props.textColor};
  order: ${(props: IImg) => props.order};
  background-image: url(${(props: IImg) => props.imageUrl});
`;

const ImgTitle = styled.h1`
  margin-top: 480px;
`;

const ImgContent = styled.p`
  margin-top: -15px;
  font-size: 14px;
  font-weight: 700;
`;

const Arrow = styled.div`
  position: absolute;
  top: 250px;
  color: #E6E6E6;
  font-size: 70px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

const LeftArrow = styled(Arrow)`
  left: 30px;
  float: left;
`;

const RightArrow = styled(Arrow)`
  right: 30px;
  float: right;
`;

export default Slider;