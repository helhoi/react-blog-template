import React, {useState} from 'react'
import './Project.css'
import {MdDelete} from "react-icons/md"
import {FaCode} from "react-icons/fa"
import firebase from './firebase'
import {Link, navigate } from '@reach/router'
import parse from 'html-react-parser'

const Project = (props) => {

    const [activeProject, setActiveProject] = useState(false)

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
            {
                props.data.defaultImage &&
                <img onClick={ () => navigate('/projects/' + props.id)} src={props.data.defaultImage} alt='default'/>
            }
            <h4>{props.data.title}</h4>

            <div className='year'>
                { props.data.year }
            </div>

            <div className='byline'>
                { props.data.byline}
            </div>
            <Link to={'/projects/' + props.id}></Link>
            {
               props.data.color && <p>farge: {props.data.color}</p>
            }
            {
                props.signedIn && 
                <div className='admin-icons'>
                    <Link to={'/edit/' + props.id} >
                    <FaCode  className='edit-icons'/>
                    </Link>
                   
                    <MdDelete onClick={deleteProject} className='edit-icons'/>
                                
        </div>
}
</div>
    )
}
export default Project