package forum.service;

import forum.documents.User;

import java.util.List;

public interface UserService {

    User save(User user);

    List<User> findAll();

    User getUserByBrojIndexa(String name);

    Long deleteByBrojIndexa(String brojIndexa);
}
