package com.cybage.genworth.insurance.factory;

import com.cybage.genworth.insurance.exception.PolicyTypeException;
import com.cybage.genworth.insurance.service.InsuranceTypeService;
/**
 * @author Jeevan
 */
public class FactoryLifeGeneralnsurance {

	public static InsuranceTypeService getUserType(String type) {
		// Here type is life or general as per requirements
		if (type == null) {
			return null;
		} else if (type.equalsIgnoreCase("life")) { //upper case or lower case life.equalsIgnoreCase("life)"
			return new LifeInsurance(); //return LifeInsurance object only
			//upper case or lower LIFE, life
		} else if (type.equalsIgnoreCase("general")) {
			return new GeneralInsurance(); //return generalinsurance object only
		}
		throw new PolicyTypeException("Invalid input"); //this is the custom exception
	}

}
