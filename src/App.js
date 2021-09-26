import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import SignUp from "./components/signup.component";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Login from "./components/login.component";
//import Image from "react-bootstrap/Image";
//import { fontWeight } from "@material-ui/system";
//import socialMediaAuth from "./service/aut
import Dashboard from "./components/Dashboard";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from '@firebase/auth';

import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCWSiisM0lIU-WIdITjH7YjkN7CpvzYFHw",
  authDomain: "sign-in-c5096.firebaseapp.com",
  projectId: "sign-in-c5096",
  storageBucket: "sign-in-c5096.appspot.com",
  messagingSenderId: "1045072161905",
  appId: "1:1045072161905:web:d750d6a04e9a4313ec3fd0"
};

// Initialize Firebase
initializeApp(firebaseConfig);






//Style for the paper grids
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
    maxHeight: "50em",
    minHeight: "30em",

    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(14),
    border: "1px solid turquoise-blue",
  },
  paperd: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "skyblue",
    maxHeight: "50em",
    minHeight: "30em",
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(0),
    border: "1px solid turquoise-blue",
  },
  boxer: {
    backgroundColor: "aliceblue",
    padding: theme.spacing(10),
    
  },
h1: {
  color: "black",
  fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
  fontWeight: "600",
  textAlign: "left",
},
p: {
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
  fontSize: "12px",
  textAlign: "left",
  fontWeight: "500",
}


}));


export default function FullWidthGrid() {
  const classes = useStyles();

  const [user, setUser] = useState(null);

useEffect(() => { 
  const auth = getAuth();
  onAuthStateChanged(auth, user => {
    setUser(user)
  })
}, [])

  return (

    <Router>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item>
            <Paper className={classes.paper}>
              {/*LOGIN AND REGISTER FORMS ARE BEING RENDERED HERE IN ADDITION TO THE ROUTER*/}
              <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/dashboard" component={Dashboard} />
               
              </Switch>
              
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paperd}>
              <div className={classes.boxer}>
              <h1 className={classes.h1}>The most beautiful <br/> place to learn! <br/></h1>
              <p className={classes.p}>Lorem ipsum is simply dummy text of the printing <br />and typesetting industry.</p>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Router>

  );
}



