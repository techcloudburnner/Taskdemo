package com.example.Taskdemo.Dao;

import com.example.Taskdemo.model.Emp;

import java.util.List;

public interface EmpDao {
    Emp addEmp(Emp paramEmp);
 List<Emp> showemp();
}
