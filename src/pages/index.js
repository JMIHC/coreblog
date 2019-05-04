import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import styled from 'styled-components'
import Form from '../components/form'
import { Content } from '../elements/styles'

const Header = styled.h1`
  display: flex;
  justify-content: center;
  margin: 1rem;
`

const IndexPage = () => (
  <Layout>
    <Header>What I learned after my father died</Header>
    <Content>
      <p>
        When I think of my Dad I remember a sensitivity of spirit, a thinking mind and a strong wit. He passed away Feb. 27, 2006
        when I was twenty-four. Now older and having acquired time and distance from his passing, I've begun this work.
      </p>
      <p>
        This is where we'll find what it means to be a man in the universal masculine. I think this end of the gender spectrum has
        largely neglected its purpose, forgotten its place in the world and perverted its noble reality. There are so many
        questions to think on. I am building this space for you and I to go deep and explore the terrain of what makes a man.
      </p>
      <p>For now there'll be weekly blog posts here while I build the infrastructure to make this a platform for us.</p>
    </Content>
    <h3>Posts</h3>
    <Link to="/on-being-a-stepdad">On Being a Stepdad</Link>
    <br />
    <Form />
  </Layout>
)

export default IndexPage
