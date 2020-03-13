import React, { Component } from "react";
import axios from 'axios';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: []
        
        };
    }

    componentDidMount() {
       axios.get('http://localhost:8000/fetch')

            .then((response) => {
                this.setState({
                    products:response.data
                })
            },(errres)=>{
                console.log(errres)
            });
           

           

    }

    render() {
        return (
            <div>
                <table border="10" cellPadding="10" cellSpacing="10" align="center" >
                    <thead>
                        <tr style={{color:"red"}}>
                            <th>S.no</th>
                            <th>Pid</th>
                            <th>Pname</th>
                            <th>Pcost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map((element, index) => (
                            <tr>
                                <td>{index+1}</td>
                                <td>{element.pid}</td>
                                <td>{element.pname}</td>
                                <td>{element.pcost}</td>
                            </tr>
                          ))}
                    </tbody>
                </table>
            </div>
        )
    }
}


