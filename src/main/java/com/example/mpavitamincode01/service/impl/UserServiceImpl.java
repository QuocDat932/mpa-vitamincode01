package com.example.mpavitamincode01.service.impl;

import com.example.mpavitamincode01.entity.User;
import com.example.mpavitamincode01.service.UserService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class UserServiceImpl implements UserService{
    public List<User> result = new ArrayList();

    public List<User> getAllUser() {
        result.add(new User("Bùi Quốc Đạt", 23, "Đồng Nai"));
        result.add(new User("Jerr - Tuấn", 24, "Đồng Nai"));
        return result;
    };

    public void insertNewUser(User newUser){
        try {
            result.add(newUser);
        } catch (Exception e){
            e.printStackTrace();
        }
    };
}