package com.moksnow.hr.controller;

import com.moksnow.hr.model.Employee;
import com.moksnow.hr.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("employees")
    public List<Employee> getAllEmployees(){
        return employeeService.findAll();
    }

    @PostMapping("employees/save")
    public Employee createEmployee(@RequestBody Employee e){
        return employeeService.save(e);
    }
}
