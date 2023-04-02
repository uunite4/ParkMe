import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Complex from './Complex'

const App = () => {
	const [loading, SetLoading] = useState(true)
	const [allData, setAllData] = useState(null)
	const complexUI = CreateComplexUI()

	useEffect(() => {
		axios.get('http://localhost:3001/complexes').then((res) => {
			setAllData(res.data)
			console.log(res.data)
			SetLoading(false)
		})
	}, [])

	function CreateComplexUI() {
		if (allData) {
			return allData.map((complex) => {
				return (
					<Complex
						key={complex.id}
						id={complex.id}
						buildings={complex.includesBuildings}
						parkingSpots={complex.parkingSpots}
					/>
				)
			})
		} else {
			return
		}
	}

	return (
		<>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div className='complex-ui-cont'>{complexUI}</div>
			)}
		</>
	)
}

export default App
