 import express from 'express';
 import studentsRoutes from './routes/studentsRoutes.js';
 import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());
app.use('/', studentsRoutes);
// app.get('/',(req,res)=>{
//     res.send("Hello this is from Backend Development");
// })
// app.put('/update-user',(req,res)=>{
//     let mydata = req.body;
//     console.log(mydata)
//     res.send("data is updated");
// })

// app.delete('/delete-user',(req,res)=>{
//     let mydata = req.body;
//     console.log(mydata)
//     res.send("data is deleted");
// })
app.listen(7002, () => {
  console.log('Server running at port number 7002');
});