import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from 'axios';
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { motion } from "framer-motion";
export default function Login() {
  const containerVariants = {
    hidden: { opacity: 0, rotateY: 180 },
    visible: { opacity: 1, rotateY: 0, transition: { duration: 1.5, ease: "easeInOut" } },
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    try {
      const response = await axios.post(`http://${import.meta.env.VITE_PORT}/users/loginUser`, {
        username,
        password,
      });
      console.log("Login successful:", response.data);
      setUsername('');
      setPassword('');
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div 
      className="bg-sky-50 h-screen flex items-center justify-center" 
      >
      <motion.div className="grid gap-6 bg-slate-900 rounded p-12 rounded-xl shadow-xl dark:shadow-slate-600"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      >
        <div className="header">
          <Logo linkUrl="/register" linkName={"Signup Here."} paragraph={"Not a member ?"} />
        </div>
        <div className="email-field mx-auto">
          <TextField
            className="bg-sky-50  rounded-md"
            size="small"
            id="filled-basic"
            label="UserName"
            variant="filled"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="password-field mx-auto">
          <TextField
            className="bg-sky-50  rounded-md	"
            size="small"
            id="filled-basic"
            label="Password"
            variant="filled"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="login-btn flex items-center justify-center">
          <Button variant="contained" onClick={handleLogin}>Login</Button>
        </div>
      </motion.div>
      </div>
  );
}
