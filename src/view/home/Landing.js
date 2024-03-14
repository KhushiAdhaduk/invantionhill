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
  z-index: 1;
  background-image: url("./img/bg_img.jpg");
  min-height: 70vh;
  background-size: cover;
  padding: 153px 0;
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
