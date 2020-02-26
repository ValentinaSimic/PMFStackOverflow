package forum.repository;

import forum.documents.Kurs;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface KursRepository extends MongoRepository<Kurs, String> {

    List<Kurs> findAll();

    Kurs findByNazivKursa(String kursNaziv);
}
