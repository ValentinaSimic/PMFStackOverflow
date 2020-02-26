package forum.documents;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class Odgovor {
    @Id
    private String id=new ObjectId().toString();

    private String postavioOdg;
    private String textOdg;
    @DateTimeFormat(iso= DateTimeFormat.ISO.DATE_TIME)
    private Date datumOdg=new Date();

    public Odgovor() {

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }


    public String getTextOdg() {
        return textOdg;
    }

    public void setTextOdg(String textOdg) {
        this.textOdg = textOdg;
    }

    public Date getDatumOdg() {
        return datumOdg;
    }

    public void setDatumOdg(Date datumOdg) {
        this.datumOdg = datumOdg;
    }

    public String getPostavioOdg() {
        return postavioOdg;
    }

    public void setPostavioOdg(String postavioOdg) {
        this.postavioOdg = postavioOdg;
    }
}
