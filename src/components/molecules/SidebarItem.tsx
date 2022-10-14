import React from 'react';
import styled from "styled-components";
import Text from '../atoms/Text'

import config from "../../config.json"

interface SidebarItem {
    href?: string,
    nestedLevel?: number,

    children: React.ReactNode,
}

const StyledSidebarItem = styled.a<SidebarItem>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px 30px;
  border: 2px solid ${config.main_color};
  border-radius: 20px;
  transition-duration: 0.2s;

  text-decoration: none;
  color: black;

  width: calc(40% - ${props => props.nestedLevel ? (props.nestedLevel * 45).toString().concat('px') : '0px'});
  margin-left: ${props => props.nestedLevel ? (props.nestedLevel * 45).toString().concat('px') : '0px'};

  &:hover {
    transition-duration: 0.2s;
    background-color: ${config.main_color};
    color: white;
    cursor: pointer;
  }
`

const SidebarItem = (
    {
        children,
        href,
        ...props
    }: SidebarItem
) => {
    return (
        <StyledSidebarItem
            href={href}
            {...props}
        >
            <Text
                fontWeight='400'
                overflowWrap={'break-word'}
                wordBreak={'break-word'}
            >
                {children}
            </Text>
        </StyledSidebarItem>
    );
};

export default SidebarItem;
