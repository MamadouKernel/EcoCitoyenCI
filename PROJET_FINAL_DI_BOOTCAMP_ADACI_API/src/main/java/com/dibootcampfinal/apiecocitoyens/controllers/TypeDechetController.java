package com.dibootcampfinal.apiecocitoyens.controllers;

import com.dibootcampfinal.apiecocitoyens.models.TypeDechet;
import com.dibootcampfinal.apiecocitoyens.services.TypeDechetService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/typedechet")
@AllArgsConstructor
public class TypeDechetController {

    private final TypeDechetService typeDechetService;

    @GetMapping("/showAll")
    public ResponseEntity<List<TypeDechet>> getAll() {
        List<TypeDechet> typeDechets = typeDechetService.findAll();
        return new ResponseEntity<>(typeDechets, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TypeDechet> getById(@PathVariable Long id) {
        TypeDechet typeDechet = typeDechetService.findById(id);
        return new ResponseEntity<>(typeDechet, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<TypeDechet> create(@Validated @RequestBody TypeDechet typeDechet) {
        TypeDechet createdTypeDechet = typeDechetService.save(typeDechet);
        return new ResponseEntity<>(createdTypeDechet, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<TypeDechet> update(@PathVariable Long id, @Validated @RequestBody TypeDechet typeDechet) {
        TypeDechet updatedTypeDechet = typeDechetService.update(id, typeDechet);
        return new ResponseEntity<>(updatedTypeDechet, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        typeDechetService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
