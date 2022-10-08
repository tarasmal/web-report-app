import React from 'react';
import Flex from "../atoms/Flex";
import Text from "../atoms/Text";

interface CodeBlock {
    children: string
}

const CodeBlock = (
    {
        children
    }: CodeBlock) => {
    return (
        <Flex
            flexGrow={2}
            backgroundColor={'#d9d9d9'}
            borderRadius={'10px'}
            padding={'15px'}
            justifyContent={'center'}
            alignItems={'center'}
            width={'fit-content'}
            marginBottom={'6px'}
        >
            <Text>
               {children}
           </Text>
        </Flex>
    );
};

export default CodeBlock;
