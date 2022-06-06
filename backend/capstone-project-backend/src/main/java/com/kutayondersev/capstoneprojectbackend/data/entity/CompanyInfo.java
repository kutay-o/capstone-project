package com.kutayondersev.capstoneprojectbackend.data.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "company_info")
public class CompanyInfo {
    @Id
    private Long id;
    private String companyName;
    private String companyAddress;
}
