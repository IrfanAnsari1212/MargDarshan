const Student = require("../models/student");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { name, email, password, educationLevel, careerInterests, careerGoals } = req.body;
    const existing = await Student.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const student = new Student({ name, email, password: hashed, educationLevel, careerInterests, careerGoals });
    await student.save();
    res.status(201).json({ message: "Student registered!" });
  } catch (err) {
    res.status(500).json({ message: "Registration failed", error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await Student.findOne({ email });
    if (!student) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.json({ token, student: { name: student.name, email: student.email } });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};

exports.profile = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "Missing auth token" });
    const token = authHeader.split(" ")[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const student = await Student.findById(payload.id).select("-password");
    res.json(student);
  } catch (err) {
    res.status(401).json({ message: "Unauthorized", error: err.message });
  }
};
