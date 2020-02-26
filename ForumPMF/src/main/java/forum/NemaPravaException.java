package forum;

import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.SpringSecurityMessageSource;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.FORBIDDEN)
public class NemaPravaException extends RuntimeException {

    private static long serialVersionUID= 1454988256570327118L;
    protected static MessageSourceAccessor message= SpringSecurityMessageSource.getAccessor();

    public NemaPravaException(){
        super(message.getMessage("AbstractAcessDecisionManager.accesDenide","Veza je odbijena"));
    }

    public NemaPravaException(String message){
        super(message);
    }
}
