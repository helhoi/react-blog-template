import React, { useState, useEffect} from 'react'
import firebase from './firebase'
import Project from './Project'
import './Projects.css'
import { IoIosAddCircle } from 'react-icons/io'
import {navigate} from '@reach/router'
import ClipLoader from "react-spinners/ClipLoader"

const Projects = (props) => {
    


    const addProject = () => {
        firebase.firestore().collection('projects').add(
        
       { title: '0 New project',
        timestamp: firebase.firestore.FieldValue.serverTimestamp()      
}
        )
        .then( doc => navigate(process.env.PUBLIC_URL + '/edit/' + doc.id))
    }
     

    return(
        <main className='projects'>
           { 
           props.signedIn &&
            <div className='add'>
                <IoIosAddCircle className='edit-icons-add' onClick={addProject} />
            </div>
}

            {
                props.projects.length > 0
                ?             
                <div className='projectsContainer'>
                    {
                        props.projects.map(
                            project => <Project 
                            key={project.id}
                            data={project.data()}
                            id={project.id}
                            signedIn={props.signedIn}/>
                        )
                    }
                </div>
            :
            <ClipLoader />
        }
        </main>
        
    )
}

export default Projects