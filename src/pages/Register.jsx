import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [loading, setLoading] = useState(false)
    const navigate=useNavigate();
//   const [profileImage, setProfileImage] = useState<File | null>(null)


const [formData, setFormData] = useState({
  fname: "",
  lname: "",
  email: "",
  profileImage: null,
  phone: "",
  password: "",
  shippingStreet: "",
  shippingCity: "",
  shippingPincode: "",
  billingStreet: "",
  billingCity: "",
  billingPincode: "",
});
    
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name.includes(".")) {
  //     const [parent, child] = name.split(".");
  //     setFormData({
  //       ...formData,
  //       [parent]: { ...formData[parent], [child]: value },
  //     });
  //   } else {
  //     setFormData({ ...formData, [name]: value });
  //   }
  // };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

      // const handleImageUpload = (e) => {
      //   setFormData((prev) => ({ ...prev, profileImage: e.target.files[0] }));
      // };
      const handleFileChange = (e) => {
        setFormData({ ...formData, profileImage: e.target.files[0] });
      };

      // 
      
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // const form = new FormData();
        // form.append("fname", formData.fname);
        // form.append("lname", formData.lname);
        // form.append("email", formData.email);
        // form.append("profileImage", formData.profileImage);
        // form.append("phone", formData.phone);
        // form.append("password", formData.password);
        // form.append("address[shipping][street]", formData.shippingStreet);
        // form.append("address[shipping][city]", formData.shippingCity);
        // form.append("address[shipping][pincode]", formData.shippingPincode);
        // form.append("address[billing][street]", formData.billingStreet);
        // form.append("address[billing][city]", formData.billingCity);
        // form.append("address[billing][pincode]", formData.billingPincode);
    
        try {
          const response = await axios.post(
            "https://shopping-cart-yp6d.onrender.com/register",
            formData,
            {
              headers: {"Content-Type": "application/json"}
            });
          alert("Registration successful!");
          console.log(response.data);
        } catch (error) {
          console.error(error);
          alert("Error during registration!");
        }
      };
      
  //To store value in local storage
  
  const handleRegister=(e)=>{
    e.preventDefault();
    localStorage.setItem("user",JSON.stringify(formData));
      navigate("/login")
  }
    
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <form
      onSubmit={handleRegister}
      className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Registration Form</h2>

      <div className="grid grid-cols-2 gap-4">
      <div className="mb-4">
        <label className="block text-gray-700">First Name</label>
        <input
          type="text"
          name="fname"
          value={formData.fname}
          onChange={handleInputChange}
          className="w-full mt-1 p-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Last Name</label>
        <input
          type="text"
          name="lname"
          value={formData.lname}
          onChange={handleInputChange}
          className="w-full mt-1 p-2 border rounded-md"
          required
        />
      </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full mt-1 p-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full mt-1 p-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Profile Image</label>
        <input
          type="file"
          name="profileImage"
          onChange={handleFileChange}
          className="w-full mt-1 p-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Phone</label>
        <input
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full mt-1 p-2 border rounded-md"
          required
        />
      </div>

      <fieldset className="mb-4">
        <legend className="font-semibold text-gray-700 mb-2">
          Shipping Address
        </legend>
        <div className="mb-2">
          <label className="block text-gray-700">Street</label>
          <input
            type="text"
            name="shippingStreet"
            value={formData.shippingStreet}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">City</label>
          <input
            type="text"
            name="shippingCity"
            value={formData.shippingCity}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">Pincode</label>
          <input
            type="number"
            name="shippingPincode"
            value={formData.shippingPincode}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border rounded-md"
            required
          />
        </div>
      </fieldset>

      <fieldset className="mb-4">
        <legend className="font-semibold text-gray-700 mb-2">
          Billing Address
        </legend>
        <div className="mb-2">
          <label className="block text-gray-700">Street</label>
          <input
            type="text"
            name="billingStreet"
            value={formData.billingStreet}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">City</label>
          <input
            type="text"
            name="billingCity"
            value={formData.billingCity}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">Pincode</label>
          <input
            type="number"
            name="billingPincode"
            value={formData.billingPincode}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border rounded-md"
            required
          />
        </div>
      </fieldset>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
      >
        Register
      </button>
    </form>
  </div>

  )
}

export default Register
