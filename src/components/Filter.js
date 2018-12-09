import React from 'react';
import { Input, Menu } from 'semantic-ui-react';

class Filter extends React.Component {
    handleItemClick(e, { name }) {
        const {setFilter} = this.props;
        setFilter(name);
    }
    render() {
        const {filterBy} = this.props;
        return (
            <React.Fragment>
                <h1>Фильтры</h1>
            <Menu secondary>
                <Menu.Item
                    name='all' active={filterBy === 'all'}
                    onClick={this.handleItemClick.bind(this)}
                >Все</Menu.Item>
                {/* <Menu.Item
                    name='popular'
                    active={filterBy === 'popular'}
                    onClick={this.handleItemClick.bind(this)}
                >Популярные</Menu.Item> */}
                <Menu.Item
                    name='price_high'
                    active={filterBy === 'price_high'}
                    onClick={this.handleItemClick.bind(this)}
                >Дорогие</Menu.Item>
                {/* <Menu.Menu position='right'> */}
                {/* <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item> */}
                {/* </Menu.Menu> */}
                <Menu.Item
                    name='price_low'
                    active={filterBy === 'price_low'}
                    onClick={this.handleItemClick.bind(this)}
                >Дешевые</Menu.Item>
                <Menu.Item
                    name='author'
                    active={filterBy === 'author'}
                    onClick={this.handleItemClick.bind(this)}
                >Автор</Menu.Item>
            </Menu>
            </React.Fragment>
        );
    }

};

export default Filter;