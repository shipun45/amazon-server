// IMPORT FROM PACKAGES
const express = require('express'); // like import in flutter
const mongoose = require('mongoose');
const adminRouter = require('./routes/admin');

// IMPORTS FROM OTHER FILES

const authRouter = require('./routes/auth');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');



//INIT
const PORT = 3000;

const app = express();

const DB = "mongodb+srv://kunu:kunu1999@cluster0.iuakx.mongodb.net/?retryWrites=true&w=majority"


//midleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

//connection 
mongoose.connect(DB).then(() => {
    console.log('connection successful');
}).catch(e => {
    console.log(e);
});

// creating a API
//http://<ipaddpress>/helloworld
// app.get('/helloworld', (req, res) =>{
// res.send({hi: "hello world how are you"});
// });
// app.get('/', (req, res) => {
//     res.json({name: "Prashanta"});
// });
//GET, PUT, POST, DELETE, UPDATE -> CRUD
app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}` );
} )
//localhost 