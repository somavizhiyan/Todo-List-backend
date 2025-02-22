const listController = require("../controller/listController");
// const { id } = req.params;
const express = require("express");

const router = express.Router();

router.get("/", listController.getData);
router.post("/create", listController.createData);
router.put("/update/:id", listController.updateData);
router.delete("/delete/:id", listController.deleteData);

module.exports = router;
