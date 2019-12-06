import express from "express";
import path from "path";
// import router from "./api-routes";

const PORT = 12345;
const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

// app.get("/api", router);

app.get("/hello", (req, res) => {
    res.json({
        data: [],
    });
});

app.listen(PORT, () => console.log(`🚀 Server is listening on port ${PORT}.`));
