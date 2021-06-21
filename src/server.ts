import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({
    status: true
  });
});

app.post("/", (req, res) => {
  return res.status(200).json({
    status: true
  });
});

app.listen(3000, () => {
  console.log("Server is running NLW");
});