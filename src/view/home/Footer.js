import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterBox>
        <Text>Copyright © 2024. All Rights Reserved!</Text>
      </FooterBox>
    </>
  );
};

export default Footer;

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
