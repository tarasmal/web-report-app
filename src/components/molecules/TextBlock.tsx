import React from 'react';
import Flex from "../atoms/Flex";
import Text from "../atoms/Text";
import {isContext} from "vm";

interface TextBlock {
    children: string
    textColor?: string,
}

const TextBlock = ({children, textColor}: TextBlock) => {
    console.log(textColor)
    return (
        <Flex
            flexGrow={1}
        >
            <Text
                color={textColor ? textColor : 'black'}
            >
               {children}
           </Text>
        </Flex
            >
    );
};

export default TextBlock;
