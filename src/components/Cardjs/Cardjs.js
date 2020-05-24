import React from 'react'

import { Card, Image } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const Cardjs = ({user}) => (
  <Card>
    <Image src={user.avatar_url} alt={user.login} className='card-img-top'/>
    <Card.Body>
      <Card.Title>{user.login}</Card.Title>
      <Link to={`/profile/${user.login}`} className='btn btn-primary'>Open</Link>
    </Card.Body>
  </Card>
)

export default Cardjs
