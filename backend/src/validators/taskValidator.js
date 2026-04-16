const { z } = require("zod");

const taskSchema = z.object({
  title: z.string().min(1, "Title required"),
  description: z.string().optional(),
  completed: z.boolean().optional()
});

module.exports = { taskSchema };