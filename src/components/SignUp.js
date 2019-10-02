import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import fetch from 'isomorphic-fetch'

const FORM_ID = process.env.CONVERTKIT_SIGNUP_FORM

const SubscribeSchema = Yup.object().shape({
  email_address: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  first_name: Yup.string(),
})

const PostSubmissionMessage = () => {
  return (
    <div>
      <p>Thanks for subscribing! I just sent you a confirmation email. Be sure to check your inbox. :-)</p>
    </div>
  )
}

export default class SignUp extends React.Component {
    state = {
      submitted: false,
    }

    async handleSubmit (values) {
      this.setState({ submitted: true })
      try {
        const response = await fetch(
          `https://app.convertkit.com/forms/${ FORM_ID }/subscriptions`,
          {
            method: 'post',
            body: JSON.stringify(values, null, 2),
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          }
        )

        const responseJson = await response.json()

        this.setState({
          submitted: true,
          response: responseJson,
          errorMessage: null,
        })
      } catch (error) {
        this.setState({
          submitted: false,
          errorMessage: 'Something went wrong!',
        })
      }
    }

    render () {
      const { submitted, response, errorMessage } = this.state
      const successful = response && response.status === 'success'

      return (
        <div>
          {!successful && (
            <h3 style={{ marginBottom: 10 }}>
              Subscribe to get posts via email:
            </h3>
          )}

          <Formik
            initialValues={{
              email_address: '',
              first_name: '',
            }}
            validationSchema={ SubscribeSchema }
            onSubmit={ values => this.handleSubmit(values) }
            render={({ errors, touched, isSubmitting }) => (
              <>
                {!successful && (
                  <Form>
                    <label htmlFor='first_name'>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end'
                      }}
                      >
                        First Name
                        <ErrorMessage
                          name='first_name'
                          component='span'
                          className='field-error'
                        />
                      </div>
                      <Field
                        aria-label='your first name'
                        aria-required='false'
                        name='first_name'
                        placeholder=''
                        type='text'
                      />
                    </label>
                    <label
                      htmlFor='email'
                      style={{ marginLeft: 10 }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-end'
                        }}
                      >
                        Email
                        <ErrorMessage
                          name='email_address'
                          component='span'
                          className='field-error'
                        />
                      </div>
                      <Field
                        aria-label='your email address'
                        aria-required='true'
                        name='email_address'
                        placeholder=''
                        type="email"
                      />
                    </label>
                    <button
                      data-element="submit"
                      type="submit"
                      disabled={ isSubmitting }
                    >
                      { !isSubmitting && 'Submit' }
                      { isSubmitting && 'Submitting...' }
                    </button>
                  </Form>
                )}
                {submitted && <PostSubmissionMessage />}
                { errorMessage && <div>{errorMessage}</div> }
              </>
            )}
          />
        </div>
      )
    }
}
