import React, { useState } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

const Navbar = () => {
    const [activeItem, setActiveItem] = useState('landing')
    
    return (
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Menu.Item
            name='landing'
            active={activeItem === 'landing'}
            onClick={(e) => setActiveItem('landing')}
            >
            Cellfie
            </Menu.Item>
            <Menu.Item
            name='downloadTestDataset'
            active={activeItem === 'downloadTestDataset'}
            onClick={(e) => setActiveItem('downloadTestDataset')}
            >
            Download Test Dataset
            </Menu.Item>

            <Menu.Item 
            name='exampleResults' 
            active={activeItem === 'exampleResults'} 
            onClick={e => setActiveItem('exampleResults')}
            >
            Example Results
            </Menu.Item>

            <Menu.Item
            name='documentation'
            active={activeItem === 'documentation'}
            onClick={e => setActiveItem('documentation')}
            >
            Documentation
            </Menu.Item>

            <Menu.Item
            name='contact'
            active={activeItem === 'contact'}
            onClick={e => setActiveItem('contact')}
            >
            Contact Us
            </Menu.Item>

            <Menu.Item
            name='reportBug'
            active={activeItem === 'reportBug'}
            onClick={e => setActiveItem('reportBug')}
            >
            Report a Bug
            </Menu.Item>
          </Menu>
        </Segment>
    )
}

export default Navbar