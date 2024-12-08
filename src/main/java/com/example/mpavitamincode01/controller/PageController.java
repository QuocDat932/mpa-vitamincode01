package com.example.mpavitamincode01.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/page")
public class PageController {
    @GetMapping("/index")
    public String doGetIndex(Model model){
        model.addAttribute("activeMenu", "model-index");
        return "page/pages/form";
    };

    @GetMapping("/dashboard")
    public String doGetDashboard(){
        return "page/pages/dashboard";
    };

    @GetMapping("/table")
    public String doGetTableView(Model model){
        model.addAttribute("activeMenu", "model-table");
        return "page/pages/tables";
    };

    @GetMapping("/billing")
    public String doGetBillingView(Model model){
        model.addAttribute("activeMenu", "model-billing");
        return "page/pages/billing";
    };

    @GetMapping("virtual-reality")
    public String doGetVisualRealityView(){
        return "page/pages/virtual-reality";
    };
}