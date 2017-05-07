package com.jdriven.ng2boot.controller;

import com.jdriven.ng2boot.domain.UserLogin;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/user/")
public class UserController {

    @RequestMapping(value = "login")
    public UserLogin userLogin() {
        UserLogin userLogin= new UserLogin(1L, "admin", "fake-jwt-token");
        System.out.println(userLogin.toString());
        return userLogin;
    }

}
