import React, { useContext, useState } from 'react'
import { FormGroup } from 'react-bootstrap'

import { AlertContext } from '../../context/alert/AlertContext'
import { GithubContext } from '../../context/github/GithubContext'

const Search = () => {
  const alert = useContext(AlertContext)
  const [value, setValue] = useState('')
  const github = useContext(GithubContext)

  const onSubmit = event => {
    if (event.key !== 'Enter') return

    github.clearUsers()

    if(value.trim()) {
      alert.hide()
      github.search(value.trim())
    } else {
      alert.show('Enter user data!')
    }
  }

  return (
    <FormGroup>
      <input
        type='text'
        className='form-control'
        placeholder='Enter a user name ...'
        onChange={event => setValue(event.target.value)}
        onKeyPress={onSubmit}
      />
    </FormGroup>
  )
}

export default Search
