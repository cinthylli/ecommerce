import React, { Component } from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import Search from './Search'

export default class MenuExampleSizeMassive extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu color="violet" inverted size='massive'>

        <Menu.Item
          name='Products'
          active={activeItem === 'Products'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='History'
          active={activeItem === 'History'}
          onClick={this.handleItemClick}
        />
        <Menu.Item>
          <Search />
        </Menu.Item>

        <Menu.Menu position='right'>
          <Dropdown item text='Redeem'>
            <Dropdown.Menu>
              <Dropdown.Item>1.000</Dropdown.Item>
              <Dropdown.Item>3.000</Dropdown.Item>
              <Dropdown.Item>5.000</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item>
            Julia
            5000
                <img src='/logo.png' />

          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}