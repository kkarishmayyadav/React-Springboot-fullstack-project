import React from "react";

const DeleteDetail = () =>{
    return(
        <div className="row align-item-center" >
            <div className="mx-auto col-10 col-md-6 col-lg-4 ">
                <div className="card">
                    <div className="card-header fs-3 text-center">Delete Student Details</div>
                    <div className="card-body">
                        <form >
                            <div className="mb-3 ">
                                <input type="text" className="form-control form-control-sm" placeholder="Scholar Number" />
                            </div>
                            <button type="submit" className="btn btn-primary">Delete</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteDetail;