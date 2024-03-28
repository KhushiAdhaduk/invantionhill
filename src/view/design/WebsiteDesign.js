import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import styled from "styled-components";

const WebsiteDesign = () => {
  return (
    <>
      <Header />
      <Container>
        <TitleBox>
          <WebsiteDesignTitle>Website Design</WebsiteDesignTitle>
        </TitleBox>
      </Container>
      <Contain>
        <WebsiteDesignLeft>
          <Title>
            Website – Virtual Presentation of your{" "}
            <span style={{ color: "#d17f1b" }}>Business</span>
          </Title>
          <Text>
            Website is presenting your idea of business to the targeted
            customers virtually in the best design and with the best content.
          </Text>
          <Text>
            Website is a way of driving you and your potential customers closer.
          </Text>
          <Text>
            You have only mini seconds to attract your customers towards you and
            so you need to be at your best.
          </Text>
          <Text>
            Website is the first mode of communication between to and any other
            second party, it gives you chance to mark your first impression.
          </Text>
        </WebsiteDesignLeft>
        <WebsiteDesignRight>
          <Img src="./img/website-design1.jpg" alt="WebDesign" />
        </WebsiteDesignRight>
      </Contain>
      <Contain>
        <WebsiteDesignLeft>
          <Img src="./img/website-design2.png" alt="WebDesign" />
        </WebsiteDesignLeft>
        <WebsiteDesignRight>
          <Text>
            At iSpark we have team of members who are creatively talented and
            also are technically expert which will lead to achieve your goal in
            the effective way.
          </Text>
          <Text>
            We design websites by first understanding what your business does,
            who are your target audience and than convert your idea into
            reality.
          </Text>
          <Text>
            We can make sure that you also generate high revenue for your site.
            We create websites that is combination of color-schemes, images and
            informative text which are into accessible webpages which is also
            into structured navigation which helps users to find information
            easily.
          </Text>
          <Text>
            We design such websites that make you unique from the crowd. Our
            team has a expertise in combining rich content, innovative design,
            and easy navigation with intelligent applications.
          </Text>
        </WebsiteDesignRight>
      </Contain>
      <Contain>
        <WebsiteDesignLeft>
          <Text>
            Whatever industry you are dealing in if you want best virtual
            presentation of your business than kindly get in touch with us !
          </Text>
        </WebsiteDesignLeft>
        <WebsiteDesignRight>
          <Img src="./img/website-design3.png" alt="WebDesign" />
        </WebsiteDesignRight>
      </Contain>
      <Footer />
    </>
  );
};

export default WebsiteDesign;

const Container = styled.div`
  background-image: url("./img/web_design_bg.jpg");
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

const WebsiteDesignTitle = styled.h1`
  color: var(--color--primary-bg-light);
  text-align: center;
  font-size: 65px;
  font-weight: 700;
  @media (max-width: 395px) {
    font-size: 30px;
  }
`;

const Contain = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  margin: 50px auto;
  align-items: center;
  @media (max-width: 990px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
  }
`;

const WebsiteDesignLeft = styled.div`
  width: 45%;
  @media (max-width: 990px) {
    width: 100%;
  }
`;

const WebsiteDesignRight = styled.div`
  width: 45%;
  @media (max-width: 990px) {
    width: 100%;
  }
`;

const Title = styled.p`
  color: var(--color--primary);
  font-size: 40px;
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

const Img = styled.img`
  width: 90%;
`;
