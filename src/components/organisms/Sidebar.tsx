import React from 'react';
import {Item} from '../../types'
import Flex from "../atoms/Flex";
import {v4} from "uuid";

interface Sidebar {
    content: Item[]
}

const Sidebar = (
    {
        content
    }: Sidebar
) => {
    return (
        <Flex
            flexDirection={'column'}
        >
            {
                content.map((contentItem) => <div key={v4()}></div>,)
            }
        </Flex>
    );
};

export default Sidebar;
