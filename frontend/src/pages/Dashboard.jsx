import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const loadTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data.tasks);
  };

  const addTask = async () => {
    await api.post("/tasks", { title, description });
    setTitle("");
    setDescription("");
    loadTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    loadTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
  <div className="container">
    <div className="card">
      <h2>Dashboard</h2>

      <button className="full-btn" onClick={logout}>
        Logout
      </button>

      <div className="row">
        <input
          placeholder="New Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={addTask}>
          Add
        </button>
      </div>

      <input
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="tasks-grid">
        {tasks.map((task) => (
          <div className="task-card" key={task._id}>
            <div className="task-content">
              <p className="label">Task</p>
              <h3>{task.title}</h3>

              <p className="label">Description</p>
              <p className="desc">
                {task.description || "No description added"}
              </p>
            </div>

            <div className="task-actions">
              <button
                className="delete-btn"
                onClick={() => deleteTask(task._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
);
}