import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import './styles/RegisterPage.css'

const RegisterPage = () => {

  const { register, reset, handleSubmit } = useForm()
  const { createUser } =useAuth()
  const navigate = useNavigate()

  const submit = data => {
    createUser(data, navigate)
    reset({
      firstName:'',
      lastName: '',
      email: '',
      password: '',
      phone: ''
    })
  }

  return (
    <form className="register_container" onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="firstname">First Name</label>
        <input className="register_input input_firstname" {...register('firstName')} type="text" id="firstname" />
      </div>
      <div>
        <label htmlFor="lastname">Last Name</label>
        <input className="register_input input_lastname" {...register('lastName')}type="text" id="lastname" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input className="register_input input_email" {...register('email')} type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input className="register_input input_password" {...register('password')} type="password" id="password" />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input className="register_input input_phone" {...register('phone')} type="text" id="phone" />
      </div>
        <button className="register_btn">Create User</button>
    </form>
  )
}

export default RegisterPage