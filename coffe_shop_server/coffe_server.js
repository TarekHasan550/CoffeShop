import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Coffet is getting ready");
})

app.listen(port, () => {
  console.log(`Coffe shop server is running on port ${port}`);
})
