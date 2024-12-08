package com.vemm8ks2.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReviewRequest {

  private Long productId;
  private String review;
  
}
