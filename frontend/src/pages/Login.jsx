import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { loginFields } from '../constants/formFields';
import Button from "@mui/material/Button";
import axios from 'axios';
import Logo from "../components/Logo";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const slideIn = {
    hidden: { x: '-100%' },
    visible: { x: 0, transition: { duration: 1.0 } },
  };
  const [loginState, setLoginState] = useState({
    username: '',
    password: ''
  });
  const handleLogin = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };
  const authenticateUser = () => {
    const endpoint = `http://${import.meta.env.VITE_PORT}/users/loginUser`;

  axios.post(endpoint, loginState)
    .then(response => {
      if (response.status === 200 && response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        navigate('home');
      } else {
        console.error('Login failed:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Error during login:', error);
    });
  };
  return (
    <div 
      className="bg-sky-50 h-screen flex items-center justify-center" 
      >
      <motion.div className="grid gap-6 bg-slate-900 rounded p-12 rounded-xl shadow-xl dark:shadow-slate-600"
      animate="visible"
      variants={slideIn}
      >
        <div className="header">
          <Logo linkUrl="/register" linkName={"Signup Here."} paragraph={"Not a member ?"} />
        </div>
        <form className="grid gap-6 p-5">
            {
              loginFields.map((field) => (
                <div key={`${field.id}`} className={`mx-auto ${field.label}-field`}>
                  <TextField
                    className="bg-sky-50 rounded-md	"
                    size={field.size}
                    id={field.id}
                    label={field.label}
                    variant={field.variant}
                    type={field.type}
                    onChange={handleLogin}
                  />
                </div>
              ))
            }
        </form>
        <div className="login-btn flex items-center justify-center">
          <Button variant="contained" onClick={handleSubmit}>Login</Button>
        </div>
      </motion.div>
      </div>
  );
}



