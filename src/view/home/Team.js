import React from "react";
import styled from "styled-components";

const Team = () => {
  return (
    <>
      <TitleBox>
        <Title>
          Our Creative <span style={{ color: "#d17f1b" }}>Team</span>
        </Title>
      </TitleBox>
    </>
  );
};

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  color: var(--color--primary);
  border-bottom: 3px solid #d17f1b;
  font-size: 40px;
  font-weight: 700;
`;

export default Team;
