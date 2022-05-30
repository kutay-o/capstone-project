package com.kutayondersev.capstoneprojectbackend.data.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class CompanyInfo {
    @Id
    long id;
    String companyName;
    //...


}
