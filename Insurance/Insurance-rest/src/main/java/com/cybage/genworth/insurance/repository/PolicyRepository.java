package com.cybage.genworth.insurance.repository;

import java.io.Serializable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.cybage.genworth.insurance.model.Policy;
/**
*
* @author Jeevan
*/
@Repository
public interface PolicyRepository extends CrudRepository<Policy, Serializable>{
	
	public Policy findById(Integer Id);

}
