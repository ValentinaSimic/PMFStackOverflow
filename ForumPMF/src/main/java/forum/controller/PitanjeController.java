package forum.controller;

import com.mongodb.client.result.UpdateResult;
import forum.documents.Kurs;
import forum.documents.Odgovor;
import forum.documents.Pitanje;
import forum.repository.KursRepository;
import forum.repository.PitanjeRepository;
import forum.repository.PitanjeRepository1;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin()
public class PitanjeController {

    @Autowired
    PitanjeRepository pr;

    @Autowired
    KursRepository kr;

    @Autowired
    PitanjeRepository1 pr1;

    @GetMapping("/pitanja/")
    public List<Pitanje> findAll(){
        System.out.println("Pozvan");
        return pr.findAll();
    }

    @PostMapping("/savePitanje")
    public void save( @RequestBody Pitanje pitanje){
        pr.save(pitanje);
    }

    @PostMapping("/pitanja/{idPitanje}/dodajOdgovor")
    public UpdateResult addOdgovor(@PathVariable("idPitanje")  String idPitanje, @RequestBody Odgovor odgovor){
        return pr.addOdgovor(odgovor, idPitanje);
    }

    @GetMapping("/pitanje/{idPitanje}")
    public Pitanje find(@PathVariable("idPitanje") String idPitanje){
        return pr.find(idPitanje);
    }


    @GetMapping("/pitanje/pretraga/{pretragaPitanje}")
    public List<Pitanje> pretraga(@PathVariable("pretragaPitanje") String pretragaPitanje){
        return pr.pretraga(pretragaPitanje);
    }

    @GetMapping("/kursevi")
    public List<Kurs> sviKursevi(){
        System.out.println(kr.findAll().size());
        return kr.findAll();

    }

    @GetMapping("/pitanjaZaKurs/{kursId}")
    public List<Pitanje> pretraziKurs(@PathVariable("kursId") String kursId){
        System.out.println("usao");


        return pr1.findByKurs(kursId);
    }

}
