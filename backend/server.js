require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

const authRoutes = require("./routes/auth");
const bugRoutes = require("./routes/bugs");
const commentRoutes = require("./routes/comments");

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/bugs", bugRoutes);
app.use("/api/comments", commentRoutes);

app.get("/", (req, res) => {
    res.send("QA Bug Tracker Backend Running");
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));