import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Success = styled.div`
  max-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default () => (
  <Success>
    <h2>Thank you for your message.</h2>
    <Link to="/">Go back</Link>
  </Success>
)
