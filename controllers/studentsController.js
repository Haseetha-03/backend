const getStudents=(req, res) => {
    let stddata={name:"RM", age:30};
    res.status(200).json(stddata);
};
const addStudents=(req, res) => {
    res.status(201).json({message:"Data added successfully"});
}
const editStudents = (req,res)=>{
    // edit data
    let stddata = req.body;
    console.log("Editing student's data");
    res.status(203).json({message : "Data is edited"});
}

const deleteStudents = (req,res)=>{
    // edit data
    let stddata = req.body;
    console.log("Deleting student's data");
    res.status(203).json({message : "Data is deleted"});
}

export  {getStudents, addStudents, editStudents, deleteStudents} ;  
