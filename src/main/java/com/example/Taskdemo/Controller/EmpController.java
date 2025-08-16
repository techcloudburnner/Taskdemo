package com.example.Taskdemo.Controller;

import com.example.Taskdemo.Dao.EmpDao;
import com.example.Taskdemo.model.Emp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin("*")
public class EmpController {
    @Autowired
    private EmpDao empService;

    @PostMapping("/add")
    public ResponseEntity<Emp> addEmployee(
            @RequestPart(value= "name") String name,
            @RequestPart(value = "email") String email,
            @RequestPart(value = "phone") String phone,
            @RequestPart(value = "image") String image
    ) {
        Emp emp = new Emp();
        emp.setName(name);
        emp.setEmail(email);
        emp.setPhone((phone));
        emp.setImage(image);
        Emp savedEmp = empService.addEmp(emp);
        return ResponseEntity.status(201).body(savedEmp);
    }
    @GetMapping("/all")
    public ResponseEntity<List<Emp>> showEmp() {
        List<Emp> list = empService.showemp();
        list.forEach(e -> System.out.println("Employee Active: " + e.getName())); // debug log
        return ResponseEntity.ok(list);
    }
}
