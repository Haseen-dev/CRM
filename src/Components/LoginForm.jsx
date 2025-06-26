import React, { useState } from "react";
import './Form.css'
import Form from "./Form.jsx";
function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.email === "admin@example.com" && form.password === "admin123") {
      setLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setForm({ email: "", password: "" });
  };

  return (
    <div className="contact-right" style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      {loggedIn ? (
        <>
          <Form/>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Login Form</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label><br />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Password:</label><br />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" style={{ marginTop: "10px" }}>
              Login
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default LoginForm;
