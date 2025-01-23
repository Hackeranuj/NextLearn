const express = require('express');
const isAuthenticated = require('../middlewares/isAuthenticated');
const {createCheckoutSession, stripeWebhook, getCourseDetailWithPurchaseStatus, getAllPurchaseCourse} = require("../controllers/coursePurchase.controller");
const router = express.Router();

router.post("/checkout/create-checkout-session", isAuthenticated, createCheckoutSession);
router.post("/webhook",  express.raw({type:"application/json"}), stripeWebhook);
router.get("/course/:courseId/detail-with-status", isAuthenticated, getCourseDetailWithPurchaseStatus);
router.get("/", isAuthenticated, getAllPurchaseCourse);


module.exports = router;