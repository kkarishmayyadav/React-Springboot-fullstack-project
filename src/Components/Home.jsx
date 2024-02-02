import React, { useEffect, useState } from "react";
import APIService from "../Service/API-service";
import { Link } from "react-router-dom";

const Home = () => {

    const [studentList, setStudentList] = useState([]);
    const [message, setMessage]=useState("");

    useEffect(()=>{
        init();
     },[]);
     
    const init=()=>{
        APIService.getAllStudent().then((res)=>{
            console.log(res.data);
            setStudentList(res.data);
        }).catch((error)=>{
            console.log(error);
        });
    };

    const deleteStudent = (studentId)=>{
        APIService.deleteStudent(studentId).then((response)=>{
            console.log("delete");
            setMessage("deleted Sucessfully");
            init();
        }).catch((error)=>{
            console.log(error);
        });
    };

    

    return (
        <div className="container">
            <div className="row">
                <div className="col md-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-header fs-3 text-center">All Student Deatails</div>
                            {message && <p className=" fs-4 text-center">{message}</p>}
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Scholar No.</th>
                                        <th scope="col">Student Name</th>
                                        <th scope="col">Father Name</th>
                                        <th scope="col">Mother Name</th>
                                        <th scope="col">Class</th>
                                        <th scope="col">Section</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {studentList.map((stu)=>(
                                        <tr>
                                        <td>{stu.scholarNo}</td>
                                        <td>{stu.name}</td>
                                        <td>{stu.fatherName}</td>
                                        <td>{stu.motherName}</td>
                                        <td>{stu.standard}</td>
                                        <td>{stu.section}</td>
                                        <td>
                                           <Link  to={'/update/'+stu.scholarNo}   className="btn btn-primary">Edit</Link>
                                            <button onClick={()=>deleteStudent(stu.scholarNo)} className="btn btn-danger" >delete</button>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;