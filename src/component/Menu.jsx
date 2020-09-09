import React, { Component } from 'react'
import { Dropdown, Menu, Form } from 'semantic-ui-react'
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

        {/* <Menu.Item>
          <Dropdown placeholder="category" clearable options={[
            { key: 1, text: 'Choice 1', value: 1 },
            { key: 2, text: 'Choice 2', value: 2 },
            { key: 3, text: 'Choice 3', value: 3 },
          ]} selection />
        </Menu.Item> */}

        {/* <Menu.Item>
          <Form.Input
            label={`5000 pts `}
            min={100}
            max={2000}
            name='duration'
            // onChange={this.handleChange}
            step={100}
            type='range'
            // value={duration}
            value={200}
          />
        </Menu.Item> */}

        <Menu.Menu position='right'>
          <Dropdown clearable item text='Redeem'>
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