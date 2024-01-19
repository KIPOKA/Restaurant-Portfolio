import React, { useState } from 'react';
import { Button, TextInput, Checkbox, Label } from 'flowbite-react';
import Logo from '../assets/logo.png';
import Swal from 'sweetalert2';

/**
 * Signup component for user registration.
 * @returns {JSX.Element} Signup component.
 */
const Signup = () => {
  // State for form fields and checkbox
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  /**
   * Handles checkbox state change.
   */
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleLogin =()=>{
    Swal.fire({
      icon: "success",
      title: "Login successfull !",
      text: "",
    });
  }

  // JSX structure for Signup component
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-full max-w-md mx-auto p-8 rounded-lg shadow-xl bg-silver">
        {/* Logo and Title section */}
        <div className="flex inline-block items-center mb-12 justify-center">
          <img src={Logo} alt='' className='rounded-md transition-all duration-300 w-20 items-center'/>
          <h3 className="text-2xl font-semibold text-center text-brandPrimary ">Sign Up ! </h3>
        </div>
        {/* Form section */}
        <div className="space-y-4">
          {/* Full Name Input */}
          <TextInput
            id="name"
            placeholder="Full name"
            defaultValue={name}
            required
            className="w-full text-sm py-2 px-3 rounded focus:outline-none focus:border-brandPrimary"
          />
          {/* Email Input */}
          <TextInput
            id="email"
            placeholder="Email address"
            defaultValue={email}
            required
            className="w-full text-sm py-2 px-3 rounded focus:outline-none focus:border-brandPrimary"
          />
          {/* Password Input */}
          <TextInput
            id="password"
            type="password"
            placeholder="Password"
            defaultValue={password}
            required
            className="w-full text-sm py-2 px-3 rounded focus:outline-none focus:border-brandPrimary"
          />
          {/* Confirm Password Input */}
          <TextInput
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            defaultValue={confirmPassword}
            required
            className="w-full text-sm py-2 px-3 rounded focus:outline-none focus:border-brandPrimary"
          />
          {/* Terms and Conditions Checkbox */}
          <div className="flex items-center gap-2">
            <Checkbox
              id="remember"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className='checkbox checkbox-success checkbox-sm '
            />
            <Label htmlFor="remember">Terms and conditions</Label>
          </div>
          {/* Signup Button */}
          <div className="flex justify-center">
            <Button
                onClick={handleLogin}
              className={`bg-greenPrimary text-white py-1 px-8 rounded hover:bg-brandSecondary mb-4 ${isChecked ? '' : 'cursor-not-allowed opacity-50'}`}
              disabled={!isChecked}
            >
              <h1 className='text-xl'>Sign Up</h1>
            </Button> 
          </div>
          {/* Sign In Link */}
          <div className="row justify-between text-m font-medium text-gray-500 dark:text-gray-300 ">
            registered?&nbsp;
            <a href="https://www.flowbite-react.com/docs/components/modal" alt='' className="text-cyan-700 hover:underline dark:text-cyan-500">
              Sign In
            </a>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Signup;
