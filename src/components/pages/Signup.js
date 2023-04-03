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

	console.log(errors)

	return (
		<form
			className='form-cont'
			onSubmit={handleSubmit((data) => {
				FormHandleSubmit(data)
			})}
		>
			<h1>Create New Account</h1>
			<div className='input-cont'>
				<input
					type='text'
					{...register('firstName', { required: 'First name is required' })}
					placeholder='First Name'
				/>
				<p>{errors.firstName?.message}</p>
			</div>
			<div className='input-cont'>
				<input
					type='text'
					{...register('lastName', { required: 'Last name is required' })}
					placeholder='Last Name'
				/>
				<p>{errors.lastName?.message}</p>
			</div>
			<div className='input-cont'>
				<input
					type='email'
					{...register('email', { required: 'Email is required' })}
					placeholder='Email'
				/>
				<p>{errors.email?.message}</p>
			</div>
			<div className='input-cont'>
				<input
					type='password'
					{...register('password', {
						required: 'Password is required',
						minLength: {
							value: 8,
							message: 'password must be at least 8 characters',
						},
					})}
					placeholder='Password'
				/>
				<p>{errors.password?.message}</p>
			</div>
			<div className='input-cont'>
				<input
					type='tel'
					{...register('phoneNumber', { required: 'Number is required' })}
					placeholder='Phone Number'
				/>
				<p>{errors.phoneNumber?.message}</p>
			</div>
			<button type='submit'>Create Account</button>
		</form>
	)
}

export default Signup
