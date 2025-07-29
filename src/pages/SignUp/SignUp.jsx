import React from 'react'
import "./signup.css"
const SignUp = () => {
  return (
    <>
      <div className="max-w-md p-6 mx-auto my-3 bg-white rounded-lg shadow-md textGray">
        <form action="" className="formContainer">
          <h2 className="mb-5 text-2xl font-bold text-center textOrange">
            Sign Up
          </h2>
          <div className="flex gap-3">
            <div className=" formField">
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder=" "
                className="w-full p-2 border rounded focus:outline-none focus:borderOrange"
                required
              />
              <label htmlFor="firstname" className="block mb-2 text-sm">
                First Name
              </label>
            </div>
            <div className="formField">
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder=" "
                className="w-full p-2 border rounded focus:outline-none focus:borderOrange"
                required
              />
              <label htmlFor="lastname" className="block mb-2 text-sm">
                Last Name
              </label>
            </div>
          </div>
          <div className="formField">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              className="w-full p-2 border rounded focus:outline-none focus:borderOrange"
              required
            />
            <label htmlFor="email" className="block mb-2 text-sm">
              Email
            </label>
          </div>
          <div className="formField">
            <input
              type="password"
              id="password"
              name="password"
              placeholder=" "
              className="w-full p-2 border rounded focus:outline-none focus:borderOrange"
              required
            />
            <label htmlFor="password" className="block mb-2 text-sm ">
              Password
            </label>
          </div>
        </form>
      </div>
    </>
  )
}

export default SignUp