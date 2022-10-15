import React from 'react';
import Flex from "../atoms/Flex";

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
            <pre>
                <code>
                    {children}
                </code>
           </pre>
        </Flex>
    );
};

export default CodeBlock;
