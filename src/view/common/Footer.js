import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Container>
        <div style={{ width: "80%", margin: "0 auto" }}>
          <FooterContain>
            <FooterItem>
              <Title>Design</Title>
              <Ol>
                <Li>
                  <CustomLink to="/logo-design">Logo Design</CustomLink>
                </Li>
                <Li>
                  <CustomLink>Custom Web Development</CustomLink>
                </Li>
                <Li>
                  <CustomLink to="/mobile-theme-development">
                    Mobile Responsive Theme Development
                  </CustomLink>
                </Li>
                <Li>
                  <CustomLink>Website Design</CustomLink>
                </Li>
              </Ol>
            </FooterItem>
            <FooterItem>
              <Title>Mobile App Development</Title>
              <Ol>
                <Li>
                  <CustomLink>Android Apps Development</CustomLink>
                </Li>
                <Li>
                  <CustomLink>iPad Apps Development</CustomLink>
                </Li>
                <Li>
                  <CustomLink>iOS Apps Development</CustomLink>
                </Li>
                <Li>
                  <CustomLink>Android Tablet App Development</CustomLink>
                </Li>
              </Ol>
            </FooterItem>
            <FooterItem>
              <Title>Web Development</Title>
              <Ol>
                <Li>Open Source Customization</Li>
                <Li>CMS Website Development Development</Li>
                <Li>Custom Application</Li>
                <Li>E Commerce Website Development</Li>
              </Ol>
            </FooterItem>
            <FooterItem>
              <Title>Others</Title>
              <Ol>
                <Li>Design</Li>
                <Li>Web Development</Li>
                <Li>Mobile App Development</Li>
                <Li>Custom Software Development</Li>
              </Ol>
            </FooterItem>
            <FooterItem>
              <Title>Custom Software Development</Title>
              <Ol>
                <Li>Healthcare</Li>
                <Li>Banking & Finance</Li>
                <Li>Retail & Marketing</Li>
                <Li>Telecom</Li>
              </Ol>
            </FooterItem>
            <FooterItem>
              <Title>Digital Marketing</Title>
              <Ol>
                <Li>SEO</Li>
                <Li>SMO</Li>
                <Li>Reputation Management</Li>
                <Li>PPC Management</Li>
                <Li>Social Media Marketing</Li>
                <Li>Video Marketing</Li>
              </Ol>
            </FooterItem>
            <FooterItem>
              <Title>Links</Title>
              <Ol>
                <Li>Design</Li>
                <Li>Web Development</Li>
                <Li>Mobile App Development</Li>
                <Li>Custom Software Development</Li>
              </Ol>
            </FooterItem>
          </FooterContain>
        </div>
      </Container>
      <FooterBox>
        <Text>Copyright © 2024. All Rights Reserved!</Text>
      </FooterBox>
    </>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 0 auto;
  background-color: #1c0f44;
`;

const FooterContain = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

const FooterItem = styled.div`
  padding-top: 50px;
`;

const Title = styled.div`
  color: white;
  font-size: 28px;
  &:after {
    background-color: #d17f1b;
    content: "";
    display: block;
    height: 3px;
    width: 50px;
    margin-top: 20px;
  }
  padding-bottom: 10px;

  font-weight: 500;
  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const Ol = styled.ol`
  color: white;
  font-size: 16px;
  font-weight: 400;
  opacity: 0.8;
  padding: 18px 0;
  margin: 10px 0 0 20px;
  line-height: 1.5;
`;

const Li = styled.li`
  list-style: circle;
  padding: 5px;
  cursor: pointer;
  &:hover {
    color: #d17f1b;
  }
`;

const CustomLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: #d17f1b;
  }
`;

const FooterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: black;
`;

const Text = styled.p`
  color: var(--color--primary-bg-light);
  font-size: 18px;
  font-weight: 600;
  padding: 18px 0;
  text-align: center;
  line-height: 1.5;
`;
