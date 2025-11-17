const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

const dbUrl = "mongodb+srv://Prou:Prou2025@cluster0.pyvrw1d.mongodb.net/?appName=Cluster0";

mongoose.connect(dbUrl)
  .then(() => console.log('MongoDB Connected!'))
  .catch((err) => console.log('DB Connection Error:', err));


app.get('/', (req, res) => {
  res.send('Welcome to the Employee/Task API!');
});

const employeeRoutes = require('./routes/employees');
app.use('/api/employees', employeeRoutes);

const taskRoutes = require('./routes/tasks');
app.use('/api/tasks', taskRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
