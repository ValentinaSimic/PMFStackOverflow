package forum.security;

import forum.repository.UserRepository;
import forum.documents.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsServiceImpl  implements UserDetailsService {

    @Autowired
    UserRepository userRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user= userRepository.findByBrojIndexaIgnoreCase(username);
       //User user=userRepository.findByUsername(username);
        if(user==null){
            throw  new UsernameNotFoundException(String.format("Ne postoji student sa brojem indexa '%s' ", username));
        }else{
            return JwtUserFactory.create(user);
        }
    }
}
