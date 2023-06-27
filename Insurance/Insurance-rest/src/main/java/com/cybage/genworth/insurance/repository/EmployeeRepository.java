package com.cybage.genworth.insurance.repository;

import java.io.Serializable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cybage.genworth.insurance.model.Employee;
/**
*
* @author Jeevan
*/
@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Serializable>{
	
}
