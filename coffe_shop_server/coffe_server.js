import express from "express";
import cors from "cors";
import 'dotenv/config'
import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
console.log(process.env.DB_USER)


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@tarekhassan550.lvdr3ny.mongodb.net/?retryWrites=true&w=majority&appName=TarekHassan550`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const coffeCollection = client.db("coffeDb").collection("newCoffe")

    app.get("/Coffes", async (req, res) => {
      const result = await coffeCollection.find().toArray();
      res.send(result);
    })

    app.get("/Coffes/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeCollection.findOne(query);
      res.send(result);
    })

    app.post("/Coffes", async (req, res) => {
      const newCoffe = req.body;
      console.log(newCoffe);
      const result = await coffeCollection.insertOne(newCoffe)
      res.send(result);
    })

    app.put("/Coffes/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updatedCoffe = req.body;
      const option = { upsert: true };

      const updatedDoc = { $set: updatedCoffe };
      const result = await coffeCollection.updateOne(filter, updatedDoc, option);
      res.send(result);
    })

    app.delete("/Coffes/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeCollection.deleteOne(query);
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get("/", (req, res) => {
  res.send("Coffet is getting ready");
})

app.listen(port, () => {
  console.log(`Coffe shop server is running on port ${port}`);
})
