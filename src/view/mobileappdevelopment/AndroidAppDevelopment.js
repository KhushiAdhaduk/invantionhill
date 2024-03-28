import React from "react";
import styled from "styled-components";
import Header from "../common/Header";
import Footer from "../common/Footer";

const AndroidAppDevelopment = () => {
  return (
    <>
      <Header />
      <Container>
        <TitleBox>
          <AndroidAppDevelopmentTitle>
            Android Apps Development
          </AndroidAppDevelopmentTitle>
        </TitleBox>
      </Container>
      <Contain>
        <AndroidAppDevelopmentLeft>
          <Title>
            We Provide Creative Android
            <span style={{ color: "#d17f1b" }}> Phone App</span>
          </Title>
          <Text>
            Android the second name of Smart phones. Everything is available on
            Android Applications whether it is shopping groceries to shopping
            ornaments .
          </Text>
          <Text>
            Android is the most used platform as it has versatile, user friendly
            applications and flexibility. The applications on Android also are
            easy to update.
          </Text>
          <Text>
            Android Apps Development is adoptable in all the industries like
            Finance, Business, Game, Security, E-commerce, Travel & Map,
            Healthcare.
          </Text>
          <h3
            style={{
              color: "var(--color--primary)",
              marginTop: "30px",
              marginBottom: "20px",
            }}
          >
            Why Choose Android Application ?
          </h3>
          <P>User- Friendly</P>
          <P>Easy to Update</P>
          <P>Vast Audience</P>
        </AndroidAppDevelopmentLeft>
        <AndroidAppDevelopmentRight>
          <Img src="./img/android_app_dev1.png" alt="AndroidApp" />
        </AndroidAppDevelopmentRight>
      </Contain>
      <Contain>
        <AndroidAppDevelopmentLeft>
          <Img src="./img/android_app_dev2.png" alt="AndroidApp" />
        </AndroidAppDevelopmentLeft>
        <AndroidAppDevelopmentRight>
          <Title>
            Why <span style={{ color: "#d17f1b" }}>invantionhill ?</span>
          </Title>
          <Text>
            Why iSpark ? iSpark provides reliable and cost effective Android
            Apps Development Services for you. Vast knowledge, extra ordinary
            abilities and accountability is what all our developers have which
            make our company different from others.
          </Text>
          <Text>
            We can develop all versions of Android with effective results. With
            the experts in the field we also maintain the client information and
            data. We have team of experts who first understand your idea and
            than do research and analysis of the requirement, we also help to
            have a customer centric approach so that your users increases day by
            day.
          </Text>
          <Text>
            We not only give time in developing and designing but also give full
            time for its testing procedures so that we can have more user
            friendly application. We have experts of designing, programmers who
            communicate with the clients directly so that the clients are up to
            date about the progress and gets the best knowledge.
          </Text>
          <Text>
            We provide cost effective Android App Development Web Development
            Services with quality because our aim is also to maintain good
            relations and have large client base. We include Android services
            like android business application development, Wifi and GPS based
            android application development and also Android social media
            integration. Also our company provides after sale service support
            when for any update or errors you can get back to us.
          </Text>
        </AndroidAppDevelopmentRight>
      </Contain>
      <ContainItem>
        <AndroidAppDevelopmentLeft>
          <Img
            src="./img/android_app_dev3.png"
            alt="AndroidApp"
            style={{ paddingTop: "20px", width: "50%" }}
          />
        </AndroidAppDevelopmentLeft>
        <AndroidAppDevelopmentRight>
          <Text>
            Contact us now if you are looking for the best applications to be
            developed for you at competitive rates with team of best designers
            and developers and testers. Choose us to get best satisfaction on
            your investments.
          </Text>
        </AndroidAppDevelopmentRight>
      </ContainItem>
      <Footer />
    </>
  );
};

export default AndroidAppDevelopment;

const Container = styled.div`
  background-image: url("./img/android-app-development-bg.jpg");
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

const AndroidAppDevelopmentTitle = styled.h1`
  color: white;
  text-align: center;
  font-size: 70px;
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

const AndroidAppDevelopmentLeft = styled.div`
  width: 45%;
  @media (max-width: 990px) {
    width: 100%;
  }
`;

const AndroidAppDevelopmentRight = styled.div`
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
  opacity: 0.8;
  line-height: 1.5;
  @media (max-width: 990px) {
    font-size: 16px;
  }
  @media (max-width: 825px) {
    font-size: 14px;
  }
`;

const P = styled.p`
  color: black;
  font-size: 20px;
  padding-bottom: 7px;
  opacity: 0.8;
  @media (max-width: 990px) {
    font-size: 16px;
  }
  @media (max-width: 825px) {
    font-size: 14px;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const ContainItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0;
  align-items: center;
  text-align: center;
  background-color: white;
`;
