package com.kutayondersev.capstoneprojectbackend.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddWorkerToCompanyRequest {
    private String adminWallet;
    private String newWorkerWallet;
    private Long companyId;
}
