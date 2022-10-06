import React, {MouseEventHandler} from 'react';
import styled from "styled-components";
import Text from "./Text";

interface Button {
    children: string | React.ReactNode,
    onClick: MouseEventHandler<HTMLButtonElement> | any,
}

interface StyledButton {
    width?: string ,
    height?: string,
    justifyContent?: string,
    alignItems?: string,
    backgroundColor?: string,
}

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

  color: black;
`

const Button = (
    {
        children,
        onClick,
        ...props

    }: Button
) => {
    return (
        <StyledButton
            onClick={onClick}
            {...props}
        >
            <Text
                fontWeight={'500'}
            >
                {children}
            </Text>
        </StyledButton>
    );
};

export default Button;
