package forum.service;

import forum.repository.UserRepository;
import forum.documents.User;
import forum.util.PasswordUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;


    @Override
    public User save(User user) {
        String password= PasswordUtil.getPasswordHash(user.getPassword());
        user.setPassword(password);

        return userRepository.save(user);
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User getUserByBrojIndexa(String name) {
        return userRepository.findByBrojIndexa(name);
    }

    @Override
    public Long deleteByBrojIndexa(String brojIndexa) {
        return userRepository.deleteByBrojIndexa(brojIndexa);
    }


}
