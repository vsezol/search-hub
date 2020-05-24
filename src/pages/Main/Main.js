import React, { useContext } from 'react'
import Search from '../../components/Search/Search'
import Cardjs from '../../components/Cardjs/Cardjs'
import { Row, Col } from 'react-bootstrap'
import { GithubContext } from '../../context/github/GithubContext'

const Main = () => {
  const { loading, users } = useContext(GithubContext)

  return (
    <>
      <Search />
      <Row>
        {loading ? (
          <p className='text-center'>Загрузка...</p>
        ) : (
          users.map(user => (
            <Col sm={4} key={user.id} className='mb-4'>
              <Cardjs user={user} />
            </Col>
          ))
        )}
      </Row>
    </>
  )
}

export default Main
