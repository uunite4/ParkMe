import React from 'react'
import IconIMG from '../parking-icon.png'

import { Link } from 'react-router-dom'

const Nav = () => {
	return (
		<nav>
			<div className='logo'>
				<img src={IconIMG} alt='ParkMe Icon' />
				<p>PARK ME</p>
			</div>

			<div className='login-signup'>
				<button className='nav-btn signup'>
					<Link className='router-link' to='/signup'>
						<p>SIGN UP</p>
					</Link>
				</button>
				<button className='nav-btn login'>
					<p>LOGIN</p>
				</button>
			</div>
		</nav>
	)
}

export default Nav
