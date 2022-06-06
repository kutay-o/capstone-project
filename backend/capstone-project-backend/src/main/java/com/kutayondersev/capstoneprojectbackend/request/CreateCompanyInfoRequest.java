package com.kutayondersev.capstoneprojectbackend.request;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class CreateCompanyInfoRequest {
    private String companyName;
    private String companyAddress;
    private Long companyId;
    private Boolean isAdmin;
    private String wallet; //producer -id anlamında
}
