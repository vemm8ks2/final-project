package com.vemm8ks2.service;

import com.vemm8ks2.exception.UserException;
import com.vemm8ks2.model.User;

public interface UesrService {

  public User findUserById(Long userId) throws UserException;

  public User findUserProfileByJwt(String jwt) throws UserException;
}
