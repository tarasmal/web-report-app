import React from 'react';
import styled from "styled-components";
import NavItem from "../molecules/NavItem";


const NavStyled = styled.div
`
  display: flex;
  justify-content: space-between;
  border-radius: 25px;
  width: 100%;
  height: 50px;
  background-color: white;
  column-gap: 10px;
  
`

interface NavigationBar {
    titles: string[],
}

const NavigationBar = (
    {
        titles
    }: NavigationBar
) => {
    return (
        <NavStyled
        >
            {
                titles.map((title, id) => <NavItem key={id}>{title}</NavItem>)
            }
        </NavStyled>
    );
};

export default NavigationBar;
