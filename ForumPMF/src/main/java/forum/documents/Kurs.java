package forum.documents;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Document(collection="pitanjaPMFVS")
public class Kurs {

    @Id
    private String id=new ObjectId().toString();

    private String nazivKursa;

    private List<Pitanje> pitanja=new ArrayList<Pitanje>();

    public Kurs() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNazivKursa() {
        return nazivKursa;
    }

    public void setNazivKursa(String nazivKursa) {
        this.nazivKursa = nazivKursa;
    }

    public List<Pitanje> getPitanja() {
        return pitanja;
    }

    public void setPitanja(List<Pitanje> pitanja) {
        this.pitanja = pitanja;
    }
}
