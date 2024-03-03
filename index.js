const express = require("express");
const mongoose = require("mongoose");
//const product = require("./models/product.model.js");
const { ObjectId } = require("mongodb");
const productRoute=require('./routes/product.route')
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// route
app.use('/api/products',productRoute)

mongoose
  .connect(
    "mongodb+srv://CRUDmongodb:CRUDmongodb@cluster0.8g4qlwy.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("DB connected!");
    app.listen(3000, () => {
        console.log("Listening on port 300");
      });
  })
  .catch((err) => console.log("Unable to connect db!"));

app.get("/", (req, res) => {
  res.send("Node API");
});




/*app.get("/api/products", async (req, res) => {
  const prods = await product.find({});
  res.status(200).json(prods);
});

app.get("/api/products/:id", async (req, res) => {
  try {
    const id = req.params.id.trim();
    const prod = await product.findById(id);
    res.status(200).json(prod);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/products", async (req, res) => {
  try {
    const prod = await product.create(req.body);
    res.status(200).json(prod);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/api/products/:id", async (req, res) => {
  try {
    const id = req.params.id.trim();
    const prod = await product.findByIdAndUpdate(id, req.body);
    if (!prod) return res.status(404).json({ message: "Item not found" });

    const updatedProd = await product.findById(id);
    res.status(200).json(updatedProd);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete("/api/products/:id", async (req, res) => {
  try {
    const id = req.params.id.trim();
    const prod = await product.findByIdAndDelete(id);
    if (!prod) return res.status(404).json({ message: "Item not found" });
    res.status(200).json({ message: "Item deleted!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
*/

