package com.vemm8ks2.service;

import java.time.LocalDateTime;
import java.util.List;
import org.springframework.stereotype.Service;
import com.vemm8ks2.exception.ProductException;
import com.vemm8ks2.model.Product;
import com.vemm8ks2.model.Rating;
import com.vemm8ks2.model.User;
import com.vemm8ks2.repository.RatingRepository;
import com.vemm8ks2.request.RatingRequest;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RatingServiceImpl implements RatingService {

  private final RatingRepository ratingRepository;
  private final ProductService productService;

  @Override
  public Rating createRating(RatingRequest req, User user) throws ProductException {

    Product product = productService.findProductById(req.getProductId());

    Rating rating = new Rating();

    rating.setProduct(product);
    rating.setUser(user);
    rating.setRating(req.getRating());
    rating.setCreatedAt(LocalDateTime.now());

    return ratingRepository.save(rating);
  }

  @Override
  public List<Rating> getProdutsRating(Long productId) {
    return ratingRepository.findByProductId(productId);
  }

}
