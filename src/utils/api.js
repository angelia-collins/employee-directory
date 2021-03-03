import React from 'react';
import axios from "axios";

export default class PersonList extends React.Component {
    state = {
        employee: [{"email":"placeholder"}, {"email":"hahahah"}]
    }
    //results[0]
    data = [{ "name": "test1" }, { "name": "test2" }];

    componentWillMount() {
        console.log('poopie');
        axios.get(`https://randomuser.me/api/`)
            .then(res => {
                const returnedData = res.data.results;
                console.log("fetched data----");
                console.log(returnedData);

                console.log(this.state);
                
                //this.setState(returnedData);
                this.setState(returnedData);
                console.log("this.state: "); console.log(this.state);
                console.log("end f   data-----");
            })
    }
    //{this.state.employee}                //this.state.employee.results.map

    render() {
        console.log(this.state.employee.results);
        console.log(this.state);
        console.log("render");
        return (
            <div>
                <p>Hi bro  hehehehe</p>
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


                    {this.state.persons.map(person => <li>{person.name}</li>)}
                </ul>
            </div>
        )
    }
};