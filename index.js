// import http from 'http';

// const server=http.createServer((req,res) => {
//     console.log(req.method);
//     if(req.url==="/users"){
//         res.writeHead(200, {"content-Type": "application/json"});
//         res.end(JSON.stringify({name: "thub"}))
//     }
//     else{
//     res.writeHead(200,{"content-type": "text/plain"});
//     res.end("Hello this is from backend")
//     }
// });

// server.listen(7007 ,()=>{
//    console.log(`server running at port ${7007}`);
// });
// import express from 'express';

// const app = express();

// app.get('/',(req,res)=>{
//     res.send("Hello this is from Backend Development");
// })
// app.listen(7707, () => {
//   console.log('Server running at port number 7707');
// });
// import express from 'express';
// const app =express();

// //middleware
// app.use(express.json());
// app.get('/',(req,res)=>{
//     console.log("hello Haseetha")
//     res.send("Api Success");
// })
// app.post('/add-user',(req,res)=>{
//     let data=req.body;
//     console.log(data);
//     //logic to add data into your data base
//     res.send("data added");
// });
// app.listen(7007,()=>{
//     console.log("Server  running at port 7000");
// })
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import studentRouter from './routes/studentsRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://ahaladhinitummala_db_user:Haseetha20@cluster0.ohnvujh.mongodb.net/").then(() => console.log("db connected"))
.catch((error) => console.log(error));

app.use('/', studentRouter);
app.get('/users', (req, res) => {
    console.log("hello this is");
    res.send("hello this is from backend");
})

app.listen(2885, () => {
    console.log("server running at port 2885")
});