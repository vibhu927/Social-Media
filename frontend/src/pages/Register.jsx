import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { motion } from "framer-motion";
export default function Register() {
  // State for input fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle registration
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    try {
      const response = await axios.post(`http://${import.meta.env.VITE_PORT}/users/createUser`, {
        username,
        email,
        password,
      });
      console.log("Registration successful:", response.data);
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  };
  const containerVariants = {
    hidden: { opacity: 0, rotateY: 180 },
    visible: { opacity: 1, rotateY: 0, transition: { duration: 1.5, ease: "easeInOut" } },
  };
  return (
   <div className="bg-sky-50 h-screen flex items-center justify-center">
     <motion.div className="grid gap-6 bg-slate-900 rounded p-12 rounded-xl shadow-xl dark:shadow-slate-600"
     initial="hidden"
     animate="visible"
     variants={containerVariants}
     >
       <div className="header">
      <Logo linkUrl="/login" linkName={"Login Here."} paragraph={"Back to Login."}/>
      </div>
      <div className="flex gap-6">
        <div className="email-field mx-auto">
          <TextField
            className="bg-sky-50 rounded-md"
            size="small"
            id="username"
            label="Username"
            variant="filled"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="password-field mx-auto">
          <TextField
            className="bg-sky-50 rounded-md"
            size="small"
            id="email"
            label="Email"
            variant="filled"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="flex gap-6">
        <div className="email-field mx-auto">
          <TextField
            className="bg-sky-50 rounded-md"
            size="small"
            id="password"
            label="Password"
            variant="filled"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="password-field mx-auto">
          <TextField
            className="bg-sky-50 rounded-md"
            size="small"
            id="confirmPassword"
            label="Confirm Password"
            variant="filled"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="login-btn flex items-center justify-center">
        <Button variant="contained" onClick={handleRegister}>
          Register
        </Button>
      </div>
      {/* <div className="back-to-login flex justify-center">
        <Link to='/login' className="font-medium text-lg text-zinc-50 text-center">
          Back to Login
        </Link>
      </div> */}

   </motion.div>
    </div>
  );
}
