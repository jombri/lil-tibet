import Badge from '@mui/material/Badge';
import {FavoriteBorder, Menu, Search, ShoppingCartOutlined} from '@mui/icons-material';
// import { FavoriteBorder, Menu, Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { laptop, mobile, tablet } from "../responsive"

 const Container = styled.div`
    /* height: 4rem; */
    width: 100%;
    /* font-size: 2rem; */
    background-color: ${({ theme }) => theme.colors.mustard};
    display: flex;
    padding: 5px 0;

    /* ${mobile({height: "50px"})} */
`;
const Wrapper = styled.div`
  /* padding: 10px 20px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: auto;
  /* ${mobile({padding: "10px 0"})} */

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.font.heading};
  /* font-size: 3rem; */
  // margin-left: 20px;
`;

const IconDiv = styled.div`
  /* ${tablet({display: "flex"})} */
  display: flex;
  column-gap: 5px;
  align-items: center;
  margin-right: ${props=> props.marginRight ? '5px' : null };
  /* ${tablet({display: "none"})} */
  /* ${laptop({fontSize: '2rem'})} */
`;

const HideIconDiv = styled(IconDiv)`
  /* display: flex; */
  ${tablet({display: "none"})}
`;
/* const IconDiv = styled.div`
  ${tablet({display: "flex"})}
  display: flex;
  column-gap: 5px;
  align-items: center;
  margin-right: ${props=> props.marginRight ? '5px' : null };
  ${tablet({display: "none"})}
`;  */

const CategoryList = styled.li`
  list-style-type: none;
  display: none;
  column-gap: 1rem;
  ${tablet({display: "flex"})}
`;
const CategoryLink = styled.a`
  text-transform: uppercase;
  /* text-decoration: none; */
  /* transition: all 2s ease; */

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;


export const Center = styled.div`
flex: 3;
color: black;
/* font-size: 3rem; */
display: flex;
text-align: center;
align-items: center;
${tablet({flex: 1})}
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: clamp(2rem, 4.5vw, 4rem);
  margin: auto;
  font-family: ${({ theme }) => theme.font.logo};
  /* ${tablet({display: "none"})} */

  /* font-size: 3rem; */
  /* ${mobile({fontSize: "1.5rem"})} */

  `;

const Right = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
align-items: center;
font-family: ${({ theme }) => theme.font.heading};
column-gap: 20px;
/* ${mobile({justifyContent: "center", flex: 2})} */

`;

const Registration = styled.div`
  display: none;
  column-gap: 20px;
  /* ${mobile({display: "none"})} */
  ${tablet({display: "flex"})};
`;

const MenuItem = styled.div`
  /* font-size: 14px; */
  font-size: clamp(14px, 3.5vw 1.5rem);
  /* ${laptop({fontSize: "1.5rem"})} */
  cursor: pointer;
  /* transition: all 0.2s ease-in-out; */
  /* color: white; */

  &:hover {
    /* color: crimson; */
    /* transform: scale(1.3); */
    text-decoration: underline;
  }
  /* margin-left: 25px; */
  /* ${mobile({fontSize: "12px", marginLeft: "10px"})} */

`;


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          {/* <Logo>
            lil Tibet
          </Logo> */}
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
          {/* <SearchContainer>
            <Input placeholder='search'/> 
            <Search />
          </SearchContainer> */}
          {/* <Language>EN</Language> */}
        </Center>
        <Right>
          <Registration>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
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