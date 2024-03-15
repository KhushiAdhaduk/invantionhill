import React from "react";
import styled from "styled-components";

const Landing = () => {
  return (
    <Container id="home">
      <div style={{ width: "90%", margin: "0 auto" }}>
        <Content>
          <LeftItem>
            <Title>Future Focused Digital Innovations</Title>
            <Text>
              We're a brand strategy and digital design agency,building brands
              that matter in culture.
            </Text>
          </LeftItem>
          <RightItem>
            <Img src="./img/img_front.png " alt="FrontImage" />
          </RightItem>
        </Content>
      </div>
    </Container>
  );
};

export default Landing;

const Container = styled.div`
  background-size: cover;
  background: linear-gradient(-45deg, #dd99bd, #1e006a, #aa5884, #68dd9d);
  background-size: 400% 400%;
  animation: gradient 13s ease infinite;
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

  @media (max-width: 990px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  justify-content: space-between;
  @media (max-width: 990px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`;

const LeftItem = styled.div`
  width: 90%;
  padding: 30px;
  @media (max-width: 990px) {
    padding: 10px 0 0 0;
  }
`;

const RightItem = styled.div`
  width: 100%;
  padding: 20px;
  padding-top: 40px;
  @media (max-width: 990px) {
    padding: 0 0 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Img = styled.img`
  width: 80%;
  padding: 10px 0 0 0;
  margin-left: 20px;
  @media (max-width: 990px) {
    margin-left: 0;
    padding: 0;
  }
`;

const Title = styled.h2`
  color: white;
  font-size: 53px;
  padding: 10px 0;
  @media (max-width: 990px) {
    font-size: 42px;
  }
  @media (max-width: 825px) {
    font-size: 30px;
  }
`;

const Text = styled.p`
  color: white;
  font-size: 20px;
  padding: 10px 0;
  opacity: 0.8;
  @media (max-width: 990px) {
    font-size: 16px;
  }
  @media (max-width: 825px) {
    font-size: 14px;
  }
`;
