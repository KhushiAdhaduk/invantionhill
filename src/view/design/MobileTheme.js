import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import styled from "styled-components";

const MobileTheme = () => {
  return (
    <>
      <Header />
      <Container>
        <TitleBox>
          <MobileThemeTitle>
            Mobile Responsive Theme Development
          </MobileThemeTitle>
        </TitleBox>
      </Container>
      <Contain>
        <MobileThemeLeft>
          <Title>
            We at iSpark creates best
            <span style={{ color: "#d17f1b" }}> Responsive Websites</span>
          </Title>
          <Text>
            Today world has become a small place. We can search everything on
            just our fingertips.
          </Text>
          <Text>
            With such grand technology updation the designs should also need to
            meet its standard.
          </Text>
          <Text>
            In world back there the websites were only reviewed through desktop
            or laptops but now with all the different gadgets available like
            mobile phones, ipads, tablets and what not, people can view it from
            any such device.
          </Text>
          <Text>
            So with this changing world it is required that your websites
            appears the same on whichever device it is been reviewed. The
            website layout should not be different.
          </Text>
        </MobileThemeLeft>
        <MobileThemeRight>
          <Img src="./img/mobile-theme1.png" alt="MobileTheme"></Img>
        </MobileThemeRight>
      </Contain>
      <Contain>
        <MobileThemeLeft>
          <Img src="./img/mobile-theme2.jpg" alt="MobileTheme" />
        </MobileThemeLeft>
        <MobileThemeRight>
          <Text>
            Responsive design means to make your design such comfortable that on
            whichever device it is used it makes itself comfortable depending on
            the screen size.
          </Text>
          <Text>
            The responsive designs can adjust itself from tiny phones to the big
            screen desktops also. We can check whether the mobile designs are
            responsive or not by clicking the bottom right corner of the website
            and slowly shrinking it back to the mobile screen size, if the
            website does not get blur than it is responsive otherwise its not.
            Nowadays all people chooses responsive web design so that their
            content is supplied to all the viewers from whichever device they
            see the website.
          </Text>
          <Text>
            The responsiveness can be more effective by understanding which
            content are more important. Arrange your content properly in a
            hierarchy.
          </Text>
          <Text>
            We include developers and designers in making websites responsive
            using bootstrap so that perfect result is achieved. For
            responsiveness we divide content and also we create the images and
            other videos in such a manner that nothing gets mixed up
          </Text>
          <Text>
            The designers put their best efforts in creating user friendly
            designs so that site give effective result. We also test the designs
            on different platforms so that we can get the accurate results. You
            will never regret if you contact us for creating responsiveness.
          </Text>
        </MobileThemeRight>
      </Contain>
      <Footer />
    </>
  );
};

export default MobileTheme;

const Container = styled.div`
  background-image: url("./img/Mobile_theme_bg.jpg");
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

const MobileThemeTitle = styled.h1`
  color: var(--color--primary-bg-light);
  text-align: center;
  font-size: 50px;
  font-weight: 700;
  @media (max-width: 395px) {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    font-size: 25px;
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

const MobileThemeLeft = styled.div`
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

const MobileThemeRight = styled.div`
  width: 45%;
  @media (max-width: 990px) {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 90%;
`;
