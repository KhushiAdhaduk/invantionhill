import React from "react";
import styled from "styled-components";

const Service = () => {
  return (
    <Container>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <TitleBox>
          <Title>Services</Title>
          <SubTitle>Our Best Services</SubTitle>
          <Text>
            Retaining customer base is important for any enterprise, it takes
            great effort to make good customer relationship and minute error can
            ruin it. Owing to our outstanding customer service we have
            maintained the 85% customer retention rate. We, the best IT service
            provider company in Noida help your business in getting loyalty back
            by transforming into latest advanced IT technology. Our BA,
            Designing, Developing, Support and Consultant team are always at
            your service to assist you in consultant, implementation,
            integration and support. We are the trustful answer for enterprises
            that are inclining towards digital era. Digitizing your work help in
            overall 25 % reduction in the core capital of the company and hence
            better ROI.
          </Text>
        </TitleBox>
        <Card>
          <CardItem>
            <Icon>
              <i style={{ fontSize: "60px" }} class="fa-brands fa-apple"></i>
            </Icon>
            <CardTitle>iOS Development</CardTitle>
            <CardText>
              Master in advancement of modern iOS apps for iPhones advertising
              full-spectrum, end-to conclusion administrations for custom
              versatile application.
            </CardText>
          </CardItem>
          <CardItem>
            <Icon>
              <i style={{ fontSize: "60px" }} class="fa-brands fa-android"></i>
            </Icon>
            <CardTitle>Android Development</CardTitle>
            <CardText>
              Especially experienced and devoted to execute the power-packed
              usefulness of Android apps by advanced approach and innovation.
            </CardText>
          </CardItem>
          <CardItem>
            <Icon>
              <i
                style={{ fontSize: "60px" }}
                class="fa-solid fa-laptop-code"
              ></i>
            </Icon>
            <CardTitle>Web Development</CardTitle>
            <CardText>
              Specialized in creating exceedingly locks in web arrangements that
              will assist you to rule the advanced commercial center.
            </CardText>
          </CardItem>
          <CardItem>
            <Icon>
              <i style={{ fontSize: "60px" }} class="fa-brands fa-react"></i>
            </Icon>
            <CardTitle>React Development</CardTitle>
            <CardText>
              We are capable in creating iOS and Android apps utilizing the most
              recent Respond Local Cross Stage that best suits to drive your
              trade.
            </CardText>
          </CardItem>
          <CardItem>
            <Icon>
              <i
                style={{ fontSize: "60px" }}
                class="fa-solid fa-business-time"
              ></i>
            </Icon>
            <CardTitle>Business Analyst</CardTitle>
            <CardText>
              The competitive scenario of business has called for efficient
              operational activities, leveraging investment cost and overall
              high profitability.
            </CardText>
          </CardItem>
          <CardItem>
            <Icon>
              <i
                style={{ fontSize: "60px" }}
                class="fa-solid fa-compass-drafting fa-lg"
              ></i>
            </Icon>
            <CardTitle>UI/UX Designer</CardTitle>
            <CardText>
              Center on giving client-centric planning, astounding ease of use
              with impressive visual to the site by top-notch UI/UX plan.
            </CardText>
          </CardItem>
        </Card>
      </div>
    </Container>
  );
};

export default Service;

const Container = styled.div`
  position: relative;
  &:before {
    content: "";
    background: url("./img/bg-service.jpg");
    opacity: 0.3;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
  @media (max-width: 990px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const Title = styled.p`
  border: 2px solid black;
  color: black;
  border-radius: 30px;
  padding: 10px 30px;
  margin: 20px 0;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    color: black;
    background-color: #d17f1b;
    transition: all 0.5s;
  }
`;

const SubTitle = styled.h1`
  color: black;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
`;

const Text = styled.p`
  color: black;
  font-size: 1em;
  font-weight: 500;
  padding: 10px 0;
  text-align: center;
  line-height: 1.5;
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  @media (max-width: 1125px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 990px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Icon = styled.div`
  padding: 10px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  background-color: #333;
  transition: all 0.3s;
`;
const CardItem = styled.div`
min-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: left;
  border: 1px solid #a4a7a8;
  border-radius: 10px;
  padding: 40px 30px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05); / Increase the size on hover /
    transition: transform 0.3s ease;
    box-shadow: 1px 1px 3px 0 black,
    0 10px 80px 0 black;
    & > ${Icon} {
      color: black;
      background-color: #d17f1b;

    }
  }
  @media (max-width: 850px) {
    align-items: center;
    justify-content: center;
  }
`;

// rest of your code

const CardTitle = styled.p`
  color: black;
  font-size: 1em;
  font-weight: 700;
  padding: 10px 0;
  line-height: 1.5;
`;

const CardText = styled.p`
  color: black;
  font-size: 1em;
  font-weight: 500;
  padding: 10px 0;
  line-height: 1.5;
`;
