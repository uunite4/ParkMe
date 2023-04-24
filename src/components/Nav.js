import React from 'react'
import IconIMG from '../icon.png'
import axios from 'axios'

import { Link } from 'react-router-dom'

const Nav = () => {
	function Notifications() {
		Notification.requestPermission().then((perm) => {
			console.log(perm)
			if (perm === 'granted') {
				console.log('working')

				setTimeout(() => {
					const notifi = new Notification('Notifi Title', {
						body: 'notifi body, bla bla bla',
						data: { redirect: 'http://localhost:3000/complexes' },
						icon: '../icon.png',
					})

					notifi.addEventListener('click', (e) => {
						window.location.replace(e.currentTarget.data.redirect)
					})
				}, 1000)
			}
		})
	}

	function Loc() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(DisplayPos)
		} else {
			console.log('Not Supported')
		}
	}

	function DisplayPos(position) {
		console.log(`Latitude: ${position.coords.latitude}`)
		console.log(`Longitude: ${position.coords.longitude}`)

		GetAddress(position.coords.latitude, position.coords.longitude)
	}

	function GetAddress(lat, long) {
		axios
			.get(
				`http://api.geonames.org/findNearestAddressJSON?lat=${lat}&lng=${long}&username=demo`
			)
			.then((res) => {
				console.log(res)
			})
	}

	return (
		<nav>
			<Link className='router-link' to='/'>
				<div className='logo'>
					<img src={IconIMG} alt='ParkMe Icon' />
					<p>
						<span className='park'>PARK</span>
						LET
					</p>
				</div>
			</Link>

			{/* TEST */}
			<button onClick={Notifications}>notifications</button>

			<button onClick={Loc}>Location</button>

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
