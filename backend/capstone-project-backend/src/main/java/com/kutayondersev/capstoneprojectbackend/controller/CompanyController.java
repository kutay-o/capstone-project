package com.kutayondersev.capstoneprojectbackend.controller;

import com.kutayondersev.capstoneprojectbackend.data.entity.CompanyInfo;
import com.kutayondersev.capstoneprojectbackend.request.AddWorkerToCompanyRequest;
import com.kutayondersev.capstoneprojectbackend.request.CompanyInfoRequest;
import com.kutayondersev.capstoneprojectbackend.request.CreateCompanyInfoRequest;
import com.kutayondersev.capstoneprojectbackend.request.DeleteEmployeeRequest;
import com.kutayondersev.capstoneprojectbackend.service.CompanyService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/company")
@CrossOrigin
public class CompanyController {
    private final CompanyService companyService;

    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @GetMapping("/getInfo")
    public ResponseEntity<CompanyInfo> getCompanyInfo(@RequestParam String wallet) {
        if(wallet == null || wallet.isEmpty())
            return ResponseEntity.badRequest().build();
        var companyInfo = companyService.getCompanyInfo(wallet);
        if(companyInfo == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(companyInfo);
    }

    @PostMapping("/create")
    public ResponseEntity<CompanyInfo> createCompanyInfoForFirstRegistration(
            @RequestBody CreateCompanyInfoRequest createCompanyInfoRequest
    ) {
        if(createCompanyInfoRequest == null || createCompanyInfoRequest.getCompanyName().isEmpty())
            return ResponseEntity.badRequest().build();

        var companyInfo = companyService.createCompanyInfo(createCompanyInfoRequest);
        return ResponseEntity.ok(companyInfo);
    }

    @PostMapping("/add/employee")
    public ResponseEntity<Void> addEmployeeToCompany(
            @RequestBody AddWorkerToCompanyRequest addWorkerToCompanyRequest
    ) {
        if(addWorkerToCompanyRequest == null || addWorkerToCompanyRequest.getAdminWallet().isEmpty())
            return ResponseEntity.badRequest().build();

        companyService.addEmployeeToCompany(addWorkerToCompanyRequest);
        return ResponseEntity.ok(null);
    }

    @DeleteMapping("delete/employee")
    public ResponseEntity<Void> deleteEmployeeFromCompany(
            @RequestBody DeleteEmployeeRequest deleteEmployeeRequest
    ) {
        if(deleteEmployeeRequest == null || deleteEmployeeRequest.getAdminWallet().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }
        companyService.deleteEmployeeFromCompany(deleteEmployeeRequest);
        return ResponseEntity.ok(null);
    }
}
