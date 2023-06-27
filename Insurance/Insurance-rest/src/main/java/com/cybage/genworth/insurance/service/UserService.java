package com.cybage.genworth.insurance.service;

import java.util.List;

import com.cybage.genworth.insurance.model.User;
/**
*
* @author Jeevan
*/
public interface UserService {
	
	public User loginUser(String username, String password)throws Exception;

	public User saveUser(User user);
	
	public List<User> getListByCity(String city);
	
}
                                                     




