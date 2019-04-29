import React, { Component } from 'react'

export default class Form extends Component {
  render () {
    return (
      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <p>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email*: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
        <p>*Your email address will not be sold or shared.</p>
      </form>
    )
  }
}
