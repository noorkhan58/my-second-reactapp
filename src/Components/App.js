import logo from '../logo.svg';
import '../App.css';
import Home from './Home';
import Welcome from './Welcome'

function App() {

// this.state = {employee:[]};

//   // Fetching data from Fake API
//   const fetchTasks = async () => {
//     await fetch('http://localhost:5000/tasks').then(res=>res.json().then(result=>{
//       this.setState({employee:result});
//     }));
//    console.log(employee);
//   }

//  fetchTasks();

let x = "Anik"

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Home name={x} age={22}/>
      <Welcome />
    </div>
  );
}

export default App;
