import React from 'react';
import Flex from "../atoms/Flex";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import {css} from "styled-components";

interface NavItem {
    children: string,
    isActive: boolean,
    onClick: Function
}



const NavItem = (
    {
        children,
        isActive,
        onClick
    }: NavItem
) => {
    return (
        <Flex
            height={'60px'}
        >
            <Button
                isActive={isActive}
                onClick={onClick}
            >
                <Text>
                    {children}
                </Text>
            </Button>
        </Flex>
    );
};

export default NavItem;
