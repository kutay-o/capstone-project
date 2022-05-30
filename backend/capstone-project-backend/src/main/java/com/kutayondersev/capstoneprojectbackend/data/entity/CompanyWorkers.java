package com.kutayondersev.capstoneprojectbackend.data.entity;

import lombok.Data;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
public class CompanyWorkers {
    @Id
    long id;
    String wallet;
    long companyId;
}
