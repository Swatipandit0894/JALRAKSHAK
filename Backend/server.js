require("dotenv").config(); // Load environment variables
const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const { evaluateSensorData } = require('./alertService'); // Import your alert evaluation function

const app = express();
app.use(express.json());
app.use(cors());

// **MySQL Database Connection**
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect(err => {
  if (err) {
    console.error("❌ MySQL Connection Failed:", err);
  } else {
    console.log("✅ MySQL Connected...");
  }
});

/**
 * User Signup API
 * - Validates that name, email, and password are provided.
 * - Checks if the email is already registered.
 * - Hashes the password and inserts the user into the database.
 */
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input fields
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // Check if email already exists in the database
    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
      if (err) {
        console.error("❌ Database Query Error:", err);
        return res.status(500).json({ message: "Internal Server Error!" });
      }

      if (result.length > 0) {
        return res.status(400).json({ message: "Email already registered!" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert the new user into the database
      db.query(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, hashedPassword],
        (err, result) => {
          if (err) {
            console.error("❌ Insert Error:", err);
            return res.status(500).json({ message: "Failed to register user!" });
          }
          res.status(201).json({ message: "User registered successfully!" });
        }
      );
    });
  } catch (error) {
    console.error("❌ Server Error:", error);
    res.status(500).json({ message: "Something went wrong!" });
  }
});

/**
 * New endpoint to simulate receiving sensor data and evaluating alerts.
 * Expects sensor data as JSON in the request body, for example:
 * {
 *   "ph": 4.3,
 *   "turbidity": 7.2,
 *   "conductivity": 2.0,
 *   "temperature": 36
 * }
 * It then evaluates the sensor data against your rules and returns any alerts.
 */
app.post("/sensor-data", (req, res) => {
  const sensorData = req.body;
  const alerts = evaluateSensorData(sensorData);
  res.status(200).json({ alerts });
});

// **Start Server**
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
