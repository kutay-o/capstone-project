package com.kutayondersev.capstoneprojectbackend.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DeleteEmployeeRequest {
    private String adminWallet;
    private String deleteEmployeeWallet;
    private Long companyId;
}
