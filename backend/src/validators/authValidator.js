const { z } = require("zod");

const registerSchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be 6+ chars")
});

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6)
});

module.exports = { registerSchema, loginSchema };