import React from 'react';
import Anchor from '../atoms/Anchor';
import Flex from "../atoms/Flex";
import Text from "../atoms/Text";

interface HeaderBlock {
    children: string,
    anchor: string,
}

const HeaderBlock = (
    {
        children,
        anchor,
    }: HeaderBlock) => {
    return (
        <Flex
            marginBottom={'10px'}
        >
            <Anchor id={anchor}/>
            <Text
                fontSize='30px'
                overflowWrap={'break-word'}
                wordBreak={'break-word'}
            >
               {children}
           </Text>
        </Flex>
    );
};

export default HeaderBlock;
