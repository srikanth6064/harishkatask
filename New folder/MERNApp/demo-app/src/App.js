//import React
//React is the predefined class
//React class creates the React Environment in Component

//import Component
//Component is the predefined "static inner class" React Class
//Component class used to create the React Component
import React,{ Component } from "react";

//import axios
//axios used to make the rest api calls
import axios from "axios";

//create the component
export default class App extends React.Component{
    constructor(){
        super();
        this.state = {
            products:[]
        };
    };
    
    componentDidMount(){
        axios.get("http://localhost:8000/fetch").then((posRes)=>{
            this.setState({
              products : posRes
            })
        },(errRes)=>{
          console.log(errRes);
        });
    };
    render(){
      return(<div>
          <table border="1"
                 cellPadding="10px"
                 cellSpacing="10px"
                 align="center">
                <thead style={{backgroundColor:"grey"}}>
                    <tr>
                      <th>SNO</th>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.products.map((element,index)=>(
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
    };
};