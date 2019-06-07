import React, { useState } from 'react'
import { Menu, Segment, Button } from 'semantic-ui-react'

const Navbar = () => {
    const [activeItem, setActiveItem] = useState('editorials')
    
    return (
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Menu.Item header>Cellfie</Menu.Item>
            <Menu.Item
            name='editorials'
            active={activeItem === 'editorials'}
            onClick={(e) => setActiveItem('editorials')}
            >
            Editorials
            </Menu.Item>

            <Menu.Item 
            name='reviews' 
            active={activeItem === 'reviews'} 
            onClick={e => setActiveItem('reviews')}
            >
            Reviews
            </Menu.Item>

            <Menu.Item
            name='upcomingEvents'
            active={activeItem === 'upcomingEvents'}
            onClick={e => setActiveItem('upcomingEvents')}
            >
            Upcoming Events
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Button primary>Sign up</Button>
                </Menu.Item>

                <Menu.Item>
                    <Button>Log-in</Button>
                </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Segment>
    )
}

export default Navbar