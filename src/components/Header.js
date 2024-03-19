import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import logo1 from '../images/logo1.png'
import Nav from './Nav';

const Header = () => {




  return (<MainHeader>
    <NavLink to="/">
      <img src={logo1} alt='logo'></img>

    </NavLink>
    <Nav />


  </MainHeader>)

}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .img {
    height: 1rem;
    width:1rem;

  }
`;

export default Header