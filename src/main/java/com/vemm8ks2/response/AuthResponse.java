package com.vemm8ks2.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class AuthResponse {

  private String jwt;
  private String message;
  
}
