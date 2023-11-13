const router = require("express").Router();
const { default: mongoose } = require("mongoose");
const Room = require("../../models/Room");
const SSLCommerzPayment = require('sslcommerz-lts');
const Payment = require("../../models/Payment");
const store_id = 'hotel654b12a0eb375'
const store_passwd = 'hotel654b12a0eb375@ssl'
const is_live = false //true for live, false for sandbox
router.get("/", (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

const trans_id = new mongoose.Types.ObjectId().toString();

router.post("/order", async(req, res, next) => {
  try {
    const room = await Room.findById(req.body.room._id);
    if (!room) throwError("room not found", 404);
    console.log(req.body.room._id,room)
const data = {
  total_amount: 1000,
  currency: 'BDT',
  tran_id: 'adsfasdf', // use unique tran_id for each api call
  success_url: `http://localhost:5173/success`,
  fail_url: 'http://localhost:5173/fail',
  cancel_url: 'http://localhost:5173/cancel',
  ipn_url: 'http://localhost:5173/ipn',
  shipping_method: 'Courier',
  product_name: 'Computer.',
  product_category: 'Electronic',
  product_profile: 'general',
  cus_name: 'Customer Name',
  cus_email: 'customer@example.com',
  cus_add1: 'Dhaka',
  cus_add2: 'Dhaka',
  cus_city: 'Dhaka',
  cus_state: 'Dhaka',
  cus_postcode: '1000',
  cus_country: 'Bangladesh',
  cus_phone: '01711111111',
  cus_fax: '01711111111',
  ship_name: 'Customer Name',
  ship_add1: 'Dhaka',
  ship_add2: 'Dhaka',
  ship_city: 'Dhaka',
  ship_state: 'Dhaka',
  ship_postcode: 1000,
  ship_country: 'Bangladesh',
};
const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
sslcz.init(data).then(apiResponse => {
  // Redirect the user to payment gateway
  let GatewayPageURL = apiResponse.GatewayPageURL
  res.send({url: GatewayPageURL})
  console.log('Redirecting to: ', GatewayPageURL)
});

const orderDetails = new Payment({
  'transactionId' : trans_id,
  'userId' : req.user._id,
  'roomId' : req.body.room._id,

})


  } 
  
  catch (error) {
    next(error);
  }
});


module.exports = router;
