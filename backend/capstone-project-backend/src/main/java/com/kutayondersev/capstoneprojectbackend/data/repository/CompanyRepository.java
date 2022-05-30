package com.kutayondersev.capstoneprojectbackend.data.repository;

import com.kutayondersev.capstoneprojectbackend.data.entity.CompanyInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository extends JpaRepository<CompanyInfo, long> {
}
