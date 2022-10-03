import React from 'react';
import styled from "styled-components";

interface SidebarItem {
    children: React.ReactNode,
}
const StyledSidebarItem = styled.div`
  display: flex;
  justify-content: center;
  width: 10%;
`

const SidebarItem = (
    {
        children
    }: SidebarItem
) => {
    return (
        <StyledSidebarItem>
            {children}
        </StyledSidebarItem>
    );
};

export default SidebarItem;
