import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [loading, setLoading] = useState(false)
//   const [profileImage, setProfileImage] = useState<File | null>(null)


const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profileImage: null,
    shippingAddress: {
      street: "",
      city: "",
      pincode: "",
    },
    billingAddress: {
      street: "",
      city: "",
      pincode: "",
    },
  });
    
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData({
        ...formData,
        [parent]: { ...formData[parent], [child]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

      const handleImageUpload = (e) => {
        setFormData((prev) => ({ ...prev, profileImage: e.target.files[0] }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
    
        try {
          const formData = new FormData(e.currentTarget)
          
          const response = await axios.post(
            'https://shopping-cart-yp6d.onrender.com/register',
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          )
    
          toast({
            title: "Success",
            description: "Registration completed successfully",
          })
        } catch (error) {
          toast({
            title: "Error",
            description: "Failed to register. Please try again.",
            variant: "destructive",
          })
        } finally {
          setLoading(false)
        }
      }
    
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Registration Form</h2>

      <div className="grid grid-cols-2 gap-4">
      <div className="mb-4">
        <label className="block text-gray-700">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          className="w-full mt-1 p-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
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
          name="password    "
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
          onChange={handleImageUpload}
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
            name="address[billing][street]"
            value={formData.shippingAddress.street}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">City</label>
          <input
            type="text"
            name="city"
            value={formData.shippingAddress.city}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">Pincode</label>
          <input
            type="number"
            name="pincode"
            value={formData.shippingAddress.pincode}
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
            name="street"
            value={formData.billingAddress.street}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">City</label>
          <input
            type="text"
            name="city"
            value={formData.billingAddress.city}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">Pincode</label>
          <input
            type="number"
            name="pincode"
            value={formData.billingAddress.pincode}
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
