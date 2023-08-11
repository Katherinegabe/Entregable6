import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import './styles/LoginPage.css'

const LoginPage = () => {

  const {handleSubmit, reset, register} = useForm()
  const { loginUser } = useAuth()
  const navigate = useNavigate()

  const submit = data => {
    loginUser(data, navigate)
  }

  //02:02:55
  
  return (
    <form className="login_container" onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="email">Email</label>
        <input className="login_input_email" {...register('email')} type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input className="login_input_password" {...register('password')} type="password" id="password" />
      </div>
      <button className="login_btn" >Login</button>
    </form>
  )
}

export default LoginPage