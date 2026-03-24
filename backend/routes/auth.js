const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../db");

// Register
router.post("/register", async (req, res) => {
    const { name, email, password, role } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    db.query("INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)",
        [name, email, hashed, role],
        (err, result) => {
            if (err) return res.status(500).send(err);
            res.send({ msg: "User registered" });
        });
});

// Login
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    db.query("SELECT * FROM users WHERE email=?", [email], async (err, result) => {
        if (err) return res.status(500).send(err);
        if (result.length === 0) return res.status(400).send({ msg: "User not found" });
        const match = await bcrypt.compare(password, result[0].password);
        if (!match) return res.status(400).send({ msg: "Invalid password" });
        const token = jwt.sign({ id: result[0].id, role: result[0].role }, "SECRETKEY");
        res.send({ token, role: result[0].role });
    })
})

module.exports = router;