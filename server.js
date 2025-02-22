const express = require("express");
require("dotenv").config();
const cors = require("cors");
const listRoute = require("./routes/listRoute");
const sequelize = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/datas", listRoute)

sequelize.sync({ alter: true })
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log(`server is running on ${process.env.PORT}`)
        })
    })
    .catch(error =>{
        console.error("Database connection failed:",error)
    })