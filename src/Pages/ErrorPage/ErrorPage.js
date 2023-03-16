import React from 'react'
import { Link } from 'react-router-dom'
import './ErrorPage.css'

const ErrorPage = () => {
  return (
	<div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h3>Oops! Page not found</h3>
				<h1><span>4</span><span>0</span><span>4</span></h1>
			</div>
			<h2>we are sorry, but the page you requested was not found</h2>
            <Link to='/'><button>Go Back To Home Page</button></Link>
		</div>
	</div>
  )
}

export default ErrorPage