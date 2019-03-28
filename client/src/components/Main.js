import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Realtor from './Realtor'
import Home from './Home';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main className="container" id="main" style={{position:'relative', minHeight:'70vh'}}>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/realtor' component={Realtor}/>
    </Switch>
  </main>
)

export default Main
