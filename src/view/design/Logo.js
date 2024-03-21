import React from "react";
import styled from "styled-components";
import Footer from "../common/Footer";
import Header from "../common/Header";

const Logo = () => {
  return (
    <>
      <Header />
      <Container>
        <TitleBox>
          <LogoTitle>LOGO DESIGN</LogoTitle>
        </TitleBox>
      </Container>
      <Contain>
        <LogoLeft>
          <Title>
            We Provide Creative
            <span style={{ color: "#d17f1b" }}> Logo Design</span>
          </Title>
          <Text>
            Your business is defined by your logo. Branding can be done through
            your logo as it is present in your websites, business cards, letter
            heads and every other thing related to your company. First
            impression is your last impression and so it is necessary to have a
            eye-catchy logo and addition to that which expresses your business.
          </Text>
        </LogoLeft>
        <LogoRight>
          <Img src="./img/logodesign1.png" alt="Logo"></Img>
        </LogoRight>
      </Contain>
      <Contain>
        <LogoLeft>
          <Img src="./img/logodesign2.png" alt="Logo"></Img>
        </LogoLeft>
        <LogoRight>
          <Title>
            Modern &<span style={{ color: "#d17f1b" }}> fresh Design</span>
          </Title>
          <Text>
            At iSpark we work in such a way that your business brand gets
            reflects and also your corporate culture is highlighted. We make
            sure that your clients gets impressed by the first view. Our team of
            experts and creative graphic designers make sure that you have
            unique design and related to your business logo. We do not adopt the
            available custom design logo but create personalised logo design. We
            firstly understand your business idea, looks upon who are your
            targeted customers and than create the logo for you. Once created
            the logo we will ask for your changes and feedback accordingly we
            will continue further. We deliver best results everywhere makes the
            clients achieve what they want.
          </Text>
        </LogoRight>
      </Contain>
      <Footer />
    </>
  );
};

export default Logo;

const Container = styled.div`
  background-image: url("./img/Logodesign_bg.png");
  background-size: cover;
  background-repeat: no-repeat;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 20px 0;
  flex-direction: column;
  align-items: center;
  min-height: 280px;
`;

const LogoTitle = styled.h1`
  color: var(--color--primary-bg-light);
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  @media (max-width: 395px) {
    font-size: 30px;
  }
`;

const Contain = styled.div`
  display: flex;
  max-width: 1280px;
  margin: 50px auto;
  @media (max-width: 990px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
  }
`;

const LogoLeft = styled.div`
  width: 50%;
  @media (max-width: 990px) {
    width: 100%;
  }
`;

const Title = styled.p`
  color: var(--color--primary);
  font-size: 45px;
  padding: 10px 0;
  &:after {
    background-color: #d17f1b;
    content: "";
    display: block;
    height: 3px;
    width: 50px;
    margin-top: 20px;
  }
  @media (max-width: 990px) {
    font-size: 30px;
  }
`;

const Text = styled.p`
  color: black;
  font-size: 20px;
  padding: 10px 0;
  opacity: 0.8;
  @media (max-width: 990px) {
    font-size: 16px;
  }
`;

const LogoRight = styled.div`
  width: 50%;
  @media (max-width: 990px) {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 80%;
`;
