const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://snandhadeveloper592000:nandha56200@cluster0.s6ufz.mongodb.net/server_006?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("MongoDB Connected");    
})
.catch((err) => {
    console.log(`Connection Error: ${err.message}`);    
});


const registerSchema = new mongoose.Schema({
    userpostName: {
        type: String
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    mobileNo: {
        type: Number
    },
    password: {
        type: String,
        require: true
    },
    created: {
        type: String
    }
},
{timestamps: true});


const register = mongoose.model("register", registerSchema);



app.post("/register", async(req, res)=> {
try {
    let { email, ...restBody } = req.body;
    const checkEmail = await register.findOne({email});
    if (checkEmail) {
       return res.status(409).json({Message: "Email Already Exists.."})
    }
    let data = {
        ...req.body,
        created: "success"
    }
    const createUser = await register.create(data);
    res.json({
        createUser,
        message: "user created"
    });    
} catch (error) {
    res.json({
        Error: error
    })
}
})



let data = {
    userName: "test user",
    age: 24,
    mobileNo: 1234567890
};


app.get("/userdata", (req, res) => {
    res.json(data)
});


app.post("/createuser", (req, res) => {
    let data = {
        ...req.body,
        email: "test@gmail.com"
    };

    res.json({
        data,
        message: "user created"
    })

});





app.use("/", (req, res) => {
    res.send("Server is alive")
});


const port = 8000;

app.listen(port, () => {
    console.log("Server is running on:", port);

});