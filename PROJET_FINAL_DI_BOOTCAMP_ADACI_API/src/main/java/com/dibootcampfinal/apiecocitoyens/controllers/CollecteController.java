package com.dibootcampfinal.apiecocitoyens.controllers;

import com.dibootcampfinal.apiecocitoyens.models.Collecte;
import com.dibootcampfinal.apiecocitoyens.services.CollecteService;
import com.sun.istack.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/collectes")
public class CollecteController {

    @Autowired
    private CollecteService collecteService;

    @PostMapping("/create")
    public ResponseEntity<Collecte> save(@Validated @RequestBody Collecte collecte) {
        Collecte savedCollecte = collecteService.save(collecte);
        return new ResponseEntity<>(savedCollecte, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Collecte> update(@PathVariable("id") @NotNull Long id, @Validated @RequestBody Collecte collecte) {
        Collecte updatedCollecte = collecteService.update(id, collecte);
        return new ResponseEntity<>(updatedCollecte, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Collecte> findById(@PathVariable("id") @NotNull Long id) {
        Collecte collecte = collecteService.findById(id);
        return new ResponseEntity<>(collecte, HttpStatus.OK);
    }

    @GetMapping("/showAll")
    public ResponseEntity<List<Collecte>> findAll() {
        List<Collecte> collectes = collecteService.findAll();
        return new ResponseEntity<>(collectes, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") @NotNull Long id) {
        collecteService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
