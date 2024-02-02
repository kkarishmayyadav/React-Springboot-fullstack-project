
import React, { useState } from "react";
import APIService from "../Service/API-service";

const AddStudent = () => {

    const[student,setStudent]= useState({
        scholarNo:"",
        name:"",
        fatherName:"",
	    motherName:"",
	    standard:"",
	    section:""
    });

    const [message, setMessage]=useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setStudent({...student, [e.target.name]: value});
    };

    const StudentRegister =(e)=>{
        e.preventDefault();
        
        APIService.saveStudent(student).then((res)=>{
            console.log("Added Sucessfully");
            setMessage("Added Sucessfully");
            setStudent({
                    scholarNo:"",
                    name:"",
                    fatherName:"",
                    motherName:"",
                    standard:"",
                    section:""
            });
        }).catch((error)=>{
            console.log(error.response.data);
        });
    };

    return (
        <div className="row align-item-center" >
            <div className="mx-auto col-10 col-md-6 col-lg-4 ">
                <div className="card">
                    <div className="card-header fs-3 text-center">Add Student Details</div>
                    {message && <p className=" fs-4 text-center">{message}</p>}
                    <div className="card-body">
                        <form onSubmit={(e)=>StudentRegister(e)} >
                            <div className="mb-3 ">
                                <input type="text" name="scholarNo" className="form-control " placeholder="Scholar Number" onChange={(e)=>handleChange(e)} value={student.scholarNo}/>
                            </div>
                            <div className="mb-3">
                                <input type="text" name="name" className="form-control " placeholder="Student's Name" onChange={(e)=>handleChange(e)} value={student.name} />
                            </div>
                            <div className="mb-3">
                                <input type="text" name="fatherName" className="form-control " placeholder="Father's Name" onChange={(e)=>handleChange(e)} value={student.fatherName} />
                            </div>
                            <div className="mb-3">
                                <input type="text" name="motherName" className="form-control" placeholder="Mother's Name" onChange={(e)=>handleChange(e)} value={student.motherName} />
                            </div>
                            <div className="mb-3">
                                <input type="text" name="standard" className="form-control" placeholder="Standard" onChange={(e)=>handleChange(e)} value={student.standard} />
                            </div>
                            <div className="mb-3">
                                <input type="text" name="section" className="form-control" placeholder="Section" onChange={(e)=>handleChange(e)} value={student.section} />
                            </div>
                            <button type="submit" name="Submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AddStudent;