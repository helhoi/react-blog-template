import React, {useState, useEffect} from 'react'
import './Project.css'
import firebase from './firebase'
import {Link } from '@reach/router'
import parse from 'html-react-parser'
import './ProjectDetails.css'

const ProjectDetails = (props) => {
    window.scrollTo(0,0)

    const[project, setProject] = useState()
    const[prev,setPrev] = useState()
    const[next,setNext] = useState()

   useEffect( () => {
            firebase
            .firestore()
            .collection('projects')
            .doc(props.id)
            .onSnapshot( 
               snapshot => setProject(snapshot.data())
           )
        }, [props.id])

        useEffect( () => {
            firebase
            .firestore()
            .collection('projects')
            .orderBy('title')
            .get()
            .then( projects => {
                const array = projects.docs.map( doc => doc.id)
                const myPos = array.indexOf(props.id)
                setNext( myPos + 1 === array.length ? array[0] : array[myPos + 1]) 
                setPrev( myPos === 0 ? array[array.length - 1]  : array[myPos - 1]) 
            })
           
        }, [props.id])

        let styles = {}

        if(project){
            styles = {
                backgroundImage: 'url(' + project.defaultImage + ')',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                paddingTop: '100vh',
                paddingBottom: '0'
            }
        } 
    return(
       <main
            style={styles} 
            className='project-details'>
            {
            project
            ?
        <div style={{backgroundColor:'white', padding:'20vh 20vh 0 20vh', minHeight:'100vh'}}>
            
            <h4>{project.title}</h4>

            <div className='year'>
                { project.year}
            </div>

            <div className='description'>
                {project.description && parse(project.description )}
            </div>
            <div className='pager'>
                <Link to={'/projects/' + prev}>forrige</Link>
                <Link to={'/projects/' + next}>neste</Link>
            </div>
            
           </div>
           :
           <h2>Fetching projects, hold on</h2>
        }
           </main>
   
    )
}
export default ProjectDetails