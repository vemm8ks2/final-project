package com.vemm8ks2.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.vemm8ks2.model.Rating;

public interface RatingRepository extends JpaRepository<Rating, Long> {

  public List<Rating> findByProductId(Long productId);
}
