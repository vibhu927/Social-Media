import Logo from "../components/Logo/Logo";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CustomInput from "../components/input/input";

export default function Login() {
  const navigate = useNavigate();
  
  return (
    <div 
      className="bg-sky-50 h-screen flex items-center justify-center" 
    >
       <div className="bg-slate-900 rounded p-12 rounded-xl"
      >
        <div className="header">
          <Logo linkUrl="/register" linkName={"Signup Here."} paragraph={"Not a member ?"} />
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <Formik>
            <form className='flex flex-col gap-4'>
            <CustomInput type="text" id="username" label="Username" variant="filled" textcolor='black'/>
            <CustomInput type="password" id="password" label="Password" variant="filled" textcolor='black' />
          </form>
            </Formik>
          <Button variant="contained" >Login</Button>
        </div>
        </div>
      </div>
  );
}



