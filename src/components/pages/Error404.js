import React from 'react'
import { Link } from 'react-router-dom'
import img404 from '../../404park.png'

const Error404 = () => {
	return (
		<div className='error-404-cont'>
			<img src={img404} alt='not found' />
			<button className='home-btn'>
				<Link to='/' className='router-link'>
					<p>HOME</p>
				</Link>
			</button>
		</div>
	)
}

export default Error404
