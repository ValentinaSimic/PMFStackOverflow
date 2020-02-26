package forum.documents;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Document(collection="forumPMFVS")
public class Pitanje {

    @Id
    private String id=new ObjectId().toString();
    private String kurs;
    private String naslovPitanje;
    private String textPitanje;
    private String postavioPitanje;

    @DateTimeFormat(iso= DateTimeFormat.ISO.DATE_TIME)
    private Date datumPitanje=new Date();

    private List<Odgovor> odgovori=new ArrayList<Odgovor>();

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNaslovPitanje() {
        return naslovPitanje;
    }

    public void setNaslovPitanje(String naslovPitanje) {
        this.naslovPitanje = naslovPitanje;
    }

    public String getTextPitanje() {
        return textPitanje;
    }

    public void setTextPitanje(String textPitanje) {
        this.textPitanje = textPitanje;
    }

    public Date getDatumPitanje() {
        return datumPitanje;
    }

    public void setDatumPitanje(Date datumPitanje) {
        this.datumPitanje = datumPitanje;
    }

    public List<Odgovor> getOdgovori() {
        return odgovori;
    }

    public void setOdgovori(List<Odgovor> odgovori) {
        this.odgovori = odgovori;
    }

    public String getPostavioPitanje() {
        return postavioPitanje;
    }

    public void setPostavioPitanje(String postavioPitanje) {
        this.postavioPitanje = postavioPitanje;
    }


    public String getKurs() {
        return kurs;
    }

    public void setKurs(String kurs) {
        this.kurs = kurs;
    }
}
