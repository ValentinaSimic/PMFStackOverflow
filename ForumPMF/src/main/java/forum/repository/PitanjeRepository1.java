package forum.repository;

import forum.documents.Pitanje;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PitanjeRepository1 extends MongoRepository<Pitanje, String> {

    List<Pitanje> findByKurs(String kurs);
}
