package com.vemm8ks2.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RatingRequest {

  private Long productId;
  private double rating;

}
