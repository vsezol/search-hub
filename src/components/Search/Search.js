import React, { useContext, useState } from 'react'
import { FormGroup } from 'react-bootstrap'

import { AlertContext } from '../../context/alert/AlertContext'

const Search = () => {
  const { show } = useContext(AlertContext)
  const [value, setValue] = useState('')

  const onSubmit = event => {
    if (event.key !== 'Enter') return

    if(value.trim()) {
      console.log('Make request with:', value)
    } else {
      show('Enter user data!')
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
