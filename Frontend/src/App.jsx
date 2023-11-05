import React, { useContext, useState } from 'react'
import Patient from './Patient'
import Doctor from './Doctor'
import Guest from './Guest'
import { GlobalContext } from './Context/Context'
import { decodeToken } from 'react-jwt'

const ComponentRole = {
  'patient': Patient,
  'doctor': Doctor,
  'guest': Guest
}
const getUserRole = (params) => ComponentRole[params] || ComponentRole['guest']

export default function App() {

  const { state, dispatch } = useContext(GlobalContext)

  const decodeUser = (token) => {
    if (!token) {
      return undefined
    }
    else {
      const res = decodeToken(token)
      return res?.role
    }
  }

  const currentToken = decodeUser(state.token)
  const CurrentRole = getUserRole(currentToken)
  return <CurrentRole />
}