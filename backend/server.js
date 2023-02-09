const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/shows", require("./routes/apiRoutes"));

app.post("/api/shows", (req, res) => {
    if (!req.body.id) {
        res.status(400);
        throw new Error("Send data");
    }

    res.json(req.body);
});

app.use(errorHandler);

app.listen(port, () => console.log(`Listening on ${port}`));
