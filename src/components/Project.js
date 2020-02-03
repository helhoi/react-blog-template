import React, {useState} from 'react'
import './Project.css'
import {MdDelete} from "react-icons/md"
import {FaCode} from "react-icons/fa"
import firebase from './firebase'
import {Link, navigate } from '@reach/router'

const Project = (props) => {

    const deleteProject = () => {
        if(window.confirm('sure')){
            firebase.firestore()
            .collection('projects')
            .doc(props.id)
            .delete()
            .then( ref => console.log('Document was deleted'))
            .catch( error => console.log(error))
        }
    }

   
    return(
        <div className='project'>
            <div className='bilde' onClick={() => navigate('/projects/' + props.id)}>
            {
                props.data.defaultImage && 
                <img src={props.data.defaultImage} alt='cover' />
            }
            </div>
            <div className='project-title'>
                <div>{props.data.title}</div>
            </div>
            {
                props.signedIn && 
                <div className='admin-icons'>
                    <Link to={process.env.PUBLIC_URL +  '/edit/' + props.id} >
                        <FaCode  className='edit-icons'/>
                    </Link>
                   
                    <MdDelete onClick={deleteProject} className='edit-icons'/>
                                
        </div>
}
</div>
    )
}
export default Project