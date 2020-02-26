package forum.controller;

import forum.documents.Image;
import forum.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;

@RestController
public class ImageController {

    @Autowired
    private ImageService imageService;

    @PostMapping("/photos/add")
    public void addPhoto(
                           @RequestParam("image") MultipartFile image, Model model)
            throws IOException {
        System.out.println("Usaooo");
        Path path1= Paths.get(image.getOriginalFilename());
        imageService.addPhoto( image);
        //return "redirect:/photos/" + id;
    }

    @GetMapping("/photos/{id}")
    public String getPhoto(@PathVariable String id, Model model) {
        Image photo = imageService.getPhoto(id);
        model.addAttribute("image",
                Base64.getEncoder().encodeToString(photo.getImage().getData()));
        return "photo";
    }
}
