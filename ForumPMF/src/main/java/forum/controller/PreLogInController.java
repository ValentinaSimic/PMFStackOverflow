package forum.controller;

import forum.documents.User;
import forum.domain.Response;
import forum.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PreLogInController {

    @Autowired
    UserService userService;

    //ova putanja da se poklapa sa onom anymatchers, i tamo u angularu
    @PostMapping(value="/registration")
    public ResponseEntity<Response> Registration(@RequestBody User user){
        User dbUser= userService.save(user);
        if(dbUser!=null){
            return new ResponseEntity<Response>(new Response("Student je sacuvan uspesno"), HttpStatus.OK);
        }
        return null;
    }

}
