package forum.domain;

import forum.documents.User;
import jdk.nashorn.internal.parser.Token;

import java.io.Serializable;

public class UserDTO implements Serializable {

    private static final long SerialVersionUID= -3519446517705101538L;

    private User user;
    private String token;

    public UserDTO(User user, String token) {
        this.user = user;
        this.token = token;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }


    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
