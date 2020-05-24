import React, { useContext, useEffect } from 'react'
import { GithubContext } from '../../context/github/GithubContext'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Image, Badge } from 'react-bootstrap'
import Repos from '../../components/Repos'

const Profile = ({ match }) => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext)
  const urlName = match.params.name

  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    public_repos,
    public_gists,
    following
  } = user

  if (loading) {
    return <p className='text-center'>Загрузка...</p>
  }

  return (
    <>
      <Link to='/' className='btn btn-link'>
        To Main
      </Link>
      <Card className='mb-4'>
        <Card.Body>
          <Row>
            <Col sm={3} className='text-center'>
              <Image src={avatar_url} alt={name} width={128}></Image>
              <Card.Title>{name}</Card.Title>
              {location && <p>Location: {location}</p>}
            </Col>
            <Col>
              {bio && (
                <>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </>
              )}
              <a
                href={html_url}
                target='_blank'
                className='btn btn-dark mb-2'
                rel='noopener noreferrer'
              >
                Open profile
              </a>
              <ul>
                {login && (
                  <li>
                    <strong>Username: </strong>
                    {login}
                  </li>
                )}
                {company && (
                  <li>
                    <strong>Company: </strong>
                    {company}
                  </li>
                )}
                {blog && (
                  <li>
                    <strong>Blog: </strong>
                    {blog}
                  </li>
                )}
              </ul>
              <Badge variant='primary' className='mr-2'>
                Followers: {followers}
              </Badge>
              <Badge variant='success' className='mr-2'>
                Following: {following}
              </Badge>
              <Badge variant='info' className='mr-2'>
                Repositories: {public_repos}
              </Badge>
              <Badge variant='dark' className='mr-2'>
                Gists: {public_gists}
              </Badge>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Repos repos={repos} />
    </>
  )
}

export default Profile
