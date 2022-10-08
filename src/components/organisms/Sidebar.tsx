import React from 'react';
import {Item} from '../../types'
import styled from "styled-components";
import SidebarItem from "../molecules/SidebarItem";
import Flex from "../atoms/Flex";

interface Sidebar {
    content: Item[]
}

const StyledSidebar = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 30px;
  row-gap: 10px;
  width: 25%;
`

const getSidebarItems = (content: Item[]) => {
    const headers : JSX.Element[] = []

    const _getSidebarItems = (items: Item[], nestedLevel: number) => {
        items.forEach((item, index) => {
            headers.push(
                <SidebarItem
                    href={`#l${nestedLevel}-n${index}`}
                    marginLeft={(nestedLevel * 30).toString().concat('px')}
                >
                    {item.header}
                </SidebarItem>
            )
            if(item.subcontent) _getSidebarItems(item.subcontent, nestedLevel + 1)
        })
    }

    _getSidebarItems(content, 0)
    return headers
}

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
                    getSidebarItems(content)
                }
            </StyledSidebar>
        </Flex>

    );
};

export default Sidebar;
