import React, {FC} from 'react';
import styled from "styled-components";


interface ImgProps{
    src: string,
    alt: string,
    width?: string
    maxWidth?: string,
    height?: string,
    position?: string,
    right?: string,
    marginBottom?: string,
    top?: string,
    justifySelf?: string,
    alignSelf?: string,
    left?: string,
    borderRadius?: string,
}

const StyledImg = styled.img<ImgProps>`
  width: ${props => props.width};
  max-width: ${props => props.maxWidth};
  height: ${props => props.height};
  position: ${props => props.position || 'relative'};
  right: ${props => props.right};
  margin-bottom: ${props => props.marginBottom};
  top: ${props => props.top};
  left: ${props => props.left};
  justify-self: ${props => props.justifySelf};
  align-self: ${props => props.alignSelf};
  border-radius: ${props => props.borderRadius};
`

const Img: FC <ImgProps> = ({src, alt, ...props}) => {
    return (
        <StyledImg
            src={'content/' + src}
            alt={alt}
            {...props}
        />
    );
};

export default Img;
