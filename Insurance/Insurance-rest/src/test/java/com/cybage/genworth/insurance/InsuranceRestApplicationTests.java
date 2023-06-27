package com.cybage.genworth.insurance;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import com.cybage.genworth.insurance.model.Policy;
import com.cybage.genworth.insurance.repository.PolicyRepository;
import com.cybage.genworth.insurance.service.PolicyService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class InsuranceRestApplicationTests {

	@Autowired
	public PolicyService policyService;

	@MockBean
	public PolicyRepository policyRepository;

	@Test
	public void savePolicyTest() {
		Policy policy = new Policy(501, "1255", "500", "ram", "ram@gmail.com", "5012", "active");
		when(policyRepository.save(policy)).thenReturn(policy);
		assertEquals(policy, policyService.savePolicy(policy));
	}
}
