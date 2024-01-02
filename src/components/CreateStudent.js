import {useState} from "react";
import StudentForm from "./StudentForm";
import Axios from "axios";

function CreateStudent()
{
    // eslint-disable-next-line no-undef
    const [arr,setArr] = useState([]); 

    //Declaring a argumented function
    const getState = (childData) => {
        setArr(childData);
    }

    const handleSubmit = () => {
        const data = {name: arr[0], email:arr[1],rollNo:arr[2]};
        Axios.post("http://localhost:4000/studentRoute/create-student" , data)
        .then((res) => {
            if(res.status === 200)
            alert("Record added successfully");
        })
        .catch((err)=>alert(err));
    }

    return  (
        <form onSubmit={handleSubmit}>
            <StudentForm getState = {getState}/>
        </form>
    )
}

export default CreateStudent;