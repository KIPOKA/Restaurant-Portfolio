import React, { useEffect, useState } from 'react';
import { Button, TextInput } from 'flowbite-react';
import Logo from '../assets/logo.png';
import Swal from 'sweetalert2';
const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    // Check if both email and password are not empty
    setIsButtonDisabled(!email && !password);
  }, [email, password]);
  const handleLogin =()=>{
    // The pop up after login successfully
        Swal.fire({
          title: "Login successfull !", 
          icon: "success",
          timer: 1500,
        });
  }

  const handleReset =()=>{
     Swal.fire({
      title: "Reset password",
      input: "email", 
      inputPlaceholder: "Enter your email address",
      showCancelButton: true,
      confirmButtonColor: "#2FBE05",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({
          title:"The link to reset successfully sent !",
          icon:"success",
          confirmButtonColor: "#2FBE05",
          timer: 1500,
        });
        setEmail("");
        setPassword("");
        
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
    // if (email) {
    //   Swal.fire(`Entered email: ${email}`);
    // }
  }
  
  return (
    <div className="flex justify-center items-center h-screen bg-white s">
      
        
      <div className="w-full max-w-md mx-auto p-8 rounded-lg shadow-xl bg-silver ">
      <div className='flex inline-block items-center mb-12 justify-center'>
      <img src={Logo}  alt='' className='rounded-md  transition-all duration-300 w-20 items-center'/>
      <h3 className="text-2xl font-semibold text-center text-brandPrimary ">Sign in </h3>
        
      </div> 
        <div className="space-y-4 ">
         
          <TextInput
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="w-full text-sm py-2 px-3 rounded  focus:outline-none focus:border-brandPrimary"
          />
        
          <TextInput
            id="password"
            type="password"
            placeholder="Password"
            required
            className="w-full text-sm py-2 px-3 rounded  focus:outline-none focus:border-brandPrimary"
          />
          <div className="flex justify-center">
            <Button  disabled={isButtonDisabled}
            onClick={handleLogin}
              className={`bg-greenPrimary text-white py-1 px-8 rounded hover:bg-brandSecondary mb-4 ${
                isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
              }`}>

                <h1 className='text-xl'> Log In</h1>
             
            </Button>
          </div>
              {/* Forgot password */}
          <div className="row justify-between text-sm font-medium text-gray-500 dark:text-gray-300 ">
            Forgot password ? &nbsp;
            <button  onClick={handleReset} className="text-cyan-700 hover:underline dark:text-cyan-500">
              Reset password
            </button>
          </div>
              {/* Don't ahave an account */}
          <div className="row justify-between text-sm font-medium text-gray-500 dark:text-gray-300 ">
            Not registered?&nbsp;
            <a href="/home" alt='' className="text-cyan-700 hover:underline dark:text-cyan-500">
              Create account
            </a>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
