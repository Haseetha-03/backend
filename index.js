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