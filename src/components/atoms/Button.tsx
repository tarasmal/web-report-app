import React, {MouseEventHandler} from 'react';
import styled from "styled-components";

interface Button {
    children: string | React.ReactNode,
    onClick: MouseEventHandler<HTMLButtonElement> | any,
}

interface StyledButton {
    width?: string | 'fit-content',
    height?: string,
    justifyContent?: string | 'center',
    alignItems?: string | 'center',
    backgroundColor?: string,
}

const StyledButton = styled.button<StyledButton>`
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  width: ${props => props.width};
  border-radius: 20px;
  border: 2px solid  #3a9de8;
  background-color: white;
  transition-duration: 0.4s;

  &:hover {
    transition-duration: 0.4s;
    background-color: #3a9de8;
    color: white;
  }

  color: grey;
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
            {children}
        </StyledButton>
    );
};

export default Button;
