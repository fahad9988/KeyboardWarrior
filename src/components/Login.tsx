import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate=useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("https://shy-pink-piranha-tam.cyclic.app/users/login", {
        email,
        password,
      })
      .then((response) => {
       if(response.data.msg=="Login Successful"){
        alert("User Logged in Successfully");
        localStorage.setItem("token",response.data.token);
        navigate("/");
        window.location.reload()
       }else{
        alert("User doesn't exist");
       }
      
      })
      .catch((error) => {
        console.log(error.response.data);
        setErrorMessage(error.response.data.message);
        alert("User couldn't login")
      });
  };

  return (
    <div className="max-w-md mx-auto my-10">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-5">Login</h2>
        {errorMessage && <p className="text-red-500 mb-5">{errorMessage}</p>}
        <div className="mb-5">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
