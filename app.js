const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const config = require("./config");
const mongoose = require("mongoose");
const employeeModel = require("./models/Employee");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  await mongoose.connect(config.uri);
  const empoloyeeModels = await employeeModel.find();
  res.render("index", { data: empoloyeeModels, title: "Employee List" });
});

app.post("/addEmployee", async (req, res) => {
  const { name, position, email, phone, salary } = req.body;
  const tempData = { name, position, email, phone, salary };
  try {
    await employeeModel.collection.insertOne(tempData);
    res.redirect("/");
  } catch (e) {
    console.log(e);
  }
});

app.post("/delEmployee", async (req, res) => {
  const idObj = req.body;
  try {
    await employeeModel.findByIdAndDelete(idObj.id.trim());
    res.redirect("/");
    console.log("xoa thanh cong");
  } catch (e) {
    console.log(e);
  }
});
app.post("/updateEmployee", async (req, res) => {
  const { id, name, position, email, phone, salary } = req.body;
  const tempData = { name, position, email, phone, salary };
  const tempID= id.trim()
  console.log(tempID);
  try {
    await employeeModel.findByIdAndUpdate( tempID , tempData );
    res.redirect("/");
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is running on port http://localhost:${port}`);
});
