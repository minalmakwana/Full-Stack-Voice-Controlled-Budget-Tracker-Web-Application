import React, {  useEffect, useRef, useState } from 'react';
import { Grid } from '@material-ui/core';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import { SpeechState, useSpeechContext } from "@speechly/react-client";
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';
import Login from "./components/login/login";
import Register from "./components/register/register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Particles from 'react-particles-js';
import './App.scss';
import { Details, Main } from './components';
import useStyles from './styles';
import axios from 'axios';




function App  () {
  //Using classes for inputting poperties from styles file
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  //Setting initial user state
  const [ user, setLoginUser] = useState({})

 //Using axios call to delete the user from the database
  const deleteUser = () => {
    let id = localStorage.getItem('_id');
    console.log("id " + id);
    axios.delete(`http://localhost:9002/delete/${id}`)
    .then(() => {
    alert('deleted successful')
    window.localStorage.clear();
    window.location.href = '/';
    console.log('user Deleted !!!')
    })
    .catch((error) => {
    console.log(error)
    })
}

  const main = useRef(null)
 //Declaring properties for particles
  const particlesOptions = {
    particles: {
      number: {
        value: 90,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  }
  
//execute scroll help in taking back to the main form when the user speaks in case of a mobile device
  const executeScroll = () => main.current.scrollIntoView()    

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);
//Layout for both desktop and mobile device added
  return (
    <div className="App">
    <Navigation/>
    <Logo/>
      <Router>
        <Switch>
          <Route exact path="/">
            { user && user._id ? <Grid setLoginUser={setLoginUser} className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}}>
            <Particles className='particles'
          params={particlesOptions}   /> 
              <Grid item xs={12} sm={4} className={classes.mobile}>
                <Details title="Income" />
              </Grid>
              <Grid ref={main} item xs={12} sm={3} className={classes.main}>
                <Main />
              </Grid>
              <Grid item xs={12} sm={4} className={classes.desktop}>
                <Details title="Income" />
              </Grid>
              <Grid item xs={12} sm={4} className={classes.last}>
                <Details title="Expense" />
              </Grid>
              <PushToTalkButtonContainer>
                <PushToTalkButton />
              </PushToTalkButtonContainer>
              <button className="button" onClick={() => setLoginUser({})} >Logout</button>
              <button className="button" onClick={()=> deleteUser({})}> Delete My Profile </button>
              </Grid>
              :<Login setLoginUser={setLoginUser}/>
              }
              {/* //Declaring routes  */}
          </Route>
          <Route path="/login">
         <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
     </div>
  );
};
export default App;


