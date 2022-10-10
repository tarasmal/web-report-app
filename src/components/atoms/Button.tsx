import React from 'react';
import styled, {css} from "styled-components";
import Text from "./Text";

interface Button  {
    children: string | React.ReactNode,
    onClick: any,
    isActive: boolean,
}

interface StyledButton {
    width?: string ,
    height?: string,
    justifyContent?: string,
    alignItems?: string,
    backgroundColor?: string,
    isActive: boolean,
}

const activeStyle = css`
  background-color: #3a9de8;
`
const StyledButton = styled.button<StyledButton>`
  display: flex;
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  width: ${props => props.width || 'fit-content'};
  border-radius: 20px;
  border: 2px solid  #3a9de8;
  background-color: white;
  transition-duration: 0.4s;

  &:hover {
    transition-duration: 0.4s;
    background-color: #3a9de8;
    color: white;
    cursor: pointer;
  }
  ${props => props.isActive && activeStyle};

  color: black;
`

const Button = (
    {
        isActive,
        children,
        onClick,
        ...props

    }: Button
) => {
    return (
        <StyledButton
            isActive={isActive}
            onClick={onClick}
            {...props}
        >
            <Text
                fontWeight={'500'}
                overflowWrap={'hidden'}
                color={isActive ? 'white' : undefined}
            >
                {children}
            </Text>
        </StyledButton>
    );
};

export default Button;
