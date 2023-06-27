package com.cybage.genworth.insurance.factory;

import com.cybage.genworth.insurance.service.InsuranceTypeService;
/**
 * @author Jeevan
 */
public class LifeInsurance implements InsuranceTypeService{

	@Override
	public String getInsuranceType() {
		return "Life Insurance";
	}

	

	
}
