import React from 'react'

const sideDrawer = props => {
    let drawerClasses = 'slide-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Contact Us</a></li>
            </ul>

        </nav>
    )

}



export default sideDrawer;