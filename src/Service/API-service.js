import  axios  from "axios";
const API_URL="http://localhost:8080";

class APIservice{

    saveStudent(student) {
        return  axios.post(API_URL+"/add",student);
    }

    getAllStudent(){
        return axios.get(API_URL+"/get");
    }

    getStudentById(studentId){
        return axios.get(API_URL+"/getById/"+studentId);
    }

    deleteStudent(scholarNo){
        return axios.delete(API_URL+"/delete/"+scholarNo);
    }

    editStudent(student){
        return axios.put(API_URL+"/update",student);
    }

}

export default new APIservice();