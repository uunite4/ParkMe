import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import axios from 'axios'

import Nav from './components/Nav'
import Error404 from './components/pages/Error404'
import Main from './components/pages/Main'
import Start from './components/pages/Start'
import Signup from './components/pages/Signup'
import ParkingForm from './components/pages/ParkingForm'
import Login from './components/pages/Login'

import { Country, State, City } from 'country-state-city'

const App = () => {
	const [loading, SetLoading] = useState(true)
	const [complexes, setComplexes] = useState(null)

	useEffect(() => {
		axios.get('http://localhost:3001/complexes').then((res) => {
			setComplexes(res.data)
			SetLoading(false)
		})
	}, [])

	return (
		<>
			<Nav />
			<div className='all-cont'>
				<Routes>
					<Route
						path='/complexes'
						element={<Main allData={complexes} loading={loading} />}
					/>
					<Route path='/' element={<Start />} />
					<Route path='/signup' element={<Signup />} />
					<Route
						path='/parking-form/:complexid/:parkingid'
						element={<ParkingForm allData={complexes} />}
					/>
					<Route path='/login' element={<Login />}></Route>
					<Route path='/404' element={<Error404 />} />
					<Route path='*' element={<Navigate to='/404' />} />
				</Routes>
			</div>
		</>
	)
}

export default App
