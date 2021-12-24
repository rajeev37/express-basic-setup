import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import cors from "cors";
import userRoutes from "./routes/user.js";
import "./util/constants.js";
const app = express();

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API's List",
            version: "1.0.0",
            description: "Demo express APIs"
        },
        servers: [
            {
                url: global.domain
            }
        ],
    },
    apis: ["./routes/*.js"]
}

const specs = swaggerJsDoc(options);

app.use(bodyParser.json( { limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded( { limit: "30mb", extended: true}));
app.use(cors());
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));

// routes.
app.use("/user", userRoutes);

var CONNECTION_URL = global.mongoUri;
const PORT = process.env.PORT || global.port;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);
