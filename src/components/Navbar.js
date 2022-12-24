import Badge from '@mui/material/Badge';
import {FavoriteBorder, Menu, Search, ShoppingCartOutlined} from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { tablet } from "../responsive"

 const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.mustard};
    padding: 10px 5px 10px 0;

`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: auto;
`;

const Left = styled.div`
  flex: 1;
  align-items: center;
  font-family: ${({ theme }) => theme.font.heading};
  ${tablet({flex: 3})}

`;

const IconDiv = styled.div`
  display: flex;
  column-gap: 5px;
  align-items: center;
  margin-right: ${props=> props.marginRight ? '5px' : null };
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
const CategoryLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  transition-property: text-decoration;
  transition-duration: 2s;
  transition-timing-function: ease;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;


export const Center = styled.div`
flex: 3;
color: black;
display: flex;
text-align: center;
align-items: center;
${tablet({ flex: 2, fontSize: "1rem"})}
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: clamp(2rem, 4.5vw, 4rem);
  margin: auto;
  font-family: ${({ theme }) => theme.font.logo};

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

const RegDiv = styled(CategoryLink)`

`;

const MenuItem = styled.div`
  font-size: clamp(14px, 3.5vw 1.5rem);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    transform: scale(1.2);
  }

`;


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <CategoryList>
            <CategoryLink>Women</CategoryLink>
            <CategoryLink>Men</CategoryLink>
            <CategoryLink>Home</CategoryLink>
            <CategoryLink>Kids</CategoryLink>
          </CategoryList>
          <HideIconDiv>
            <MenuItem>
              <Menu />
            </MenuItem>
            <MenuItem>
              <FavoriteBorder />
            </MenuItem>
          </HideIconDiv>
        </Left>
        <Center>
          <Logo>lil-Tibet</Logo>
        </Center>
        <Right>
          <Registration>
            <RegDiv>REGISTER</RegDiv>
            <RegDiv>SIGN IN</RegDiv>
          </Registration>
          <IconDiv marginRight>
            <MenuItem>
              <Search />
            </MenuItem>
            <MenuItem>
              <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </IconDiv>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar;