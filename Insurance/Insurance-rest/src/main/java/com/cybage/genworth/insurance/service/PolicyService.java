package com.cybage.genworth.insurance.service;
import com.cybage.genworth.insurance.model.Policy;
/**
*
* @author Jeevan
*/
public interface PolicyService {
	
	//List<Policy> or Iterable<Policy>
	public Iterable<Policy> getAllPolicy(); //public List<Policy>
	public Policy savePolicy(Policy policy);
	public Policy getPolicyById(Integer Id);
	public void deletePolicy(Integer id);
	
}
