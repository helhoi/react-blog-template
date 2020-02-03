import React from 'react'
import './Cv.css'

const Cv = () => {
    return(
        <main className='about'>
            <div className='profile-text'>
                <h1><span>ui/ux</span>designer</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p><a href='mailto:helenehoie@gmail.com'>helenehoie@gmail.com</a>+47 928 83 244</p>
                <a href="https://www.linkedin.com/in/helenehoienaesheim/" target="_blank">linkedin</a>
            </div>
            <img src='../images/helene.jpeg' alt='avatar' />
        </main>
    )
}

export default Cv