package com.moksnow.hr.service;

import com.moksnow.hr.exception.ResourceNotFoundException;
import com.moksnow.hr.model.Employee;
import com.moksnow.hr.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> findAll() {
        return employeeRepository.findAll();
    }

    public Employee save(Employee e) {
        return employeeRepository.save(e);
    }

    public Employee findById(Long id) {
      return   employeeRepository.findById(id)
              .orElseThrow(() -> new ResourceNotFoundException("Employee does not exist: " + id));
    }

    public void delete(Employee employee) {
         employeeRepository.delete(employee);
    }
}
