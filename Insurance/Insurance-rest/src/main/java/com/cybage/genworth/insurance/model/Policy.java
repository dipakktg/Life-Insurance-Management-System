package com.cybage.genworth.insurance.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
//this is nothing but our pojo class
/**
*
* @author Jeevan
*/
@Entity
@Table(name="policy")
public class Policy{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="policynumber")
	private String policyNumber;
	
	@Column(name="premiumamount")
	private String premiumAmount;
	
	@Column(name="name")
	private String name;
	
	@Column(name="email")
	private String email;
	
	@Column(name="claimnumber")
	private String claimNumber;

	@Column(name="status")
	private String status;
		
	public Policy() {
		
	}

	public Policy(Integer id, String policyNumber, String premiumAmount, String name, String email, String claimNumber,
			String status) {
		super();
		System.out.println("policyNumber in constructor>>>>>"+policyNumber);
		this.id = id;
		this.policyNumber = policyNumber;
		this.premiumAmount = premiumAmount;
		this.name = name;
		this.email = email;
		this.claimNumber = claimNumber;
		this.status = status;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getPolicyNumber() {
		return policyNumber;
	}

	public void setPolicyNumber(String policyNumber) {
		System.out.println("policyNumber>>> in setter method"+policyNumber);
		this.policyNumber = policyNumber;
	}

	public String getPremiumAmount() {
		return premiumAmount;
	}

	public void setPremiumAmount(String premiumAmount) {
		this.premiumAmount = premiumAmount;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getClaimNumber() {
		return claimNumber;
	}

	public void setClaimNumber(String claimNumber) {
		this.claimNumber = claimNumber;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Policy [id=" + id + ", policyNumber=" + policyNumber + ", premiumAmount=" + premiumAmount + ", name="
				+ name + ", email=" + email + ", claimNumber=" + claimNumber + ", status=" + status + "]";
	}

}