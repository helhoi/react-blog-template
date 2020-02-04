import React from 'react'
import './Cv.css'

const Cv = () => {
    return(
        <main className='about'>
            <div className='profile-text'>
                <h1><span>ui/ux</span>designer</h1>
                <p>Hallo, Helene her - jeg er en designer som liker godt den logiske tenkningen, samt den visuelle utformingen. Bla bla bla.</p>

                <p className='space-between'>Du kan kontakte meg på<a href='mailto:helenehoie@gmail.com'>helenehoie@gmail.com</a>
                eller så finner du meg også på<a href="https://www.linkedin.com/in/helenehoienaesheim/" target="_blank">linkedin</a></p>
            </div>
            <img src={process.env.PUBLIC_URL + '/images/heleneserine.jpg'} alt='avatar' />
        </main>
    )
}

export default Cv