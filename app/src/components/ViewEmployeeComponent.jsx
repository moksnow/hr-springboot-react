import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {

    constructor(props) {
        super(props)
   
        this.state = {
                employee: {}
        }


    }

    componentDidMount(){
        let { id } = this.props.hookParams;
        console.log(id);


        EmployeeService.getEmployeeById(id).then( res=> {
            console.log(res.data);

            this.setState({employee: res.data});
        });
        console.log(this.state.employee);
    }

    render() {
        return (
            <div>
                <br></br>
                <div className='card col-md-6 offset-md-3'>
                    <h3 className='text-center'>
                        View Employee Details
                    </h3>
                    <div className='card-body'>
                        <div className='row'>
                            <label> Employee First Name: </label>
                            <div> { this.state.employee.firstName } </div>
                        </div>
                        <div className='row'>
                            <label> Employee Last Name: </label>
                            <div> { this.state.employee.lastName } </div>
                        </div>
                        <div className='row'>
                            <label> Employee Email Id: </label>
                            <div> { this.state.employee.emailId } </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// export default ViewEmployeeComponent;

export default (props) => (
    <ViewEmployeeComponent history={useNavigate()} hookParams={useParams()}/>
  );