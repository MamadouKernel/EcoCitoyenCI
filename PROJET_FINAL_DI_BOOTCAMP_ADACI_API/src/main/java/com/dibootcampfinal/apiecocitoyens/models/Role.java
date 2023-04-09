package com.dibootcampfinal.apiecocitoyens.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "roles")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "libelle")
    private String libelle;

    @Column(name = "created_date")
    private LocalDateTime createdDate;

    //@OneToMany(mappedBy = "role", cascade = CascadeType.ALL)
    //@JsonIdentityReference(alwaysAsId = true)
    //private List<Utilisateur> utilisateurs = new ArrayList<>();

    @PrePersist
    public void onPrePersist() {
        this.createdDate = LocalDateTime.now();
    }

}
