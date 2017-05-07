package com.jdriven.ng2boot.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/")
public class HelloWorldController {

    private static final String template = "Hello spring boot, %s!";

    @RequestMapping(value = "greeting")
    public String sayHello(@RequestParam(value = "name", required = false, defaultValue = "Stranger") String name) {
        return String.format(template, name);
    }

}
