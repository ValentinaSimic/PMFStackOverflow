package forum.controller;

import forum.documents.Pitanje;
import forum.documents.User;
import forum.domain.Response;
import forum.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(value="/users")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> users=userService.findAll();
        return new ResponseEntity<List<User>>(users, HttpStatus.OK);
    }

    @GetMapping(value="/getUser")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<User> getUser(Principal principal){
        User user= userService.getUserByBrojIndexa(principal.getName());
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @PostMapping(value="/deleteUser")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Response> deleteUser( @RequestBody User user){
        System.out.println(user);
        Long user1=userService.deleteByBrojIndexa(user.getBrojIndexa());
        if(user1!=null) {
            return new ResponseEntity<Response>(new Response("Student je uspesno obrisan"), HttpStatus.OK);
        } else return null;
    }
}
