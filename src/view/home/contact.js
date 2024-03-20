import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <>
      <Contain id="contact">
        <TitleBox>
          <Title>
            Let's <span style={{ color: "#d17f1b" }}>Talk</span>
          </Title>
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
      </Contain>
      <Container>
        <div style={{ width: "90%", margin: "0 auto" }}>
          <Des>
            <RightItem>
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.53282035278!2d72.53838347477291!3d23.114191812903922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e832045f78279%3A0xb8ea393f6d956dbf!2sInventionHill!5e0!3m2!1sen!2sin!4v1710927616310!5m2!1sen!2sin"
                width="600"
                height="550"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </RightItem>
            <LeftItem>
              <ContactItem>
                <DesTitle>
                  <i
                    class="fa-solid fa-location-dot"
                    style={{ fontSize: "20px", marginRight: "10px" }}
                  ></i>
                  Address
                </DesTitle>
                <DesText>
                  <DesText>B-1203, Ganesh Glory 11,</DesText>
                  <DesText>Jagatpur road,</DesText>
                  <DesText>Sarkhej - Gandhinagar Hwy,</DesText>
                  <DesText>Ahmadabad, Gujarat 382481</DesText>
                </DesText>
              </ContactItem>
              <ContactItem>
                <DesTitle>
                  <i
                    class="fa-solid fa-phone-volume"
                    style={{ fontSize: "20px", marginRight: "10px" }}
                  ></i>
                  Phone
                </DesTitle>
                <DesText style={{ marginLeft: "30px" }}>+91 9909595299</DesText>
              </ContactItem>
              <ContactItem>
                <DesTitle>
                  <i
                    class="fa-solid fa-envelope fa"
                    style={{ fontSize: "20px", marginRight: "10px" }}
                  ></i>
                  Email
                </DesTitle>
                <a
                  style={{
                    marginLeft: "40px",
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "var(--color--primary)",
                    fontWeight: "500",
                    fontSize: "19px",
                    wordWrap: "break-word",
                  }}
                  href="mailto:inventionhill@gmail.com"
                >
                  inventionhill@gmail.com
                </a>
              </ContactItem>
              <ContactItem>
                <DesTitle>
                  <i
                    class="fa-solid fa-hourglass-start"
                    style={{ fontSize: "20px", marginRight: "10px" }}
                  ></i>
                  Office Hours
                </DesTitle>
                <DesText style={{ marginLeft: "20px" }}>
                  <DesText>Monday to Friday</DesText>
                  <DesText>10 am to 7pm</DesText>
                </DesText>
              </ContactItem>
            </LeftItem>
          </Des>
        </div>
      </Container>
    </>
  );
};

export default Contact;

const Contain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

const Title = styled.p`
  color: var(--color--primary);
  border-bottom: 3px solid #d17f1b;
  font-size: 40px;
  font-weight: 700;
  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const Text = styled.p`
  color: var(--color--primary);
  font-size: 18px;
  font-weight: 600;
  padding: 18px 0;
  text-align: center;
  line-height: 1.5;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0 20px 0;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  &:before {
    content: "";
    background-color: var(--color--primary-bg-light);
    background-size: cover;
    background-position: center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;

const Des = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 20px;
  @media (max-width: 998px) {
    flex-direction: column;
  }
`;

const ContactItem = styled.div`
  width: 100%;
  padding: 20px;
`;

const LeftItem = styled.div`
  width: 100%;
`;

const RightItem = styled.div`
  width: 100%;
  padding: 20px;
  @media (max-width: 998px) {
    display: none;
  }
`;

const DesTitle = styled.h3`
  color: var(--color--primary);
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 10px;
  word-wrap: break-word;
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const DesText = styled.p`
  color: var(--color--primary);
  margin-left: 15px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  word-wrap: break-word;
`;
