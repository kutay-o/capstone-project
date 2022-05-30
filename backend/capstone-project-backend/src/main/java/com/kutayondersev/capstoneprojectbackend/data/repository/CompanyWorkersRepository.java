package com.kutayondersev.capstoneprojectbackend.data.repository;

import com.kutayondersev.capstoneprojectbackend.data.entity.CompanyWorkers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyWorkersRepository extends JpaRepository<CompanyWorkers, long> {
    CompanyWorkers findCompanyWorkersByWallet(String wallet);
}
