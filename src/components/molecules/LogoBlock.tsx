import React from 'react';
import Flex from "../atoms/Flex";
import Logo from "../atoms/Logo";

interface LogoBlock {
    src: any
}

const LogoBlock = ({src}: LogoBlock) => {
    return (
        <Flex
            flexGrow={2}
        >
            <Logo src={src} alt={';)'} width={'500px'} height={'500px'}/>
        </Flex>
    );
};

export default LogoBlock;
