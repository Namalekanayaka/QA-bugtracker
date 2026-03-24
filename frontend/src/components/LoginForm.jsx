import React, { useState } from "react";
import axios from "axios";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      alert("Login Successful! Role: " + res.data.role);
    } catch (err) {
      alert(err.response.data.msg);
    }
  }

  return (
    <form className="bg-white p-6 rounded shadow-md w-96" onSubmit={handleLogin}>
      <h2 className="text-2xl mb-4 text-center">Login</h2>
      <input type="email" placeholder="Email" className="border p-2 w-full mb-4"
        value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" className="border p-2 w-full mb-4"
        value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit" className="bg-blue-500 text-white w-full p-2 rounded">Login</button>
    </form>
  );
}