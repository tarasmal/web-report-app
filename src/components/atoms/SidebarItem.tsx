import React from 'react';
import styled from "styled-components";
import Text from './Text'

interface SidebarItem {
    href?: string,
    marginLeft?: string,

    children: React.ReactNode,
}
const StyledSidebarItem = styled.a<SidebarItem>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  padding: 5px 60px;
  border: 2px solid #3a9de8;
  border-radius: 20px;
  transition-duration: 0.2s;

  text-decoration: none;
  color: black;

  &:hover {
    transition-duration: 0.2s;
    background-color: #3a9de8;
    color: white;
    cursor: pointer;
  }

  margin-left: ${props => props.marginLeft};
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
            >
                {children}
            </Text>
        </StyledSidebarItem>
    );
};

export default SidebarItem;
