import react from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from 'axios'
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = async()=>{
    console.log("Login : ", username," : ", password)
    const response = await axios.post(`http://${import.meta.env.VITE_PORT}/users/loginUser`, {
      username,
      password,
    });
  }
  return (
    <div className="grid gap-6 place-content-center h-screen bg-slate-900">
      <div className="email-field">
        <TextField
          className="bg-sky-50  rounded-md	"
          size="small"
          id="filled-basic"
          label="Email"
          variant="filled"
          onChange={(e)=>setUsername(e.target.value)}
        />
      </div>
      <div className="password-field">
        <TextField
          className="bg-sky-50  rounded-md	"
          size="small"
          id="filled-basic"
          label="Password"
          variant="filled"
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
      <div className="login-btn flex items-center justify-center">
        <Button variant="contained" onClick={handleClick}>Login</Button>
      </div>
    </div>
  );
}
