package com.github.qlnujsjlzy.weicamps.portal.controller;

import com.github.qlnujsjlzy.weicamps.portal.domain.UserLogin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/user/")
public class UserController {

    @RequestMapping(value = "login")
    public UserLogin userLogin() {
        UserLogin userLogin= new UserLogin(1L, "李朝阳", "fake-jwt-token");
        System.out.println(userLogin.toString());
        return userLogin;
    }

}
