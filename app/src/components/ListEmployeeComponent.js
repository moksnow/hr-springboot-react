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

    }


    editEmployee(id) {
        console.log(id);
            
        this.props.history(`/update-employee/${id}`);
 
     }


    addEmployee() {
            
        this.props.history('/add-employee');
 
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



