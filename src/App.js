// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import axios from "axios";
import UserTable from "./components/UserTable";


//import PersonList from './utils/api.js';

class App extends Component {
  state = {
    employee: [],
    users:[]
}
//results[0]
data = [];

componentDidMount() {
    console.log('poopie');
    axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            const returnedData = res.data.results;
            console.log("fetched data----");
            console.log(returnedData);

            console.log(this.state);
            
            //this.setState(returnedData);
            this.setState(returnedData);
            console.log("this.state: "); console.log(this.state);
            console.log("end f   data-----");
            this.setState({users: returnedData})
        })
}
//{this.state.employee}                //this.state.employee.results.map

render() {
    console.log(this.state.employee.results);
    console.log(this.state);
    console.log("render");
    return (
        <div>
            <div>
                {this.data.map(function (d, idx) {
                    return (<li key={idx}>{d.name}</li>)
                })}
            </div>
            <div>
                {this.state.employee.map(function (d, idx) {
                    return (<li key={idx}>{d.email}</li>)
                })}
            </div>
            <ul>
            </ul>
                <UserTable users={this.state.users}/>
        </div>
    )
}
};

export default App;
