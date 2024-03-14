import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        height: "100%",
        position: "relative",
      }}
    >
      <div style={{ backgroundColor: "#f1f1f1" }}>
        <Container>
          <Navbar>
            <LogoBox>
              <LogoImg src="./img/logo.png" alt="Logo" />
            </LogoBox>
            <Menu>
              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/about">About us</CustomLink>
              <CustomLink to="/contact">Contact us</CustomLink>
              <CustomLink to="/services">Services</CustomLink>
              <Button>REQUEST QUOTE</Button>
            </Menu>
            <MobileMenu>
              <IconButton sx={{ color: "var(--color--primary)" }}>
                <MenuIcon fontSize="large" onClick={handleClick} />
              </IconButton>
            </MobileMenu>
          </Navbar>
        </Container>
      </div>
      <div style={{ position: "relative" }}>
        <MobileMenuItem hidden={!isOpen}>
          <MobileCustomLink to="/">Home</MobileCustomLink>
          <MobileCustomLink to="/about">About us</MobileCustomLink>
          <MobileCustomLink to="/contact">Contact us</MobileCustomLink>
          <MobileCustomLink to="/services">Services</MobileCustomLink>
          <MobileButton>REQUEST QUOTE</MobileButton>
        </MobileMenuItem>
      </div>
    </div>
  );
};

export default Header;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 10px;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const LogoImg = styled.img`
  width: 180px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 990px) {
    display: none;
  }
`;

const CustomLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  position: relative;
  padding: 10px 20px;
  background: var(--color--primary-bg-light);
  font-size: 20px;
  font-weight: 700;
  color: var(--color--primary);
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: all 1s;
  &:after,
  &:before {
    content: " ";
    width: 10px;
    height: 10px;
    position: absolute;
    border: 0px solid #fff;
    transition: all 0.5s;
  }
  &:after {
    top: -1px;
    left: -1px;
    border-top: 2px solid var(--color--primary);
    border-left: 2px solid var(--color--primary);
  }
  &:before {
    bottom: -1px;
    right: -1px;
    border-bottom: 2px solid var(--color--primary);
    border-right: 2px solid var(--color--primary);
  }
  &:hover {
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
    &:before,
    &:after {
      width: 100%;
      height: 100%;
    }
  }
`;

const Button = styled.button`
  background-color: var(--color--primary);
  color: white;
  border: none;
  padding: 12px 22px;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  border-radius: 5px
  border: 2px solid var(--color--primary);;
  transition: all 1s;
  &:hover {
    color: var(--color--primary);
    border-radius: 50px;
    border: 2px solid var(--color--primary);
    background-color: var(--color--primary--bg-light);
    transition: all 1s ease 0s;
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media (max-width: 990px) {
    display: block;
  }
`;

const MobileMenuItem = styled.div`
  right: 0;
  left: 0;
  position: absolute;
  cursor: pointer;
  border-top: 3px solid var(--color--primary);
  background-color: var(--color--primary-bg-light);
  width: 80%;
  margin: 0 auto;
  transition: height 0.5s ease-in-out;
  height: ${(props) => (props.hidden ? "0" : "60vh")};
`;

const MobileCustomLink = styled(Link)`
  display: block;
  padding: 15px 10px;
  color: var(--color--primary);
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  &:hover {
    color: var(--color--primary-mobile--hover);
    background-color: var(--color--primary--mobile--bg);
  }
`;

const MobileButton = styled.button`
  background-color: var(--color--primary);
  color: white;
  border: none;
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
