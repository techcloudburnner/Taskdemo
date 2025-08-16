package com.example.Taskdemo.service;

import com.example.Taskdemo.Dao.EmpDao;
import com.example.Taskdemo.Repository.EmpRepository;
import com.example.Taskdemo.model.Emp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmpServiceImpl implements EmpDao {
    @Autowired
    private EmpRepository empRepository;

    public Emp addEmp(Emp paramEmp) {
        System.out.println("Saving Emp: " + paramEmp);
        if (paramEmp.getEmpId() != null && paramEmp.getEmpId() != 0) {
            throw new IllegalArgumentException("empId must be null or 0 for new employees");
        }
        return empRepository.save(paramEmp);
    }

    @Override
    public List<Emp> showemp() {
    return  empRepository.findAll();
    }
}
