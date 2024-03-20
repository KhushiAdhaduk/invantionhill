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
      <Container>
        <TeamBox>
          <TeamItem>
            <Img src="./img/team_men.jpg" alt="Team1" />
            <Name>Jayesh Maradiya</Name>
            <Position>Founder</Position>
          </TeamItem>
          <TeamItem>
            <Img src="./img/team_men.jpg" alt="Team1" />
            <Name>Niraj Gambhava</Name>
            <Position>Founder</Position>
          </TeamItem>
          <TeamItem>
            <Img src="./img/team_men.jpg" alt="Team1" />
            <Name>Dhruv Maradiya</Name>
            <Position>Sr.Fullstack Developer</Position>
          </TeamItem>
          <TeamItem>
            <Img src="./img/team_men.jpg" alt="Team1" />
            <Name>Vrushik Kardani</Name>
            <Position>jr.Fullstack Developer</Position>
          </TeamItem>
          <TeamItem>
            <Img src="./img/team_women.jpg" alt="Team1" />
            <Name>Aarti Andarapa</Name>
            <Position>sr.Fullstack Developer</Position>
          </TeamItem>
          <TeamItem>
            <Img src="./img/team_women.jpg" alt="Team1" />
            <Name>Trusha Mardiya</Name>
            <Position>sr.Fullstack Developer</Position>
          </TeamItem>
          <TeamItem>
            <Img src="./img/team_women.jpg" alt="Team1" />
            <Name>Khushi Adhaduk</Name>
            <Position>Intern Fullstack Developer</Position>
          </TeamItem>
          <TeamItem>
            <Img src="./img/team_women.jpg" alt="Team1" />
            <Name>Bansi Changela</Name>
            <Position>Intern Fullstack Developer</Position>
          </TeamItem>
          <TeamItem>
            <Img src="./img/team_men.jpg" alt="Team1" />
            <Name>Natraj Sing</Name>
            <Position>Sr. Mobile Developer</Position>
          </TeamItem>
          <TeamItem>
            <Img src="./img/team_men.jpg" alt="Team1" />
            <Name>Nikunj Patel</Name>
            <Position>Team Lead</Position>
          </TeamItem>
          <TeamItem>
            <Img src="./img/team_men.jpg" alt="Team1" />
            <Name>Vinit Patel</Name>
            <Position>Intern Mobile Developer</Position>
          </TeamItem>
          <TeamItem>
            <Img src="./img/team_men.jpg" alt="Team1" />
            <Name>Ravi Maradiya</Name>
            <Position>Intern Mobile Developer</Position>
          </TeamItem>
        </TeamBox>
      </Container>
    </>
  );
};

export default Team;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0 20px 0;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  color: var(--color--primary);
  border-bottom: 3px solid #d17f1b;
  font-size: 40px;
  font-weight: 700;
  @media (max-width: 395px) {
    font-size: 30px;
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  @media (max-width: 990px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
  }
`;

const TeamBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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

const TeamItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  border-radius: 8px 8px 0 0;
  border: 1px solid #f1f1f1;
  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    background-color: #dddddd;
    transition: 0.4s ease-in-out;
  }
  @media (max-width: 395px) {
    padding: 5px;
  }
`;

const Img = styled.img`
  position: relative;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  width: 100%;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  &:hover {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  @media (max-width: 395px) {
    width: 100%;
  }
`;

const Name = styled.h1`
  text-align: center;
  color: var(--color--primary);
  font-size: 25px;
  font-weight: 700;
  word-break: break-word;
`;

const Position = styled.p`
  color: black;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  line-height: 1.5;
`;
