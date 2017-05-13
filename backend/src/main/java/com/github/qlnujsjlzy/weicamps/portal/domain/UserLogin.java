package com.github.qlnujsjlzy.weicamps.portal.domain;

import java.io.Serializable;

/**
 * @Author licy13
 * @Date 2017/5/6
 */

public class UserLogin implements Serializable {

    private Long id;
    private String userName;
    private String token;

    public UserLogin() {
    }

    public UserLogin(Long id, String userName, String token) {
        this.id = id;
        this.userName = userName;
        this.token = token;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    @Override
    public String toString() {
        return "UserLogin{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", token='" + token + '\'' +
                '}';
    }
}
