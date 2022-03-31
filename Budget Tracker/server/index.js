import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import User from "./model/login.js"
import routes from "./routes/index.js";


const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})


const transactionSchema = new mongoose.Schema({
        type: String,
        category: String,
        amount: String,
        date: String
    
})

const Transaction= new mongoose.model("transaction", transactionSchema)

app.get('/users',(req, res) => {
    User.find().then(user => res.json(user))
})

app.post("/transactions",(req, res) =>{
    const newTransaction = new Transaction({
        type: req.body.type,
        category: req.body.category,
        amount: req.body.amount,
        date: req.body.date
    })
    newTransaction.save().then(transaction => res.json(transaction))
})

// app.delete("/transactions/:id",(req, res) =>{
//   Transaction.findByIdAndDelete(req.params.id)
//   .then(() => res.json({remove: true}))
// });

app.delete('/delete/:id', function (req, res) {
    console.log("bnm,")
    var id = req.params.id;
    console.log("bnm," + id)
    User.deleteOne({ _id: id }, function (err, results) {
    });
    res.json({ success: id })

  });

routes(app);

app.listen(9002,() => {
    console.log("BE started at port 9002")
})