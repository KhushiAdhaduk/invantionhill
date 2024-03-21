import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import styled from "styled-components";

const CustomWebDevelopment = () => {
  return (
    <>
      <Header />
      <Container>
        <TitleBox>
          <LogoTitle>CUSTOM WEB DEVELOPMENT</LogoTitle>
        </TitleBox>
      </Container>
      <Contain>
        <LogoLeft>
          <Title>
            We Provide Creative Custom
            <span style={{ color: "#d17f1b" }}> Layout Design</span>
          </Title>
          <Text>
            Who does not like to be unique and get noted in the eyes of
            thousands of people. With custom web designing you can gain the
            same. Custom web design helps you to create your unique image in
            front of all. Instead of using the same web templates custom web
            design helps you to get your personalized theme highlighted. You can
            create whole new design for yourself instead of choosing from the
            thousands which are used by all. For easily managing your website we
            also have code management system for you where you can easily
            create, edit and manage your custom website.
          </Text>
          <Text>
            Custom website helps you to reach your customers in the way you want
            to reach and it presents your business in your unique way. Everyone
            will be attracted for the thing which is different. Custom design
            also helps to create brand for yourself. Your products and services
            will be remembered for your uniqueness and you will be easily
            familiar with the public.
          </Text>
        </LogoLeft>
        <LogoRight>
          <Img src="./img/Custom-web-design1.png" alt="WebDesign"></Img>
        </LogoRight>
      </Contain>
      <ContainItem>
        <Title>
          Why<span style={{ color: "#d17f1b" }}> Inventionhill?</span>
        </Title>
        <LogoLeft>
          <Img
            src="./img/Custom-web-design2.png"
            alt="WebDesign"
            style={{ paddingTop: "20px" }}
          ></Img>
        </LogoLeft>
        <LogoRight>
          <Text>
            At Inventionhill we first understand what your business is all
            about. We understand your goals so that we can easily design the
            websites which can target the right audience for you.
          </Text>
          <Text>
            After analyzing your business we give you our process of design in
            which the idea will be presented about how actually your website
            will look.
          </Text>
          <Text>
            We will also add the ideas which you want to give to make the
            website more better. We try to design in such a way the audiences
            love to return back to your site again.
          </Text>
          <Text>
            After finalizing about the design we develop the final website for
            you by adding the content, images and pictures. After fulfilling all
            the needs of your website we can make it live after passing it
            through all testing phases. We are also available whenever you need
            to reinvent again.
          </Text>
          <Text>
            We will also help you with the code so that you can edit or add
            yourself. Thus we help you to create the best with your imagination
            and in a unique way.
          </Text>
        </LogoRight>
      </ContainItem>
      <Contain>
        <LogoLeft>
          <Text>
            We stand as Unique custom website design company in India by
            converting your own idea into perfect virtuality to attract the
            right customers for your business. We provide best solutions for you
            with our team of experienced designers who are creative and cool in
            terms of designing and also are dedicated so that you can get your
            work when you actually need.
          </Text>
        </LogoLeft>
        <LogoRight>
          <Img src="./img/Custom-web-design3.png" alt="WebDesign"></Img>
        </LogoRight>
      </Contain>
      <Footer />
    </>
  );
};

export default CustomWebDevelopment;

const Container = styled.div`
  background-image: url("./img/Custom-web-development.jpg");
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
  justify-content: space-between;
  align-items: center;
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
  width: 45%;
  @media (max-width: 990px) {
    width: 100%;
  }
`;

const Title = styled.p`
  color: var(--color--primary);
  font-size: 45px;
  font-weight: 700;
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
  font-size: 18px;
  padding: 10px 0;
  line-height: 1.5;
  opacity: 0.7;
  @media (max-width: 990px) {
    font-size: 16px;
  }
`;

const LogoRight = styled.div`
  width: 45%;
  @media (max-width: 990px) {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 90%;
`;

const ContainItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0;
  align-items: center;
  text-align: center;
  background-color: var(--color--primary-bg-light);
`;
