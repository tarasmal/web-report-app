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
    currLab: number,
    setCurrentLab: Function
}

const NavigationBar = (
    {
        titles,
        currLab,
        setCurrentLab
    }: NavigationBar
) => {
    return (
        <NavStyled
        >
            {
                titles.map((title, id) => <NavItem isActive={currLab === id} onClick={() => {
                    setCurrentLab(id)
                    localStorage.currLab = id
                }} key={id}>{title}</NavItem>)
            }
        </NavStyled>
    );
};

export default NavigationBar;
