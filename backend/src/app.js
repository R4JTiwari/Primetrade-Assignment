const express = require("express");
const swaggerUi = require("swagger-ui-express");

const app = express();

const errorHandler = require("./middleware/errorHandler");
const swaggerSpecs = require("./config/swagger");
const cors = require("cors");
app.use(cors());

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/users", require("./routes/userRoutes"));
app.use("/api/v1/tasks", require("./routes/taskRoutes"));

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.use(errorHandler);

module.exports = app;