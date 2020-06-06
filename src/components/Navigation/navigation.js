import React from 'react'
import DrawerToggle from '../SideDrawer/DrawerToggle';

const navigation = props => (
    <header className='toolbar'>

        <nav className="toolbar_navigation">
            <div className='toolbar_toggle-button'>
                <DrawerToggle click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"><a href='/'>Code Test</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Contact Us</a></li>
                </ul>
            </div>
        </nav>
    </header>
)




export default navigation;