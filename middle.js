//Middleware
import express from 'express';
const app = express();
app.use(express.json());//Middleware
app.get('/get-users', (req, res) => {
    res.send("Api success");
})
app.put('/edit-users', (req, res) => {
    let mydata=req.body;
    console.log(mydata);//undefined if not using middleware
    //logic to add data into your database
    res.send("data edited");
})
app.post('/add-users', (req, res) => {
    let data=req.body;
    console.log(data);//undefined if not using middleware
    //logic to add data into your database
    res.send("data added");
})
app.delete('/delete-users',(req,res)=>{
    let data=req.body;
    console.log(data);//undefined if not using middleware
    //logic to add data into your database
    res.send("data deleted");
})
app.listen(7002, () => {
    console.log(`server running at port ${7002}`);
});