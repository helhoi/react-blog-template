import React, { useState, useEffect} from 'react'
import firebase from './firebase'
import Project from './Project'
import './Projects.css'
import { IoIosAddCircle } from 'react-icons/io'

const Projects = (props) => {
    const [projects, setProjects] = useState([])


    const addProject = () => {
        firebase.firestore().collection('projects').add(
        
       { title: '0 New project',
        timestamp: firebase.firestore.FieldValue.serverTimestamp()      
}
        )
        .then( doc => console.log('added document with id', doc.id))
    }
     useEffect( () => {
        firebase
        .firestore()
        .collection('projects')
        .orderBy('title')
        .onSnapshot(
            snapshot => setProjects(snapshot.docs)
        )
    }, [])

    return(
        <main>
           { 
           props.signedIn &&
            <div className='add'>
                <IoIosAddCircle className='edit-icons-add' onClick={addProject} />
            </div>
}
            <div className='projectsContainer'>
                {
                    projects.map(
                        project => <Project 
                        key={project.id}
                        data={project.data()}
                        id={project.id}
                        signedIn={props.signedIn}/>
                    )
                }
            </div>
        </main>
        
    )
}

export default Projects