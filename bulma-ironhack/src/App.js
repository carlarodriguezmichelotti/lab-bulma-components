import React, { Component } from 'react'
import './App.css'

import NavBar from './components/NavBar'
import FormField from './components/FormField'
import CoolButton from './components/CoolButton'
import SignUp from './components/SignUp'

class App extends Component {
	render() {
		return (
			<main>
				<NavBar />
				<FormField label='Name' type='text' placeholder='e.g Alex Smith' />
				<FormField label='Email' type='email' placeholder='e.g. alexsmith@gmail.com' />
				<br />
				<CoolButton className='button is-small is-danger is-rounded my-class'>Button 1</CoolButton>
				<CoolButton className='button is-small is-success'>Button 2</CoolButton>
				<br />
				<br />
				<SignUp />
			</main>
		)
	}
}

export default App
