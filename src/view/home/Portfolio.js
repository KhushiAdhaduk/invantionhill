import React from "react";
import styled from "styled-components";

const Portfolio = () => {
  return (
    <TitleBox>
      <Title>
        Our Recent <span style={{ color: "#d17f1b" }}>Works</span>
      </Title>
    </TitleBox>
  );
};

export default Portfolio;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  color: var(--color--primary);
  border-bottom: 3px solid #d17f1b;
  padding: 10px;
  font-size: 40px;
  font-weight: 700;
`;
