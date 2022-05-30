package com.kutayondersev.capstoneprojectbackend.service;

import com.kutayondersev.capstoneprojectbackend.data.entity.CompanyInfo;
import com.kutayondersev.capstoneprojectbackend.data.repository.CompanyRepository;
import com.kutayondersev.capstoneprojectbackend.data.repository.CompanyWorkersRepository;
import org.springframework.stereotype.Service;

@Service
public class CompanyService {
    private final CompanyRepository companyRepository;
    private final CompanyWorkersRepository companyWorkersRepository;

    public CompanyService(CompanyRepository companyRepository, CompanyWorkersRepository companyWorkersRepository) {
        this.companyRepository = companyRepository;
        this.companyWorkersRepository = companyWorkersRepository;
    }

    public CompanyInfo getCompanyInfo(String wallet) {
        var companyWorker = companyWorkersRepository.findCompanyWorkersByWallet(wallet);
        if(companyWorker == null)
            return null;

        var companyInfo = companyRepository.findById(companyWorker.getCompanyId());
        return companyInfo.orElse(null);
    }
}
