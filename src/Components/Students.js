import React, {useState,useEffect} from 'react'

const Students = () => {

    const [StudentList, setStudentList] = useState([])

    const fetchStudents = async () => {
        const results = await fetch('http://localhost:5000/users')
        const data    = await results.json();
        return data;
    }

    useEffect(()=> {

        const addStudentList = async() => {

            const studentData = fetchStudents();
            setStudentList(studentData);
        }
        addStudentList()

    },[])

    console.log(StudentList)

    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default Students
