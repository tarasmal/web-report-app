import React from 'react';
import Flex from "../atoms/Flex";
import Img from "../atoms/Img";

interface ImgBlock {
    src: string
}

const ImgBlock = ({src}: ImgBlock) => {
    return (
        <Flex
            flexGrow={2}
            marginBottom={'15px'}
        >
            <Img src={src} alt={''} maxWidth={'500px'}/>
        </Flex>
    );
};

export default ImgBlock;
