import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            empolyees: []
        }
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

export default ListEmployeeComponent;



