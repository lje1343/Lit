package com.example.lit.controller;

import com.example.lit.domain.vo.project.ProjectFileVO;
import com.example.lit.domain.vo.project.ProjectVO;
import com.example.lit.service.project.LitService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/lit/*")
public class LitController {
    private final LitService litService;

    @GetMapping("/write")
    public String write(){
        return "/project/projectWrite";
    }

    @PostMapping("/addWrite")
    public String addWrite(ProjectVO projectVO) {
        litService.register(projectVO);
        return "/main/main";
    }


}
