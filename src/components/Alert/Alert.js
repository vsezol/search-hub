import React, { useContext } from 'react'
import { Alert as AlertJSX } from 'react-bootstrap'
import {AlertContext} from '../../context/alert/AlertContext'

const Alert = () => {
  const {alert, hide} = useContext(AlertContext)

  if (!alert) return null

  return (
    <AlertJSX variant={`${alert.type || 'secondary'}`} dismissible onClick={hide}>
      <AlertJSX.Heading>{alert.text}</AlertJSX.Heading>
    </AlertJSX>
  )
}

export default Alert
