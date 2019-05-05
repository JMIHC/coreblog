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
        arrival. Do think that you are arriving at the door of a new reality and walking through it, transformed by this stepping
        into love, feel that you have been saved.
      </p>
      <p>
        Along the way, I’ve found that the sooner I recover lost pieces of myself the more I can return with boon in hand and use
        it to help lift up the family. These pieces are the missing fragments of self that would prevent me from being whole. They
        are wrapped hidden in thoughts that would seek to anesthetize me from my purpose and drive me to slumber in a malaise of
        my own making. I tried so hard to know my own father, therefore I cannot possibly be enough for this child. Or at any
        minute now, my wife will see me for the emptiness I feel and toss me out before the contagion spreads.
      </p>
      <p>
        For this I had to stop and breathe into the dark moments and become present. It was critical to become centered in my own
        power independently. Do my own work to find the origin of such thoughts and integrate the missing affirmation back into my
        reality. Doing so for that memory makes the present moment whole. What happens after this work is an expansion of reality.
        Like if you walk around bent over watching the ground and finally you look up, open your chest with shoulders back and
        yell with vitality. Yell I am enough or yell whatever affirmation expels the darkness from your soul. And if you are
        lucky, you have friends that mirror you and say yes, you are enough. Those friends are precious.
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
