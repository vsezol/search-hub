import React from 'react'
import Search from '../../components/Search/Search'
import Cardjs from '../../components/Cardjs/Cardjs'
import { Row, Col } from 'react-bootstrap'

const Main = () => {
  const cards = new Array(15).fill('').map((_, i) => i)
  return (
    <>
      <Search />
      <Row>
        {cards.map((card, index) => (
          <Col sm={4} key={index} className='mb-4'>
            <Cardjs />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Main
