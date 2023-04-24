import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
	return (
		<div className='start-cont'>
			<Link className='router-link start-complex-link' to='/complexes'>
				<div className='start-complex-cont'>
					<img
						src='https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
						alt=''
					/>
					<div className='start-complex-data'>
						<p className='start-complex-title'>Your Complex</p>
						<p className='start-complex-click'>Click to enter</p>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default Start
