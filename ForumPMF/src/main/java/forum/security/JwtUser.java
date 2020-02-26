package forum.security;

import com.fasterxml.jackson.annotation.JsonIgnore;
import forum.documents.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Collection;

public class JwtUser implements UserDetails {

    private final String id;
    private final String username;
    private final String password;
    //Student
    private final User user;
    private final Collection<? extends GrantedAuthority> authorites;
    private final boolean moguce;

    public JwtUser(String id, String username, String password, User user,
                   Collection<? extends GrantedAuthority> authorites, boolean moguce) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.user = user;
        this.authorites = authorites;
        this.moguce= moguce;
    }

    @JsonIgnore
    public String getId() {
        return id;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return moguce;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorites;
    }

    @Override
    public String getPassword() {
        return password;
    }

    public User getUser() {
        return user;
    }



}
