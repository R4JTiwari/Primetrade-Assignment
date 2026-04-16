import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

export default function Register() {
  const [form, setForm] = useState({
    name:"",
    email:"",
    password:""
  });

  const [msg,setMsg] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", form);
      navigate("/");
    } catch (error) {
      setMsg(error.response?.data?.message || "Register failed");
    }
  };

   return (
    <div className="container">
      <div className="card">
        <h2>Register</h2>

        {msg && <p>{msg}</p>}

        <form onSubmit={submit} className="auth-form">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value
              })
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value
              })
            }
          />

          <div className="auth-actions">
            <button type="submit">
              Register
            </button>

            <Link className="auth-link" to="/">
              Already have account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}