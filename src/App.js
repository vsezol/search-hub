import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { AlertState } from './context/alert/AlertState'
import { GithubState } from './context/github/GithubState'

import About from './pages/About/About'
import Profile from './pages/Profile/Profile'
import Main from './pages/Main/Main'
import Alert from './components/Alert/Alert'

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <Container className='App p-4'>
            <Alert alert={{ text: 'test alert' }} />
            <Switch>
              <Route path='/' exact component={Main} />
              <Route path='/about' component={About} />
              <Route path='/profile/:name' component={Profile} />
            </Switch>
          </Container>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  )
}

export default App
