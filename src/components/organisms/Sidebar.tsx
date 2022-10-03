import React from 'react';
import {Item} from '../../types'
import styled from "styled-components";
import SidebarItem from "../atoms/SidebarItem";

interface Sidebar {
    content: Item[]
}

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 2;
  padding: 5px;
`

const Sidebar = (
    {
        content
    }: Sidebar
) => {
    return (
        <StyledSidebar
        >
            {
                content.map(({header}) =><SidebarItem>{header}</SidebarItem>)
            }
        </StyledSidebar>
    );
};

export default Sidebar;
