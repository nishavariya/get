const Footer = require("../models/footer");

exports.subscribeEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const newFooter = new Footer({ email });
    await newFooter.save();
    res.status(201).json({ success: true, message: "Subscribed successfully!" });
  } catch (error) {
    console.error("Error saving footer email:", error);
    res.status(500).json({ success: false, message: "Server error." });
  }
};
// READ
exports.get = async (req, res) => {
  try {
    const footers = await Footer.find();
    res.status(200).json(footers);
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch footers", error });
  }
};

