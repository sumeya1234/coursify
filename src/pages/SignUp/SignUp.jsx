import React, { useState } from "react";
import "./signup.css";
import { Eye, EyeClosed } from "lucide-react";

const SignUp = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleVisibility = () => {
    setVisiblePassword(!visiblePassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setError({ ...error, [name]: "" });
    console.log(name, value);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let errorMessage = "";
    if (name === "username") errorMessage = validateUsername(value);
    if (name === "email") errorMessage = validateEmail(value);
    if (name === "password") errorMessage = validatePassword(value);
    setError({ ...error, [name]: errorMessage });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError({ username: "", email: "", password: "" }); // Clear errors
    const userNameError = validateUsername(form.username);
    const emailError = validateEmail(form.email);
    const passwordError = validatePassword(form.password);
    setError({
      username: userNameError,
      email: emailError,
      password: passwordError,
    });
    if (!userNameError && !emailError && !passwordError) {
      console.log("Form submitted:", form);
    }
  };

  const validateUsername = (username) => {
    if (!username) return "Username is required";
    if (username.length < 2 || username.length > 50)
      return "Username must be 2–50 characters";
    return "";
  };

  const validateEmail = (email) => {
    if (!email) return "Email is required";
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
      return "Invalid email format";
    return "";
  };

  const validatePassword = (password) => {
    if (!password) return "Password is required";
    if (password.length < 8) return "Password must be at least 8 characters";
    if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(
        password
      )
    )
      return "Password must include uppercase, lowercase, number, and special character";
    return "";
  };

  return (
    <div className="w-full p-4 mx-auto my-3 bg-white rounded-lg shadow-md max-w-2xs sm:p-6 md:p-8 md:max-w-md textGray">
      <form className="formContainer" onSubmit={handleSubmit}>
        <h2 className="mb-5 text-2xl font-bold text-center">Sign Up</h2>
        <div className="formField">
          <div className="inputWrapper">
            <input
              type="text"
              id="username"
              name="username"
              placeholder=" "
              value={form.username}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full p-2 border rounded focus:outline-none focus:borderPurple ${error.username ? "border-red-500" : ""}`}
              required
              aria-describedby="username-error"
            />
            <label htmlFor="username" className="block mb-2 text-sm">
              Username
            </label>
          </div>
          {error.username && (
            <p id="username-error" className="mt-1 text-xs text-red-500">
              {error.username}
            </p>
          )}
        </div>
        <div className="formField">
          <div className="inputWrapper">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full p-2 border rounded focus:outline-none focus:borderPurple ${error.email ? "border-red-500" : ""}`}
              required
              aria-describedby="email-error"
            />
            <label htmlFor="email" className="block mb-2 text-sm">
              Email
            </label>
          </div>
          {error.email && (
            <p id="email-error" className="mt-1 text-xs text-red-500">
              {error.email}
            </p>
          )}
        </div>
        <div className="formField">
          <div className="inputWrapper">
            <input
              type={visiblePassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder=" "
              value={form.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full p-2 border rounded focus:outline-none focus:borderPurple ${error.password ? "border-red-500" : ""}`}
              required
              aria-describedby="password-error"
            />
            <label htmlFor="password" className="block mb-2 text-sm">
              Password
            </label>
            <button
              className="flex icons"
              onClick={handleVisibility}
              type="button"
            >
              {visiblePassword ? <EyeClosed /> : <Eye />}
            </button>
          </div>
          {error.password && (
            <p id="password-error" className="mt-1 text-xs text-red-500">
              {error.password}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-center text-white rounded shadow-md customPurple"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;