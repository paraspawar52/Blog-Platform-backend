const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./Database/database");
const { createBlog } = require("./Routes/createBlog");

const app = express();
dotenv.config();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", require("./Routes/createBlog"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
