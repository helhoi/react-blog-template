import React, { useState, useEffect} from 'react'
import firebase from './firebase'
import Project from './Project'
import './Projects.css'
import { IoIosAddCircle } from 'react-icons/io'
import {navigate} from '@reach/router'
import ClipLoader from "react-spinners/ClipLoader"
import Masonry from 'react-masonry-css'

const Projects = (props) => {
    const [projects, setProjects] = useState([])


    const addProject = () => {
        firebase.firestore().collection('projects').add(
        
       { title: '0 New project',
        timestamp: firebase.firestore.FieldValue.serverTimestamp()      
}
        )
        .then( doc => navigate('/edit/' + doc.id))
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

            {
                projects.length > 0
                ?
           
                <Masonry
                    breakpointCols = {
                        {
                    default: 3,
                    1300: 2,
                    1100: 1,
                    
                  }
                }

                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {/* array of JSX items */}
             
                {
                    projects.map(
                        project => <Project 
                        key={project.id}
                        data={project.data()}
                        id={project.id}
                        signedIn={props.signedIn}/>
                    )
                }
             </Masonry>
            :
            <ClipLoader />
        }
        </main>
        
    )
}

export default Projects