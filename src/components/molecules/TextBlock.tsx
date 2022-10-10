import React from 'react';
import Flex from "../atoms/Flex";
import Text from "../atoms/Text";

interface TextBlock {
    children: string
    textColor?: string,
}

const TextBlock = ({children, textColor}: TextBlock) => {
    return (
        <Flex
            flexGrow={1}
            marginBottom={'4px'}
        >
            <Text
                color={textColor ? textColor : 'black'}
                overflowWrap={'break-word'}
                wordBreak={'break-word'}
            >
               {children}
           </Text>
        </Flex>
    );
};

export default TextBlock;
