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
      <form className="card" onSubmit={submit}>
        <h2>Register</h2>
        {msg && <p>{msg}</p>}

        <input placeholder="Name"
          onChange={(e)=>setForm({...form,name:e.target.value})}
        />

        <input placeholder="Email"
          onChange={(e)=>setForm({...form,email:e.target.value})}
        />

        <input type="password" placeholder="Password"
          onChange={(e)=>setForm({...form,password:e.target.value})}
        />

        <button>Register</button>
        <Link to="/">Already have account?</Link>
      </form>
    </div>
  );
}