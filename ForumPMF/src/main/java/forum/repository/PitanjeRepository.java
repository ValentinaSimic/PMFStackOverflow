package forum.repository;

import com.mongodb.client.result.UpdateResult;
import forum.documents.Kurs;
import forum.documents.Odgovor;
import forum.documents.Pitanje;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PitanjeRepository {

    @Autowired
    MongoTemplate mt;

    public Pitanje save(Pitanje pitanje){

        return mt.save(pitanje);
    }

    public UpdateResult addOdgovor(Odgovor odg, String idPitanje){
        return mt.updateFirst(
                new Query().addCriteria(Criteria.where("_id").is(idPitanje)),
                new Update().addToSet("odgovori", odg),
                Pitanje.class
        );
    }


    public List<Pitanje> findAll(){
        return mt.findAll(Pitanje.class);
    }

    public Pitanje find(String idPitanje){
        return mt.find(
                new Query().addCriteria(Criteria.where("_id").is(idPitanje)),
                Pitanje.class
        ).get(0);
    }

    public List<Pitanje> pretraga(String pretragaPitanje){
        return mt.aggregate(Aggregation.newAggregation(
                Aggregation.match(new Criteria().orOperator(
                        Criteria.where("naslovPitanje").regex(pretragaPitanje)
                ))
        ),  "forumPMFVS", Pitanje.class).getMappedResults();
    }


}
