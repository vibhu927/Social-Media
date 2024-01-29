import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
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
      // Make a POST request to your API
      const response = await axios.post('https://192.168.1.141:8080/users/createUser', {
        username,
        email,
        password,
      });

      // Handle the response as needed
      console.log("Registration successful:", response.data);

      // Clear input fields
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      // Handle errors
      console.error("Registration failed:", error.message);
    }
  };
  return (
    <div className="grid gap-6 place-content-center h-screen bg-slate-900">
      <div className="flex gap-6">
        <div className="email-field">
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
        <div className="password-field">
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
        <div className="email-field">
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
        <div className="password-field">
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
    </div>
  );
}
