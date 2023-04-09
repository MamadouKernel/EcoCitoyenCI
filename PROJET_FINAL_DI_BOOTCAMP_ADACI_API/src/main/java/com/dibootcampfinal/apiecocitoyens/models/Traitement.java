package com.dibootcampfinal.apiecocitoyens.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "traitements")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Traitement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "lieu_traitement")
    private String lieuTraitement;

    @Column(name = "statut")
    private String statut;

    @Column(name = "quantite")
    private Integer quantite;

    @ManyToOne
    @JoinColumn(name = "dechet_id")
    @JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
    private Dechet dechet;

}
