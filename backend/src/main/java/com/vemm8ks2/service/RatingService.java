package com.vemm8ks2.service;

import java.util.List;
import com.vemm8ks2.exception.ProductException;
import com.vemm8ks2.model.Rating;
import com.vemm8ks2.model.User;
import com.vemm8ks2.request.RatingRequest;

public interface RatingService {

  public Rating createRating(RatingRequest req, User user) throws ProductException;
  
  public List<Rating> getProdutsRating(Long productId);
}
