import React from 'react'
import { Link } from '@reach/router'
import './Header.css'

const Header = (props) => {
    return (
    <header>
        <Link to='/'>projects</Link>
        <Link to='/contact'>contact</Link>
        <Link to='/cv'>cv</Link>
        <Link to='/login'>
            {
                props.signedIn
                ? 'profile'
                : 'login'
            }</Link>
    </header>
    )
}

export default Header
