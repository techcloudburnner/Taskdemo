package com.example.Taskdemo.Controller;

import com.example.Taskdemo.Dao.EmpDao;
import com.example.Taskdemo.model.Emp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin("*")
public class EmpController {
    @Autowired
    private EmpDao empService;

    @PostMapping("/add")
    public ResponseEntity<Emp> addEmployee(
            @RequestParam("name") String name,
            @RequestParam("email") String email,
            @RequestParam("phone") String phone,
            @RequestParam(value = "image", required = false) MultipartFile image
    ) {
        Emp emp = new Emp();
        emp.setName(name);
        emp.setEmail(email);
        emp.setPhone(phone);

        if (image != null && !image.isEmpty()) {
            try {
                String uploadDir = "Images/";
                File dir = new File(uploadDir);
                if (!dir.exists()) dir.mkdirs();

                String fileName = System.currentTimeMillis() + "_" + image.getOriginalFilename();
                Path filePath = Paths.get(uploadDir + fileName);
                Files.copy(image.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

                emp.setImage("/Images/" + fileName);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

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
