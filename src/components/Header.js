import React from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { Link } from 'react-scroll'

import './Header.css'

const Header = () => {
    return (
        <div id='header'>
            <Menu>
                <Menu.Item header>Damien's portfolio</Menu.Item>
                <Menu.Item position='right'>
                    <a href='https://github.com/damnee562/portfolio' rel='noopener noreferrer'>
                        <Button circular color='black' icon='github alternate' size='huge' />
                    </a>
                </Menu.Item>
            </Menu>

            <Link spy smooth className='scroll' activeClass='active' to='test'>
                <span className='scroll-icon'></span>
                <span className='scroll-icon'></span>
                <span className='scroll-icon'></span>Scroll
            </Link>
        </div>
    )
}


export default Header
