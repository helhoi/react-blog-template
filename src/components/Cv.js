import React from 'react'
import './Cv.css'

const Cv = () => {
    return(
        <main className='about'>
            <div className='profile-text'>
                <h1><span>UI/UX</span>designer</h1>
                <p>UI/UX designer som elsker å utforme det visuelle grensesnittet og den logiske tenkningen rundt front-end. Jeg elsker å jobbe med hele designprosessen fra start til slutt. </p>

                <p className='space-between'>Du kan kontakte meg på <a href='mailto:helenehoie@gmail.com'>helenehoie@gmail.com</a> eller så finner du meg også på <a href="https://www.linkedin.com/in/helenehoienaesheim/" target="_blank">linkedin</a></p>
            </div>
            <img src={process.env.PUBLIC_URL + '/images/heleneserine.jpg'} alt='avatar' />
        </main>
    )
}

export default Cv