import logo from '../logo.svg';
import '../App.css';
import Home from './Home';
import Welcome from './Welcome'
import UserGreeting from './UserGreeting'
import PersonList from './PersonList';
import User from './User'
import Person from './Person'
import React, {useState, useEffect} from 'react'
import Students from './Students';


function App() {

const[employee, setEmployee] = useState([]);

  // Fetching data from Fake API
  const fetchUsers = async () => {
    const res = await fetch('http://localhost:5000/users');
    const data = await res.json();
    return data;
  }

  useEffect(()=> {
    const getUsers = async() => {
      const usrs = await fetchUsers()
      setEmployee(usrs)
    }
    getUsers()
  },[])

  // console.log(employee)

  employee.map(person => console.log(person.address.street))
 
  const personList = employee.map(person => <Person key={person.id} UsersList={person}/>)

  return (
    
    <div className="App">
      {/* <h1>Hello World</h1>
      <Home name={x} age={22}/>
      <Welcome /> */}
      {/* <UserGreeting /> */}
      {/* <PersonList /> */}
      {personList}
      {/* <Students /> */}

    </div>
  );
}

export default App;
