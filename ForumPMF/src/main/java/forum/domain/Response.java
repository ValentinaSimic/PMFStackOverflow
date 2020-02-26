package forum.domain;

import java.io.Serializable;

public class Response implements Serializable {

    private static final Long serialVersionUID=8623768645601970443L;
    private String message;


    public Response(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
