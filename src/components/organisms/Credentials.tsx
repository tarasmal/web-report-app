import React from 'react';
import Flex from "../atoms/Flex";
import Text from "../atoms/Text";
import Img from "../atoms/Img";

interface Credentials {
    title: string,
    photo: string,

}

const Credentials = (
    {
        title,
        photo
    }: Credentials
) => {
    return (
        <Flex

            justifyContent={'center'}
            marginTop={'20px'}
            marginBottom={'20px'}
        >
            <Flex
                width={'fit-content'}
                columnGap={'30px'}
                alignItems={'center'}
            >
                <Text
                    color={'black'}
                >
                    {title}
                </Text>
                <Img src={'credentials/' + photo} alt={'photo'} borderRadius={'30%'} width={'50px'} height={'50px'} />
            </Flex>
        </Flex>
    );
};

export default Credentials;
