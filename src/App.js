import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

import Nav from './components/Nav'
import Main from './components/pages/Main'
import Start from './components/pages/Start'
import Signup from './components/pages/Signup'

const App = () => {
	const [loading, SetLoading] = useState(true)
	const [allData, setAllData] = useState(null)

	useEffect(() => {
		axios.get('http://localhost:3001/complexes').then((res) => {
			setAllData(res.data)
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
						element={<Main allData={allData} loading={loading} />}
					/>
					<Route path='/' element={<Start />} />
					<Route path='/signup' element={<Signup />} />
				</Routes>
			</div>
		</>
	)
}

export default App
