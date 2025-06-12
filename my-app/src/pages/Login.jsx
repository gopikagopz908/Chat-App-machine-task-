import React from "react";
import InputField from "../components/inputField";
import Button from "../components/Button";
import { useState } from "react";
import { useLogin } from "../Hook/AuthHook";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
const{loading,Login}=useLogin()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    await Login(data)
    console.log(data)
  };
  return (
    <div className="bg-primary w-full h-screen flex items-center justify-center">
      <div className="p-10 ">
        <img
          src="/logo.png" 
          alt="Logo"
          className="w-34 mx-auto mb-4"
        />
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Log in</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <InputField
              label="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={data.email}
              onChange={handleChange}
              className="text-sm"
            />

            <InputField
              label="password"
              name="password"
              type="password"
              value={data.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="text-sm"
            />
          </div>
          <Button label="Log in" variant="solid" />
        </form>
      </div>
    </div>
  );
}

export default Login;
