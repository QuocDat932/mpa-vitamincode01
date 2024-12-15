package com.example.mpavitamincode01.api;

import com.example.mpavitamincode01.entity.User;
import com.example.mpavitamincode01.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("api-user/")
public class UserApi {
    @Autowired
    private UserService userService;

    @GetMapping("get-all-user")
    public ResponseEntity doGetAllUser(){
        HashMap<String, Object> result = new HashMap<>();
        result.put("status", true);
        result.put("message", "Call Api Success");
        result.put("data", userService.getAllUser());
        return ResponseEntity.ok(result);
    };

    @PostMapping("insert-user")
    public ResponseEntity doPostUser(@RequestBody User newUser){
        userService.insertNewUser(newUser);
        HashMap<String, Object> result = new HashMap<>();
        result.put("status", true);
        result.put("message", "Call Api Success");
        return ResponseEntity.ok(result);
    };
}
