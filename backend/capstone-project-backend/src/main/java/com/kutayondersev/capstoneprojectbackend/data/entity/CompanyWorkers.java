package com.kutayondersev.capstoneprojectbackend.data.entity;

import lombok.*;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

import javax.persistence.*;

@Entity
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "company_workers")
public class CompanyWorkers {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "company_workers_id_seq")
    @SequenceGenerator(name = "company_workers_id_seq", sequenceName = "company_workers_id_seq", allocationSize = 1)
    private Long id;
    private String wallet;
    private Long companyId;
    private Boolean isAdmin;

}
