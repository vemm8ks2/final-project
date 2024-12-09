package com.vemm8ks2.service;

import java.util.Optional;
import org.springframework.stereotype.Service;
import com.vemm8ks2.config.JwtProvider;
import com.vemm8ks2.exception.UserException;
import com.vemm8ks2.model.User;
import com.vemm8ks2.repository.UserRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

  private final UserRepository userRepository;
  private final JwtProvider jwtProvider;

  @Override
  public User findUserById(Long userId) throws UserException {

    Optional<User> user = userRepository.findById(userId);

    if (user.isPresent()) {
      return user.get();
    }

    throw new UserException("User not found with id :" + userId);
  }

  @Override
  public User findUserProfileByJwt(String jwt) throws UserException {

    String email = jwtProvider.getEmailFromToken(jwt);
    
    User user = userRepository.findByEmail(email);
    
    if (user == null) {
      throw new UserException("User not found with email : " + email);
    }
    
    return user;
  }

}
