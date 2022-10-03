import React from 'react';
import {Item} from '../../types'
import styled from "styled-components";
import SidebarItem from "../atoms/SidebarItem";
import Flex from "../atoms/Flex";

interface Sidebar {
    content: Item[]
}

const StyledSidebar = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  width: 25%;
`

const Sidebar = (
    {
        content
    }: Sidebar
) => {
    return (
        <Flex
            width={'25%'}
        >
            <StyledSidebar
            >
                {
                    content.map(({header}) =><SidebarItem>{header}</SidebarItem>)
                }
            </StyledSidebar>
        </Flex>

    );
};

export default Sidebar;
