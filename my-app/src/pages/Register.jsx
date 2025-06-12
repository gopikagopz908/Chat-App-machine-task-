import React, { useState } from 'react';
import InputField from '../components/inputField';
import Button from '../components/Button';
import { useRegister } from '../Hook/AuthHook';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
 const{loading,Register}=useRegister()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
  await Register(formData)

    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-primary  flex items-center justify-center">
      <div className=" p-10   w-full max-w-md ">
        <img
          src="/logo.png" 
          alt="Logo"
          className="w-34 mx-auto mb-4"
        />
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <div className="flex gap-2 items-center">
            <InputField
              label="Username"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="text-sm"
            />
            <InputField
              
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="text-sm mt-9"
            />
          </div>

          <InputField
            label="Email"
            placeholder="Enter your email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="text-sm"
          />

          <InputField
            label="Password"
            placeholder="Enter your password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="text-sm"
          />

          <p className="text-sm text-black mt-2 mb-4">
            Already have account?{' '}
            <a href="/login" className="text-blue-700 font-medium underline">
              Login
            </a>
          </p>

         <Button
           type="submit"
           label="Register"
           variant="solid"/>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
