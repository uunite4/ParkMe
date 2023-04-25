import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

const ParkingForm = () => {
	const [allowPark, setAllowPark] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const { complexid, parkingid } = useParams()

	function AllowPrakingHandler(x) {
		x ? setAllowPark(true) : window.location.assign('/complexes')
	}

	function HandleSubmit(data) {
		console.log(data)
	}

	return (
		<div className='parking-form'>
			<form
				className='parking-form-cont-form'
				onSubmit={handleSubmit((data) => {
					HandleSubmit(data)
				})}
			>
				<div className='parking-form-cont'>
					{!allowPark ? (
						<div className='divider-parking-cont'>
							{/* THE QUESTION THAT ASKS IF PEOPLE CAN USE YOUR PARKING SPOT */}
							<h1>Do You Want People To Use Your Parking Spot?</h1>
							<div className='parking-form-btns-cont'>
								<input
									onClick={() => {
										AllowPrakingHandler(true)
									}}
									type='button'
									value='Yes'
									className='parking-form-btn'
								></input>
								<input
									onClick={() => {
										AllowPrakingHandler(false)
									}}
									type='button'
									value='No'
									className='parking-form-btn'
								></input>
							</div>
						</div>
					) : (
						<div className='divider-parking-cont'>
							{/* THE QUESTION THAT ASKS WHEN YOU COME BACK */}
							<h1>When Do You Come Back?</h1>
							<div>
								<input
									type='time'
									{...register('time', { required: 'required' })}
								/>
								<p className='error'>{errors.time?.message}</p>
							</div>
							<button className='parking-form-btn-submit'>Free Parking</button>
						</div>
					)}
				</div>
			</form>
		</div>
	)
}

export default ParkingForm
