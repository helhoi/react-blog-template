import React, {useState} from 'react'
import { Link } from '@reach/router'
import './Header.css'
import {MdMenu} from "react-icons/md"
import './Header.css'

const Header = (props) => {
    const [show,setShow] = useState(false)

    const isPartiallyActive = ({
        isPartiallyCurrent
    }) => {
        return isPartiallyCurrent 
        ? { className : 'active'}
        : null
    }
    
    return (
        <div className='header-container'>
            <MdMenu className='burger' color ='#8C8987' size='32' onClick={ () => setShow(!show) }/>
            <header className={ show ? 'visible' : ''} onClick={ () => setShow(false)}>
                <Link to='/'><p>Helene Høie</p></Link>
                <Link getProps={isPartiallyActive} to='/projects'>arbeider</Link>
                <Link to='/cv'>om meg</Link>
                <Link to='/login'>
            {
                props.signedIn
                ? 'profile'
                : 'login'
            }   </Link>
    </header>
    </div>
    )
}

export default Header
