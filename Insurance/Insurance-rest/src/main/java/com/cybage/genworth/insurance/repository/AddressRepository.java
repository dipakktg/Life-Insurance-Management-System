package com.cybage.genworth.insurance.repository;

import java.io.Serializable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cybage.genworth.insurance.model.Address;
/**
*
* @author Jeevan
*/
@Repository
public interface AddressRepository extends CrudRepository<Address, Serializable>{
	
}
