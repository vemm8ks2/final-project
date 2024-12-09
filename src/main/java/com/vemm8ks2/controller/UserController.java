package com.vemm8ks2.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.vemm8ks2.exception.UserException;
import com.vemm8ks2.model.User;
import com.vemm8ks2.service.UserService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

  private final UserService userService;

  @GetMapping("/profile")
  public ResponseEntity<User> getUserProfileHandler(@RequestHeader("Authorization") String jwt)
      throws UserException {

    User user = userService.findUserProfileByJwt(jwt);

    return new ResponseEntity<>(user, HttpStatus.ACCEPTED);
  }
}
