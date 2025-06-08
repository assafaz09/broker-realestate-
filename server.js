const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "website")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "website", "index.html"));
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("📝 טופס חדש:", name, email, message);

  res.json({ success: true }); 
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
