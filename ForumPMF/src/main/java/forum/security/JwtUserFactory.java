package forum.security;

import forum.documents.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class JwtUserFactory {

    public static JwtUser create(User user) {

        return new JwtUser(user.getId(),user.getBrojIndexa(),user.getPassword(),user, mapToGrantedAuthorites(new ArrayList<String>(Arrays.asList("ROLE_"+user.getRole()))),user.isMoguce());
        
    }

    private static List<GrantedAuthority> mapToGrantedAuthorites(List<String> authorities) {
        return authorities.stream().map(Authority -> new SimpleGrantedAuthority(Authority)).collect(Collectors.toList());
    }
}
