import React, {useState, useEffect} from 'react'
import './Project.css'
import firebase from './firebase'
import {Link } from '@reach/router'
import parse from 'html-react-parser'

const ProjectDetails = (props) => {
    const[project, setProject] = useState()

   useEffect( () => {
            firebase
            .firestore()
            .collection('projects')
            .doc(props.id)
            .onSnapshot( 
               snapshot => setProject(snapshot.data())
           )
        }, [])

   return(
       <main className='project-details'>
           {
            project
            ?
        <div>
            {
                project.defaultImage &&
                <img src={project.defaultImage} alt='default'/>
            }
            <h4>{project.title}</h4>

            <div className='year'>
                { project.year}
            </div>

            <div className='description'>
                {project.description && parse(project.description )}
            </div>
            
           </div>
           :
           <h2>Fetching projects, hold on</h2>
        }
           </main>
   
    )
}
export default ProjectDetails