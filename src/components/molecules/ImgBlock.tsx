import React from 'react';
import Flex from "../atoms/Flex";
import Logo from "../atoms/Logo";

interface ImgBlock {
    src: string
}

const ImgBlock = ({src}: ImgBlock) => {
    return (
        <Flex
            flexGrow={2}
            marginBottom={'15px'}
        >
            <Logo src={src} alt={':D'} width={'500px'} height={'500px'}/>
        </Flex>
    );
};

export default ImgBlock;
