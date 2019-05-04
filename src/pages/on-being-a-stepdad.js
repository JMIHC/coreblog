import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Content } from '../elements/styles'

const StepDad = props => (
  <Layout>
    <SEO title="On Being a Stepdad" />
    <Img
      style={{ width: '100%' }}
      fluid={props.data.stepdad.childImageSharp.fluid}
      alt="An up close image of bigfoot looking back into the camera surrounded by the forest"
    />
    <p style={{ fontSize: 10, fontWeight: 'lighter', lineHeight: 0.5 }}>
      Photo by{' '}
      <a
        style={{ textDecoration: 'none', color: 'black' }}
        href="https://unsplash.com/photos/QnSiG-xXu48?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      >
        Kelly Lund
      </a>
    </p>
    <h1>On Being a Stepdad</h1>
    <Content>
      <p>
        I've found the essence of being a stepdad is the act of falling in love with the family you’ve stepped into. Do not think
        for a moment that you have arrived to save anyone, or that you are granted rights to fix a perilous past preceding your
        arrival. Do think that you are arriving at the door of a new reality and walking through it. And so transformed by this
        stepping into love, you will feel that you have been saved.
      </p>
      <p>
        Along the way, I’ve found that the sooner I recover those lost pieces of myself the more I can return with boon in hand
        and use it to help lift up the family. The lost pieces are missing fragments of self that prevent me from being whole.
        It's the earthbound thought that keeps me defeated in the dirt. Luckily I've had immense support around me keeping my chin
        up.
      </p>
      <p>
        If you've read the Giving Tree, it's about a tree that so loves the child that it gives itself away. Having given it all,
        it becomes a tree stump to sit on. I would say being a stepdad is the opposite. You arrive as the tree stump. Can you be
        trusted enough to sit on? It's a risk. If the worst is revealed will you uproot and leave? Why us? These are questions the
        tree stump has to answer.
      </p>
      <p>
        As your kid grows, you'll find yourself grow in tandem. No longer a tree stump, your roots descend into the family
        foundation. The roots become firm and trusted. You grow and reach out with branches that entwine with those of mother
        tree. Together you create a cool canopy against the heat of the world. How strong is this canopy? If the heat of the world
        comes home, can you deter the affliction of its madness? Build a resilient canopy with arching branches to mark boundaries
        and safety. There is no defeating the world but there is creating a new one.
      </p>
      <p>
        I wish you, dear reader, the best in your endeavor. If you've found yourself at this particular door in life, don't
        hesitate! Leap into love, you will be transformed.
      </p>
    </Content>
    <br />
    <Link to="/">Go back</Link>
  </Layout>
)

export default StepDad

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    stepdad: file(relativePath: { eq: "kelly-lund-unsplash.jpg" }) {
      ...fluidImage
    }
  }
`
