import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { registerFields } from '../constants/formFields';
import Button from "@mui/material/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from "../components/Logo/Logo";
import { motion } from "framer-motion";

export default function Register() {
  const [registerState, setRegisterState] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleRegister = (e) => {
    if (e.target.id !== "confirmPassword") {
      setRegisterState({ ...registerState, [e.target.id]: e.target.value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    RegisterUser();
  };
  const RegisterUser = () => {
    const endpoint = `http://${import.meta.env.VITE_PORT}/users/createUser`;
    axios.post(endpoint, registerState) 
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="bg-sky-50 h-screen flex items-center justify-center" >
       <motion.div className="grid gap-6 bg-slate-900 rounded p-12 rounded-xl shadow-xl dark:shadow-slate-600"
      initial="hidden"
      animate="visible"
      >
        <div className="header">
          <Logo linkUrl="/register" />
        </div>
        <form className="grid gap-6 p-5 grid-cols-2">
        {registerFields.map((field) => (
          <div key={`${field.id}} className={mx-auto ${field.label}-field col-span-1`}>
            <TextField
              className="bg-sky-50 rounded-md"
              size={field.size}
              id={field.id}
              label={field.label}
              variant={field.variant}
              type={field.type}
              onChange={handleRegister}
            />
          </div>
        ))}
      </form>

      <div className="login-btn flex items-center justify-center">
        <Button variant="contained" onClick={handleSubmit}>
          Register
        </Button>
      </div>
      <div className="back-to-login flex justify-center">
        <Link to='/login' className="font-medium text-lg text-zinc-50 text-center">
          Back to Login
        </Link>
      </div>
      </motion.div>
    </div>);
}