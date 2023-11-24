import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLaptopMedical, FaBars, FaTimes } from "react-icons/fa";
import { Button } from '../Button/Button';
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background: #2b1b5e;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 0px;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 30px;
  padding-left: 30px;
`;

const NavbarLogo = styled(Link)`
  color: #1dc2a6;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
  }
`;

const NavbarIcon = styled(FaLaptopMedical)`
  margin-right: 1.0rem;
  color: #1dc2a6;
`;

const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    // ... (código para menu responsivo)
  }
`;

const NavItem = styled.li`
  height: 85px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 3px solid #1dc2a6;
  }

  @media screen and (max-width: 960px) {
    position: relative;
    &:hover {
      border-bottom: 3px solid transparent;
    }
  }
`;

const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  &:hover {
    color: #1dc2a6;
    transition: all 0.3s ease;
  }
  &.active {
    color: #1dc2a6;
  }
`;

const LogoutButton = styled.button`
  background-color: #fff;
  color: #1dc2a6;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #1dc2a6;
    color: #fff;
  }
`;

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [user, setUser] = useState();
  const userToken = localStorage.getItem("user_token");

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <>
      <NavbarContainer>
        <NavbarContent>
          <NavbarLogo to="/" onClick={closeMobileMenu}>
            <NavbarIcon />
            LifeAid
          </NavbarLogo>

          <MenuIcon onClick={handleClick}>
            {click ? <FaTimes color="white" /> : <FaBars color="white" />}
          </MenuIcon>

          <NavMenu className={click ? "nav-menu active" : "nav-menu"}>
            <NavItem>
              <NavLinks to="/" onClick={closeMobileMenu}>
                Home
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/mapa" onClick={closeMobileMenu}>
                Mapa
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/aprenda" onClick={closeMobileMenu}>
                Aprenda
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/sobre" onClick={closeMobileMenu}>
                Sobre
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/contato" onClick={closeMobileMenu}>
                Contato
              </NavLinks>
            </NavItem>

            <NavItem>
              {userToken ? (
                <>
                  <LogoutButton onClick={() => { closeMobileMenu(); signout(); }}>
                    Logout
                  </LogoutButton>
                  <NavLinks style={{ display: 'flex' }}>
                    Bem-vindo, {JSON.parse(userToken)?.email.split("@")[0]}!
                  </NavLinks>
                </>
              ) : (
                <NavLinks to="/sign-in" onClick={closeMobileMenu}>
                  <Button $primary>Login</Button>
                </NavLinks>
              )}
            </NavItem>
          </NavMenu>
        </NavbarContent>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
