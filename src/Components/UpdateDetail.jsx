import React, { useState,useEffect } from "react";
import APIService from "../Service/API-service";
import { useNavigate, useParams } from "react-router-dom";

const UpdateDetail = () =>{
    const[student,setStudent]= useState({
        scholarNo:"",
        name:"",
        fatherName:"",
	    motherName:"",
	    standard:"",
	    section:""
    });

    const navigate = useNavigate();

    const {scholarNo}= useParams();
    console.log(scholarNo);

    useEffect(()=>{
        APIService.getStudentById(scholarNo).then((res)=>{
            setStudent(res.data);

        }).catch((error)=>{
            console.log(error);
        });
    },[]);


    const [message, setMessage]=useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setStudent({...student, [e.target.name]: value});
    };

    const studentUpdate =(e)=>{
        e.preventDefault();
        
        APIService.editStudent(student).then((res)=>{
            console.log("Update Sucessfully");
            navigate("/");
            
        }).catch((error)=>{
            console.log(error);
        });
    };

    return (
        <div className="row align-item-center" >
            <div className="mx-auto col-10 col-md-6 col-lg-4 ">
                <div className="card">
                    <div className="card-header fs-3 text-center">Add Student Details</div>
                    {message && <p className=" fs-4 text-center">{message}</p>}
                    <div className="card-body">
                        <form onSubmit={(e)=>studentUpdate(e)} >
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
                            <button type="submit" name="Submit" className="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  UpdateDetail;