package com.example.Taskdemo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "emp")
public class Emp {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "emp_id")
    private Long empId;
    @Column(name = "name")
   private  String name;

   @Column(name="email" )

   private  String email;

   @Column(name="phone")
   private String phone;

    @Lob
    @Column(name = "image", columnDefinition = "LONGTEXT")
    private String image;

    public Emp(Long empId, String name, String email, String phone, String image) {
        this.empId = empId;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.image = image;
    }

    public Emp() {

    }

    @Override
    public String toString() {
        return "emp{" +
                "empId=" + empId +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", phone=" + phone +
                ", pic='" + image + '\'' +
                '}';
    }

    public Long getEmpId() {
        return empId;
    }

    public void setEmpId(Long empId) {
        this.empId = empId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getImage () {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }


}
