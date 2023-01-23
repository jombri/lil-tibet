import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import {Close, FavoriteBorder, Menu, Search, ShoppingCartOutlined} from '@mui/icons-material';
import { tablet } from "../responsive";
import Announcement from './Announcement';
import SearchBox from './SearchBox';

 const Container = styled.nav`
    width: 100%;
    height: ${(props) => (props.sideNav ? "inherit" : "auto")};
    background-color: ${({ theme }) => theme.colors.mustard};
    padding: 10px 0 0;
    ${tablet({height: "auto"})}
    position: sticky;
    top: 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: auto;
`;

const SideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin-top: 5%;
`;

const Left = styled.div`
  flex: 1;
  align-items: center;
  font-family: ${({ theme }) => theme.font.heading};
  ${tablet({flex: 3})}
`;

const CategoryDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const IconDiv = styled.div`
  display: flex;
  column-gap: 5px;
  align-items: center;
  margin-right: ${(props) => props.marginRight ? '5px' : null };
`;

const HideIconDiv = styled(IconDiv)`
  ${tablet({display: "none"})}
`;

const CategoryList = styled.li`
  list-style-type: none;
  display: none;
  column-gap: 10px;
  font-size: 1rem;
  ${tablet({display: "flex"})}
`;

const SideCategoryList = styled.li`
  list-style-type: none;
  display: flex;
  column-gap: 10px;
  font-size: 1rem;
  ${tablet({display: "flex"})}
`;

export const CategoryLink = styled(NavLink)`
  text-transform: uppercase;
  text-decoration: none;
  position: relative;
  color: black;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: black;
    transform: scaleX(0);
    transition: transform 0.2s ease;
  }

  &:hover::after,
  &.active::after {
    transform: scaleX(1);
  }
`;

const SideCategoryLink = styled(CategoryLink)`
  
`;

const Center = styled.div`
flex: 3;
color: black;
display: flex;
text-align: center;
align-items: center;
${tablet({ flex: 2, fontSize: "1rem"})}
`;

const Logo = styled(Link)`
  font-weight: bold;
  font-size: clamp(2rem, 4.5vw, 4rem);
  margin: auto;
  font-family: ${({ theme }) => theme.font.logo};
  color: black;
  text-decoration: none;
  `;

const Right = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
align-items: center;
font-family: ${({ theme }) => theme.font.heading};
column-gap: 10px;
${tablet({flex: 3})}

`;

const Registration = styled.div`
  display: none;
  column-gap: 10px;
  ${tablet({display: "flex"})};
`;

const SideRegistration = styled(CategoryLink)`

`;

const RegDiv = styled(CategoryLink)`
  text-transform: uppercase;
`;

const MenuItem = styled.div`
  font-size: clamp(14px, 3.5vw 1.5rem);
  cursor: pointer;
  color: black;
  transition: all 0.2s ease;

  &:hover {
    text-decoration: underline;
    transform: scale(1.2);
  }
`;

const SideCloseItem = styled(MenuItem)`
  align-self: flex-end;
`;

const SideMenuItem = styled(MenuItem)`
  
`;

const SideNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${tablet({display: "none"})};
  position: absolute;
  top: 0;
  z-index: 10;
  height: 100vh;
  width: 100%;
  background-color: gray;
`;

const Hr = styled.hr`
    background-color: lightgray;
    border: none;
    height: 1px;
    width: 100%;
    margin: 1rem;
`;

const Navbar = () => {
  const [sideNav, setSideNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const openSearch = () => {
    setShowSearch(current => !current)
  }

  return (
    <Container sideNav={sideNav}>
      <Wrapper>
        <Left>
          <CategoryList>
            <CategoryLink to="/women">Women</CategoryLink>
            <CategoryLink to="/men">Men</CategoryLink>
            <CategoryLink to="/accesory">Accesories</CategoryLink>
            <CategoryLink to="/kids">Kids</CategoryLink>
          </CategoryList>
          <HideIconDiv>
            <MenuItem onClick={() => {
              setSideNav((current) => !current);
            }}>
              {sideNav ? <Close /> : <Menu />}
            </MenuItem>
            <MenuItem>
              <FavoriteBorder />
            </MenuItem>
          </HideIconDiv>
        </Left>

        <Center>
            <Logo to="/">lil-Tibet</Logo>
        </Center>

        <Right>
          <Registration>
            <RegDiv to="/login">Sign In</RegDiv>
          </Registration>
          <IconDiv marginRight>
            <MenuItem onClick={openSearch}>
              <Search />
            </MenuItem>
            <Link to="/cart">
              <MenuItem>
                <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
                </Badge>
              </MenuItem>
            </Link>
          </IconDiv>
        </Right>
      </Wrapper>
      <SearchBox showSearch={showSearch} setShowSearch={setShowSearch}/>

      {sideNav && (
        <SideNav>
          <SearchBox showSearch={showSearch} setShowSearch={setShowSearch}/>
          <SideWrapper>
            <SideCloseItem onClick={() => {
              setSideNav((current) => !current);
            }}>
              {sideNav ? <Close /> : <Menu />}
            </SideCloseItem>

            <Hr />
            <SideRegistration to="/login">Sign In / Create an Account</SideRegistration>

            <Hr />

            <CategoryDiv>
              <SideCategoryList>
                <SideCategoryLink to="/women">Women</SideCategoryLink>
                <SideCategoryLink to="/men">Men</SideCategoryLink>
                <SideCategoryLink to="/accesory">Accesories</SideCategoryLink>
                <SideCategoryLink to="/kids">Kids</SideCategoryLink>
              </SideCategoryList>

                <SideMenuItem onClick={openSearch}>
                  <Search />
                </SideMenuItem>
            </CategoryDiv>
          </SideWrapper>
        </SideNav>
      )
      }
      <Announcement />
    </Container>
  )
}

export default Navbar;