import React, { Component } from 'react'
import FormField from './FormField'
import CoolButton from './CoolButton'

const SignUp = props => {
	return (
		<div>
			<FormField label='Name' type='text' placeholder='Your name' />
			<FormField label='Email' type='email' placeholder='Your email' />
			<FormField label='Password' type='password' placeholder='Your password' />
			<CoolButton className='button is-small is-danger is-rounded my-class'>Submit</CoolButton>
		</div>
	)
}
export default SignUp
