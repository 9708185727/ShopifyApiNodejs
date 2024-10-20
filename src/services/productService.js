import { query } from "express";
import Product from "../models/Product.js";
const createProduct = async (data) => {
  return await Product.create(data);
  // await Product.create({
  //   name:data.name,
  //  description:data.description,
  //  price:data.price,
  //  category:data.category,
  //  stock:data.stock,
  // });
  // console.log("Product Added");
};
const getProduct = async (query) => {
  const limit = query.limit;
  const sort = query?.sort ? JSON.parse(query.sort) : {};
  const filter = query?.filters ? JSON.parse(query.filters) : {};
  return await Product.find().limit(limit);
};
const getProductById = async (id) => {
  return await Product.findById(id);
};
const updateProductById = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data);
};
const deleteProductById = async (id) => {
  return await Product.findByIdAndDelete(id);
};

export default {
  createProduct,
  getProduct,
  getProductById,
  updateProductById,
  deleteProductById,
};
