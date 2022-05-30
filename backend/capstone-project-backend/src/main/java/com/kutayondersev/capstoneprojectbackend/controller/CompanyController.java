package com.kutayondersev.capstoneprojectbackend.controller;

import com.kutayondersev.capstoneprojectbackend.data.entity.CompanyInfo;
import com.kutayondersev.capstoneprojectbackend.request.CompanyInfoRequest;
import com.kutayondersev.capstoneprojectbackend.service.CompanyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/company")
public class CompanyController {
    private final CompanyService companyService;

    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @GetMapping("/getInfo")
    public ResponseEntity<CompanyInfo> getCompanyInfo(@RequestBody CompanyInfoRequest companyInfoRequest) {
        if(companyInfoRequest == null || companyInfoRequest.getWallet().isEmpty())
            return ResponseEntity.badRequest().build();
        var companyInfo = companyService.getCompanyInfo(companyInfoRequest.getWallet());
        if(companyInfo == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(companyInfo);
    }
    
    public ResponseEntity<CompanyInfo> createCompany
}
