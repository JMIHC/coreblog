import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Success = styled.div`
  max-width: 320px;
  display: flex;
  justify-content: center;
`

export default () => (
  <Success>
    <h2>You have sent me a message!</h2>
    <Link to="/">Go back</Link>
  </Success>
)
