import React from 'react'
import { Card } from 'react-bootstrap'

const Repos = ({ repos }) => (
  <>
    {repos.map(repo => (
      <Card className='mb-3' key={repo.id}>
        <Card.Body>
          <Card.Title>
            <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
              {repo.name}
            </a>
          </Card.Title>
        </Card.Body>
      </Card>
    ))}
  </>
)

export default Repos
