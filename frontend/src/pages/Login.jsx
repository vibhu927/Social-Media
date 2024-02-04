import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle Login
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
    <div className="grid gap-6 place-content-center h-screen bg-slate-900">
      <div className="email-field">
        <TextField
          className="bg-sky-50  rounded-md	"
          size="small"
          id="filled-basic"
          label="UserName"
          variant="filled"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="password-field">
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
      <div className="register-div">
        <span className="text-base text-zinc-50">Not a member ? </span>
        <Link to='/register' className="font-medium text-lg text-zinc-50">Register Here</Link>
      </div>
    </div>
  );
}
