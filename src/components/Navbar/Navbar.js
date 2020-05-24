import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default () => (
  <Navbar bg='dark' variant='dark'>
    <Navbar.Brand>search hub</Navbar.Brand>
    <Navbar.Toggle aria-controls='navbar-nav' />
    <Navbar.Collapse id='navbar-nav'>
      <Nav className='mr-auto'>
        <NavLink className='nav-link' to='/' exact >Main</NavLink>
        <NavLink className='nav-link' to='/about'>About</NavLink>
        {/* <Link className='nav-link' to='/profile'>Profile</Link> */}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
