import react from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Register() {
  return (
    <div className="grid gap-6 place-content-center h-screen bg-slate-900">
      <div className="flex gap-6">
        <div className="email-field">
          <TextField
            className="bg-sky-50 rounded-md	"
            size="small"
            id="filled-basic"
            label="Username"
            variant="filled"
          />
        </div>
        <div className="password-field">
          <TextField
            className="bg-sky-50 rounded-md	"
            size="small"
            id="filled-basic"
            label="Email"
            variant="filled"
          />
        </div>
      </div>
      <div className="flex gap-6">
        <div className="email-field">
          <TextField
            className="bg-sky-50  rounded-md	"
            size="small"
            id="filled-basic"
            label="Password"
            variant="filled"
          />
        </div>
        <div className="password-field ">
          <TextField
            className="bg-sky-50 rounded-md	"
            size="small"
            id="filled-basic"
            label="Confirm Password"
            variant="filled"
          />
        </div>
      </div>
      <div className="login-btn flex items-center justify-center">
        <Button variant="contained">Register</Button>
      </div>
    </div>
  );
}
