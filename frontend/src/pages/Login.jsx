import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (error) {
      setMsg(error.response?.data?.message || "Login failed");
    }
  };

 return (
  <div className="container">
    <div className="card">
      <h2>Login</h2>

      <form onSubmit={submit} className="auth-form">
        <input
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <div className="auth-actions">
          <button type="submit">Login</button>

          <Link className="auth-link" to="/register">
            Create account
          </Link>
        </div>
      </form>
    </div>
  </div>
);
}