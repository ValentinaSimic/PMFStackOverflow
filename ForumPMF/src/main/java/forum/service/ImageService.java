package forum.service;

import forum.documents.Image;
import forum.repository.ImageRepository;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class ImageService {

    @Autowired
    private ImageRepository photoRepo;

    public void addPhoto( MultipartFile file) throws IOException {

        String folder="/home/valentina/DiplomskiRad/proba1-front/src/assets/Images/";
        byte[] bytes= file.getBytes();
        Path path=Paths.get(folder+  file.getOriginalFilename());
        Files.write(path, bytes);
       /* Image photo = new Image();
        photo.setImage(
                new Binary(BsonBinarySubType.BINARY, file.getBytes()));
        photo = photoRepo.insert(photo); return photo.getId();*/
    }

    public Image getPhoto(String id) {
        return photoRepo.findById(id).get();
    }
}