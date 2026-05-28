const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  try {
    const { orderItems, totalPrice } = req.body;

    const order = await Order.create({
      user: req.user._id,
      orderItems,
      totalPrice
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user._id
    }).populate("orderItems.product");

    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .populate("orderItems.product");

    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};