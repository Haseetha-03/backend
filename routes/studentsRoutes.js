import { addStudents, getStudents ,editStudents,deleteStudents} from "../controllers/studentsController.js";
import express from "express";
const router=express.Router();  
router.get("/get-students", getStudents);
router.post("/add-students", addStudents);
router.put("/edit-students", editStudents);
router.delete("/delete-students", deleteStudents);
export default router;                        