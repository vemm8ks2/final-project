package com.vemm8ks2.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import com.vemm8ks2.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {

  public List<Review> findByProductId(Long productId);
}
