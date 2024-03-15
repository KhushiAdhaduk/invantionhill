import React from "react";
import styled from "styled-components";

const Landing = () => {
  return (
    <Container>
      <Title>Future Focused Digital Innovations</Title>
      <Text>
        We're a brand strategy and digital design agency,building brands that
        matter in culture.
      </Text>
    </Container>
  );
};

export default Landing;

const Container = styled.div`
  // background-image: url("./img/bg_img.jpg");
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  text-align: center;
  min-height: 70vh;
  background-size: cover;
  // padding: 280px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  z-index: -1;
  background: linear-gradient(-45deg, #585fa3, #cebe61, #5e5d8c, #1d006b);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Title = styled.h2`
  color: white;
  font-size: 50px;
  text-align: center;
  padding: 10px 0;
`;

const Text = styled.p`
  color: white;
  font-size: 20px;
  text-align: center;
  padding: 10px 0;
`;
