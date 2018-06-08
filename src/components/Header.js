import React from 'react'
import { Container, Menu } from 'semantic-ui-react'
import { Link } from 'react-scroll'

import './Header.css'

const Header = () => {
    return (
        <Container id='header' fluid>
            <Menu boderless stackable>
                <Menu.Item header>Damien's portfolio</Menu.Item>
            </Menu>

            <Link spy smooth className='scroll' activeClass='active' to='body'>
                <span className='scroll-icon'></span>
                <span className='scroll-icon'></span>
                <span className='scroll-icon'></span>Scroll
            </Link>
        </Container>
    )
}


export default Header
