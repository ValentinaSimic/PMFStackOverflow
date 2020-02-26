package forum.controller;

import forum.documents.Pitanje;
import forum.documents.Student;
import forum.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin()
public class StudentController {

    @Autowired
    StudentRepository sr;


}
