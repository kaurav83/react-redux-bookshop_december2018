import React from 'react';
import { Menu } from 'semantic-ui-react'

const MenuBar = ({ bookTitle }) => {
    const handleItemClick = () => {
        return true
    }
    return (
        <Menu pointing vertical>
            <Menu.Item 
                name='home' 
                // active={activeItem === 'home'} 
                onClick={handleItemClick} 
            >Книжный магазин</Menu.Item>
            <Menu.Item
                name='messages'
                onClick={handleItemClick}
            >Итого: &nbsp;<b>0</b>грн.&nbsp;</Menu.Item>
            <Menu.Item
                name='friends'
                onClick={handleItemClick}
            >Корзина &nbsp;<b>0</b></Menu.Item>
        </Menu>
    );
};

export default MenuBar;