import React from 'react'
import { useForm } from 'react-hook-form'

const Signup = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const FormHandleSubmit = (data) => {
		console.log(data)
	}

	return (
		<form
			className='signup-form-cont'
			onSubmit={handleSubmit((data) => {
				FormHandleSubmit(data)
			})}
		>
			<div className='form-data'>
				<div className='signup-info signup-sec'>
					{/* SIGNUP INFO */}
					<h1>INFO</h1>
					<div className='input-cont'>
						<div className='input-text'>
							<p className='legend'>First Name</p>
							<p className='error'>{errors.firstName?.message}</p>
						</div>
						<input
							type='text'
							{...register('firstName', { required: 'required' })}
						/>
					</div>
					<div className='input-cont'>
						<div className='input-text'>
							<p className='legend'>Last Name</p>
							<p className='error'>{errors.lastName?.message}</p>
						</div>
						<input
							type='text'
							{...register('lastName', { required: 'required' })}
						/>
					</div>
					<div className='input-cont'>
						<div className='input-text'>
							<p className='legend'>Email</p>
							<p className='error'>{errors.email?.message}</p>
						</div>
						<input
							type='email'
							{...register('email', { required: 'required' })}
						/>
					</div>
					<div className='input-cont'>
						<div className='input-text'>
							<p className='legend'>Password</p>
							<p className='error'>{errors.password?.message}</p>
						</div>
						<input
							type='password'
							{...register('password', {
								required: 'required',
								minLength: {
									value: 8,
									message: '8 characters min',
								},
							})}
						/>
					</div>
					<div className='input-cont'>
						<div className='input-text'>
							<p className='legend'>Phone Number</p>
							<p className='error'>{errors.phoneNumber?.message}</p>
						</div>
						<input
							type='tel'
							{...register('phoneNumber', { required: 'required' })}
						/>
					</div>
				</div>
				<div className='signup-info signup-sec'>
					{/* SIGNUP LOC */}
					<h1>LOCATION</h1>
					<div className='input-cont'>
						<div className='input-text'>
							<p className='legend'>Country</p>
							<p className='error'>{errors.country?.message}</p>
						</div>
						<input
							type='text'
							{...register('country', { required: 'required' })}
						/>
					</div>
					<div className='input-cont'>
						<div className='input-text'>
							<p className='legend'>City</p>
							<p className='error'>{errors.city?.message}</p>
						</div>
						<input
							type='text'
							{...register('city', { required: 'required' })}
						/>
					</div>
					<div className='input-cont'>
						<div className='input-text'>
							<p className='legend'>Street</p>
							<p className='error'>{errors.street?.message}</p>
						</div>
						<input
							type='text'
							{...register('street', { required: 'required' })}
						/>
					</div>
					<div className='input-cont'>
						<div className='input-text'>
							<p className='legend'>House Number</p>
							<p className='error'>{errors.houseNumber?.message}</p>
						</div>
						<input
							type='text'
							{...register('houseNumber', { required: 'required' })}
						/>
					</div>
					<div className='input-cont'>
						<div className='input-text'>
							<p className='legend'>Parking Spot Number</p>
							<p className='error'>{errors.parkingNumber?.message}</p>
						</div>
						<input
							type='text'
							{...register('parkingNumber', { required: 'required' })}
						/>
					</div>
				</div>
			</div>

			<button className='signup-submit' type='submit'>
				Create Account
			</button>
		</form>
	)
}

export default Signup
