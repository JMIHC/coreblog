import React, { Component } from 'react'

export default class Form extends Component {
  render () {
    return (
      <form name="contact" name="contact" method="POST" netlify netlify-honeypot="bot-field">
        <p>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email: <input type="email" name="email" />
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
      </form>
    )
  }
}
