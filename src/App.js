import React, { useState, useEffect } from 'react'
import { Router, navigate } from '@reach/router'
import './App.css'
import Projects from './components/Projects'
import ProjectDetails from './components/ProjectDetails'

import Contact from './components/Contact'
import Cv from './components/Cv'
import Header from './components/Header'
import Login from './components/Login'
import Edit from './components/Edit'
import firebase from  './components/firebase'


const Default = () => {
  navigate(process.env.PUBLIC_URL + '/projects')
  return <></>
}

const App = () => {


    const [signedIn, setSignedIn] = useState(false)
    const [projects, setProjects] = useState([])

    useEffect( () => {
      firebase
      .firestore()
      .collection('projects')
      .orderBy('title')
      .onSnapshot(
          snapshot => setProjects(snapshot.docs)
      )
  }, [])

  
    useEffect( () => {
      firebase.auth().onAuthStateChanged(
        user => {
          if(user){
            setSignedIn(true)
          }else{
            setSignedIn(false)
          }
          }
      )
    })


  return(
   <div>
    <Header signedIn={signedIn}/>
     <Router basepath={process.env.PUBLIC_URL}>
       <Projects projects={projects} default signedIn={signedIn} path='/projects' />
       <Contact path='/contact' />
       <ProjectDetails path='/projects/:id'/>
       <Cv path='/cv' />
       <Login signedIn={signedIn} setSignedIn={setSignedIn} path='/login' />
       <Edit path='/edit/:id'/>
     </Router>
   </div>

  )

}

export default App