import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
  const navigate=useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
     });

     const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [message, setMessage] = useState("");

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post('http://localhost:9000/login', formData, {
    
      headers: { "Content-Type": "application/json"}
    })
      .then((response) => {
        const data=response.data._id;
        // console.log("printing the id:", id)

        toast.success('Login successful!');
        setIsRegistered(true);
      })
      .catch((error) => {
        toast.error('Login Failed!');
      });
    

    // try {
    //   const response = await axios.post("http://localhost:9000/login", {
    //     email,
    //     password,
    //   }, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });

    //   // Assuming successful login returns a message or token
    //   setMessage(`Login successful! Token: ${response.data.token || response.data.message}`);
    // } catch (error) {
    //   // Handle error cases
    //   setMessage(
    //     error.response?.data?.message || "Login failed. Please try again."
    //   );
    // }
  };

  //Login from Localstorage
  
  const handleLogin=(e)=>{
    e.preventDefault();
    const loggedUser= JSON.parse(localStorage.getItem("user"));
    if (formData.email===loggedUser.email && formData.password===loggedUser.password) {
      localStorage.setItem("loggedIn", true)
      navigate("/")
      alert("Login successfully")
    }else{
      alert("wrong email OR password ")
    }
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-gradient-to-tr to-blue-400 from-green-500 p-10'>
      <ToastContainer/>
      
      <div className="flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              // onChange={(e) => setFormData({...formData,[e.target.email]:e.target.value,})}
              className="w-full px-4 py-2 text-sm border rounded-lg shadow-sm  focus:ring-blue-300 border-gray-300 focus:outline-none focus:ring-2"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Password Field */}
          <div className="mb-4">  
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              // onChange={(e) => setFormData({...formData,[e.target.password]:e.target.value,})}
              className="w-full px-4 py-2 text-sm border rounded-lg shadow-sm  focus:ring-blue-300 border-gray-300 focus:outline-none focus:ring-2"
              placeholder="Enter your password"
              required
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login
