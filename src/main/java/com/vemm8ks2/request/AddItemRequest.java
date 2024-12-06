package com.vemm8ks2.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class AddItemRequest {

  private Long productId;
  
  private String size;
  
  private int quantity;
  
  private Integer price;
}
