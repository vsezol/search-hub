import React from 'react'

import { Card, Image } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const Cardjs = () => (
  <Card>
    <Image src='' className='card-img-top'/>
    <Card.Body>
      <Card.Title>Vsezol</Card.Title>
      <Link to={`/profile/vsezol`} className='btn btn-primary'>Open</Link>
    </Card.Body>
  </Card>
)

export default Cardjs
