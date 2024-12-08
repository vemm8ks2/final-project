package com.vemm8ks2.service;

import java.util.List;
import com.vemm8ks2.exception.ProductException;
import com.vemm8ks2.exception.ReviewRequest;
import com.vemm8ks2.model.Review;
import com.vemm8ks2.model.User;

public interface ReviewService {

  public Review createReview(ReviewRequest req, User user) throws ProductException;
  
  public List<Review> getAllReview(Long productId);
}
