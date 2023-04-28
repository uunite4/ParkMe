import React from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	function FormHandleSubmit(d) {
		console.log(d)
	}

	return (
		<div
			className='login'
			onSubmit={handleSubmit((data) => {
				FormHandleSubmit(data)
			})}
		>
			<form className='login-form'>
				<div className='login-sec'>
					<h1>LOGIN</h1>
					<div className='input-cont'>
						<div className='input-text'>
							<p className='legend'>Email</p>
							<p className='error'>{errors.email?.message}</p>
						</div>
						<input
							type='text'
							{...register('email', { required: 'required' })}
						/>
					</div>
					<div className='input-cont'>
						<div className='input-text'>
							<p className='legend'>Password</p>
							<p className='error'>{errors.password?.message}</p>
						</div>
						<input
							type='text'
							{...register('password', { required: 'required' })}
						/>
					</div>
					<button className='signup-submit' type='submit'>
						LOGIN
					</button>
				</div>
			</form>
		</div>
	)
}

export default Login
