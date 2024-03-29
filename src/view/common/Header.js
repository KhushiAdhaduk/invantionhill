import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div
      style={{
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        height: "100%",
        position: "sticky",
      }}
    >
      <div style={{ backgroundColor: "#f1f1f1" }}>
        <Container>
          <Navbar>
            <LogoBox>
              <Link to="/">
                <LogoImg src="./img/logo.png" alt="Logo" />
              </Link>
            </LogoBox>
            <Menu>
              {location.pathname === "/" ? (
                <>
                  <A href="/">Home</A>
                  <A href="#services">Services</A>
                  <A href="#portfolio">Portfolio</A>
                  <A href="#team">Team</A>
                  <A href="#contact">Contact</A>
                </>
              ) : (
                <>
                  <CustomLink to="/">Home</CustomLink>
                  <CustomLink to="/">Services</CustomLink>
                  <CustomLink to="/">Portfolio</CustomLink>
                  <CustomLink to="/">Team</CustomLink>
                  <CustomLink to="/">Contact</CustomLink>
                </>
              )}

              <Link to="/request">
                <Button>REQUEST QUOTE</Button>
              </Link>
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
          {location.pathname === "/" ? (
            <>
              <MobileA href="/">Home</MobileA>
              <MobileA href="#services">Services</MobileA>
              <MobileA href="#portfolio">Portfolio</MobileA>
              <MobileA href="#team">Team</MobileA>
              <MobileA href="#contact">Contact</MobileA>
            </>
          ) : (
            <>
              <MobileCustomLink to="/">Home</MobileCustomLink>
              <MobileCustomLink to="/">Services</MobileCustomLink>
              <MobileCustomLink to="/">Portfolio</MobileCustomLink>
              <MobileCustomLink to="/">Team</MobileCustomLink>
              <MobileCustomLink to="/">Contact</MobileCustomLink>
            </>
          )}
          <Link to="/request.">
            <MobileButton>REQUEST QUOTE</MobileButton>
          </Link>
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
  position: sticky;
  top: 0;
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

const A = styled.a`
  text-decoration: none;
  display: block;
  padding: 10px 7px;
  font-size: 20px;
  font-weight: 700;

  line-height: 1;
  position: relative;
  z-index: 1;
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
    to right,
    #d17f1b,
    #d17f1b 50%,
    var(--color--primary) 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  transition: all 0.5s ease-in-out;
  &:before {
    display: block;
    content: "";
    width: 0;
    height: 3px;
    bottom: 5px;
    left: 0;
    bottom: -3px;
    z-index: 0;
    position: absolute;
    background: #d17f1b;
    transition: all 0.5s ease-in-out;
  }

  &:hover {
    background-position: 0%;
  }

  &:hover:before {
    width: 100%;
  }
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  display: block;
  padding: 10px 7px;
  font-size: 20px;
  font-weight: 700;

  line-height: 1;
  position: relative;
  z-index: 1;
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
    to right,
    #d17f1b,
    #d17f1b 50%,
    var(--color--primary) 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  transition: all 0.5s ease-in-out;
  &:before {
    display: block;
    content: "";
    width: 0;
    height: 3px;
    bottom: 5px;
    left: 0;
    bottom: -3px;
    z-index: 0;
    position: absolute;
    background: #d17f1b;
    transition: all 0.5s ease-in-out;
  }

  &:hover {
    background-position: 0%;
  }

  &:hover:before {
    width: 100%;
  }
`;

const Button = styled.button`
  background-color: var(--color--primary);
  color: white;
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
  height: ${(props) => (props.hidden ? "0" : "45vh")};
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
    border-left: 3px solid var(--color--primary);
  }
`;

const MobileA = styled.a`
  display: block;
  padding: 15px 10px;
  color: var(--color--primary);
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  &:hover {
    color: var(--color--primary-mobile--hover);
    background-color: var(--color--primary--mobile--bg);
    border-left: 3px solid var(--color--primary);
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
