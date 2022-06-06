package com.kutayondersev.capstoneprojectbackend.service;

import com.kutayondersev.capstoneprojectbackend.data.entity.CompanyInfo;
import com.kutayondersev.capstoneprojectbackend.data.entity.CompanyWorkers;
import com.kutayondersev.capstoneprojectbackend.data.repository.CompanyRepository;
import com.kutayondersev.capstoneprojectbackend.data.repository.CompanyWorkersRepository;
import com.kutayondersev.capstoneprojectbackend.request.AddWorkerToCompanyRequest;
import com.kutayondersev.capstoneprojectbackend.request.CreateCompanyInfoRequest;
import com.kutayondersev.capstoneprojectbackend.request.DeleteEmployeeRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

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

    public CompanyInfo createCompanyInfo(CreateCompanyInfoRequest createCompanyInfoRequest) {
        var companyWorker = companyWorkersRepository.findCompanyWorkersByWallet(createCompanyInfoRequest.getWallet());
        if(companyWorker != null) {
            throw new HttpClientErrorException(HttpStatus.UNAUTHORIZED, "Already registered in another company");
        }
        var companyInfo = CompanyInfo.builder()
                .companyName(createCompanyInfoRequest.getCompanyName())
                .id(createCompanyInfoRequest.getCompanyId())
                .companyAddress(createCompanyInfoRequest.getCompanyAddress())
                .build();
        var createdCompany = companyRepository.save(companyInfo);
        companyWorker = CompanyWorkers.builder()
                .companyId(createdCompany.getId())
                .wallet(createCompanyInfoRequest.getWallet())
                .isAdmin(createCompanyInfoRequest.getIsAdmin())
                .build();
        companyWorkersRepository.save(companyWorker);
        return createdCompany;
    }

    public void addEmployeeToCompany(AddWorkerToCompanyRequest addWorkerToCompanyRequest) {
        var adminWorker = companyWorkersRepository.findCompanyWorkersByWallet(addWorkerToCompanyRequest.getAdminWallet());
        if(adminWorker == null || !adminWorker.getCompanyId().equals(addWorkerToCompanyRequest.getCompanyId())) {
            throw new HttpClientErrorException(HttpStatus.UNAUTHORIZED, "Not allowed on this company");
        }
        var companyWorker = CompanyWorkers.builder()
                .companyId(addWorkerToCompanyRequest.getCompanyId())
                .wallet(addWorkerToCompanyRequest.getNewWorkerWallet())
                .isAdmin(false)
                .build();
        companyWorkersRepository.save(companyWorker);
    }

    public void deleteEmployeeFromCompany(DeleteEmployeeRequest deleteEmployeeRequest) {
        var adminWorker = companyWorkersRepository.findCompanyWorkersByWallet(deleteEmployeeRequest.getAdminWallet());
        if(adminWorker == null || !adminWorker.getCompanyId().equals(deleteEmployeeRequest.getCompanyId())) {
            throw new HttpClientErrorException(HttpStatus.UNAUTHORIZED, "Not allowed on this company");
        }
        var companyWorker = companyWorkersRepository.findCompanyWorkersByWallet(deleteEmployeeRequest.getDeleteEmployeeWallet());
        if(companyWorker == null || !companyWorker.getCompanyId().equals(deleteEmployeeRequest.getCompanyId())) {
            throw new HttpClientErrorException(HttpStatus.NOT_FOUND, "Employee not found in this company");
        }
        companyWorkersRepository.delete(companyWorker);
    }
}
