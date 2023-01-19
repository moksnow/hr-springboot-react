import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';


class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);


    }

    componentDidMount(){
        // should using hook function class or wrapper and direct using of useParams() same as useNavigate insted of history
        let { id } = this.props.hookParams;
        console.log(id);


        if(id === "_add"){
            return;
        }else{
            EmployeeService.getEmployeeById(id).then((res) => {
                let employee = res.data;
                this.setState({firstName: employee.firstName, lastName:employee.lastName, emailId:employee.emailId})
            });
        }

    }


    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee => ' + JSON.stringify(employee));

        let { id } = this.props.hookParams;
        console.log(id);


        if(id === "_add"){
                EmployeeService.createEmployee(employee).then(res => {
                    this.props.history('/employees');
                });        
            }else{

                EmployeeService.updateEmployee(employee, id).then(res => {
                    this.props.history('/employees');
                })

        }



    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeEmailIdHandler = (event) => {
        this.setState({ emailId: event.target.value });
    }

    cancel() {
        // this.props.history.push('/employees');
        this.props.history('/employees');
    }

    getTitle(){
        let { id } = this.props.hookParams;
        if(id === "_add"){
                return <h3 className='text-center'> Add Employee</h3>        
            }else{
               return <h3 className='text-center'> Update Employee</h3>

        }
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3'>
                            {this.getTitle()}
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>
                                            First Name
                                        </label>
                                        <input placeholder='First Name' name='firstName' className='form-control'
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>

                                    <div className='form-group'>
                                        <label>
                                            Last Name
                                        </label>
                                        <input placeholder='Last Name' name='lastName' className='form-control'
                                            value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>
                                            Email Id
                                        </label>
                                        <input placeholder='Email Id' name='emailId' className='form-control'
                                            value={this.state.emailId} onChange={this.changeEmailIdHandler} />
                                    </div>

                                    <button className='btn btn-success' onClick={this.saveOrUpdateEmployee}>Save</button>
                                    <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

// export default CreateEmployeeComponent;
export default (props) => (
    <CreateEmployeeComponent history={useNavigate()} hookParams={useParams()}/>
  );