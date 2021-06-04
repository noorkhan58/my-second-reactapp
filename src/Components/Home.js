import React, {useState, useEffect} from 'react';
import Work from './Work';
import '../App.css';

const Home = (props) => {

    const [tasks, setTasks] = useState([]);


    useEffect(() => {
        const getTasks = async () => {
            const getTasksFromServer = await fetchTasks();
            setTasks(getTasksFromServer);
        }
        getTasks();
    }, []);

    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks');
        const data = await res.json();
        return data;
    }

    return (
        <div id="homebox">
            <h1>This is a home component {props.name} {props.age}</h1>
            <Work />
            
            {/* tasks.map((task, index) => {
              <Work text={tasks.text} /> 
            }) */}
        </div>
    )
}

export default Home
