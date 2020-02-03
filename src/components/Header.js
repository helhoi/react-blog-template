import React, {useState} from 'react'
import { Link } from '@reach/router'
import './Header.css'
import {MdMenu} from "react-icons/md"
import {MdClose} from "react-icons/md"
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
            <div className='burger' onClick={ () => setShow(!show) }>
                {
                show 
                ?
                <MdClose  color ='#8C8987' size='32' />
                :
                <MdMenu  color ='#8C8987' size='32' />
                }
            </div>
            <header className={ show ? 'visible' : ''} onClick={ () => setShow(false)}>
                <Link to={process.env.PUBLIC_URL + '/'} className='navn'>helene næsheim</Link>
                <Link getProps={isPartiallyActive} to={process.env.PUBLIC_URL + '/projects'}>arbeider</Link>
                <Link to={process.env.PUBLIC_URL + '/cv'}>om meg</Link>    
    </header>
    </div>
    )
}

export default Header
