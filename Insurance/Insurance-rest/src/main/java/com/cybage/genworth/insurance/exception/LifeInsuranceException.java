package com.cybage.genworth.insurance.exception;
/**
*
* @author Jeevan
*/  
public class LifeInsuranceException extends RuntimeException{

	
	private String errorMessage;

	public LifeInsuranceException(String errorMessage) {
		super(); //calling constructor Parent RunTime
		//this.errorMessage = errorMessage;
	}
	
	public String getErrorMessage() {
		return errorMessage;
	}
	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}
	
}
