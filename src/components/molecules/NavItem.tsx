import React from 'react';
import Flex from "../atoms/Flex";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

interface NavItem {
    children: string,
}

const NavItem = (
    {
        children
    }: NavItem
) => {
    return (
        <Flex
            marginLeft={'30px'}
            height={'60px'}
        >
            <Button
                onClick={() => {}}
            >
                <Text>
                    {children}
                </Text>
            </Button>
        </Flex>
    );
};

export default NavItem;
