import React from "react";
import styled from "styled-components";

const Form = () => {
  return (
    <>
      <Container>
        <FormBox>
          <Title>REQUEST QUOTE</Title>
          <SubTitle>Ready to Get Started</SubTitle>

          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Email" />
          <Input type="text" placeholder="Subject" />
          <Input type="textarea" placeholder="Message" />
          <Btn>
            <Button>Submit</Button>
          </Btn>
        </FormBox>
      </Container>
    </>
  );
};

export default Form;

const Container = styled.div`
  position: relative;
  height: 92.7vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    content: "";
    background: url("./img/request_bg.jpg");
    opacity: 0.3;
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

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: var(--color--primary);
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const SubTitle = styled.h3`
  color: var(--color--primary);
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid var(--color--primary);
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  background-color: var(--color--primary);
  color: white;
  margin: 15px 10px;
  padding: 12px 22px;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    color: var(--color--primary);
    border-radius: 50px;
    border: 2px solid var(--color--primary);
    background-color: var(--color--primary--bg-light);
    transition: all 0.3s ease 0s;
  }
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
`;
