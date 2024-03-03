const product=require('../models/product.model');

const getProducts=async (req, res) => {
    const prods = await product.find({});
    res.status(200).json(prods);
  }

  const getProduct=async (req, res) => {
    try {
      const id = req.params.id.trim();
      const prod = await product.findById(id);
      res.status(200).json(prod);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  const postProduct=async (req, res) => {
    try {
      const prod = await product.create(req.body);
      res.status(200).json(prod);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  const updateProduct=async (req, res) => {
    try {
      const id = req.params.id.trim();
      const prod = await product.findByIdAndUpdate(id, req.body);
      if (!prod) return res.status(404).json({ message: "Item not found" });
  
      const updatedProd = await product.findById(id);
      res.status(200).json(updatedProd);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  const deleteProduct=async (req, res) => {
    try {
      const id = req.params.id.trim();
      const prod = await product.findByIdAndDelete(id);
      if (!prod) return res.status(404).json({ message: "Item not found" });
      res.status(200).json({ message: "Item deleted!" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  module.exports={
    getProducts,
    getProduct,
    postProduct,
    updateProduct,
    deleteProduct
  }