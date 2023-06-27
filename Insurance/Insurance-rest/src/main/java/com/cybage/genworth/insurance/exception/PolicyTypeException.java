package com.cybage.genworth.insurance.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
/**
 * @author Jeevan
 */
@ResponseStatus(HttpStatus.NOT_FOUND)  //id is incorrect
public class PolicyTypeException extends RuntimeException {
	
	private static final long serialVersionUID = 1L;

	public PolicyTypeException(String message){
		super(message); //calling
	}

}
