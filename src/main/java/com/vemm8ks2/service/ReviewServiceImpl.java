package com.vemm8ks2.service;

import java.time.LocalDateTime;
import java.util.List;
import org.springframework.stereotype.Service;
import com.vemm8ks2.exception.ProductException;
import com.vemm8ks2.exception.ReviewRequest;
import com.vemm8ks2.model.Product;
import com.vemm8ks2.model.Review;
import com.vemm8ks2.model.User;
import com.vemm8ks2.repository.ProductRepository;
import com.vemm8ks2.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {

  private final ReviewRepository reviewRepository;
  private final ProductRepository productRepository;
  private final ProductService productService;

  @Override
  public Review createReview(ReviewRequest req, User user) throws ProductException {

    Product product = productService.findProductById(req.getProductId());

    Review review = new Review();

    review.setUser(user);
    review.setProduct(product);
    review.setReview(req.getReview());
    review.setCreatedAt(LocalDateTime.now());

    return reviewRepository.save(review);
  }

  @Override
  public List<Review> getAllReview(Long productId) {
    return reviewRepository.findByProductId(productId);
  }

}
