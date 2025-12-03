const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Razorpay instance
const razorpay = new Razorpay({
    key_id: "rzp_test_RnEBCcWxd2r8jr",
    key_secret: "3Q5T0O70ZOvrMbRa0DLBhbhY"
});

// API to create order
app.post("/create-order", async (req, res) => {
    const options = {
        amount: 24900,        // 249 INR in paise
        currency: "INR",
        receipt: "order_rcptid_11"
    };

    try {
        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error creating order");
    }
});

// Server start
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
