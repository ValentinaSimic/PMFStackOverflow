package forum.repository;

import forum.documents.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

    User findByBrojIndexaIgnoreCase(String username);

    User findByBrojIndexa(String brojIndexa);

    User findByUsername(String username);

    Long deleteByBrojIndexa(String brojIndexa);
}
