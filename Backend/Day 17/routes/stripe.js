var router = require("express").Router();
var path = require("path");
const stripe = require("stripe")("");

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/html/payment.html"));
});

router.post("/payment", async (req, res) => {
  try {
    const session = await stripe.checkout.session.create({
      line_items: [
        {
          amount: req.body.price * 100,
          currency: "usd",
          //   SEE VIDEO FOR MORE CODE
        },
      ],
    });
  } catch (err) {
    res.status(500).send({ err });
  }
});

module.exports = router;
