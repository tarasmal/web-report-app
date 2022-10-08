import React from 'react';
import styled from "styled-components";

interface Anchor {
    id: string,
}

const StyledAnchor = styled.span<Anchor>`
    display: block;
    position: relative;
    top: -200px;
    visibility: hidden;
`

const Anchor = (
    {
        id,
    }: Anchor
) => {
    return (
        <StyledAnchor
            id={id}
        >
        </StyledAnchor>
    );
};

export default Anchor;
