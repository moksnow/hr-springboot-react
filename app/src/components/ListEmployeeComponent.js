import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from "react-router-dom";

class ListEmployeeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            empolyees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);

    }


    viewEmployee(id) {
        console.log(id);
            
        this.props.history(`/view-employee/${id}`);
 
     }


    editEmployee(id) {
        console.log(id);
            
        this.props.history(`/add-employee/${id}`);
 
     }

     deleteEmployee(id) {
        console.log(id);
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({empolyees : this.state.empolyees.filter(empolyee => empolyee.id !== id)});
        })
            
     }


    addEmployee() {
            
        this.props.history('/add-employee/_add');
 
     }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({empolyees : res.data});
        });
    }

    
    render() {
        
        return (
            <div>
                <h2 className='text-center'>Employee List</h2>
                <div className='row'>
                    <button className='btn btn-primary' style={{width:"20%"}} onClick={this.addEmployee}> Add Employee</button>
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>

                        <thead>

                            <tr>

                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.empolyees.map(
                                    empolyee => 
                                    <tr key = {empolyee.id}>
                                        <td>{empolyee.firstName}</td>
                                        <td>{empolyee.lastName}</td>
                                        <td>{empolyee.emailId}</td>
                                        <td>{empolyee.lastName}</td>
                                        <td>
                                            <button onClick={ () => this.editEmployee(empolyee.id)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft:"10px"}} onClick={ () => this.deleteEmployee(empolyee.id)} className="btn btn-danger">Delete</button>
                                            <button style={{marginLeft:"10px"}} onClick={ () => this.viewEmployee(empolyee.id)} className="btn btn-info">View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>


            </div>
        );
    }
}

export default (props) => (
    <ListEmployeeComponent history={useNavigate()} />
  );



