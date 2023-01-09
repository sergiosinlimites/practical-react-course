import { useRef } from 'react';
import logo from '@logos/logo_yard_sale.svg';
import '@styles/Login.scss';

const Login = () => {

  const form = useRef(null);

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const data = {
      email: formData.get('email'),
      password: formData.get('password')
    }
    console.log(data);
  }

  return (
    <div className="Login">
      <div className="form-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">Email address</label>
          <input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />
          <label htmlFor="password" className="label">Password</label>
          <input type="password" name="password" placeholder="*********" className="input input-password" />
          <button type="button" className="primary-button login-button" onClick={handleSubmit}>
            Log in
          </button>
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
}

export default Login;