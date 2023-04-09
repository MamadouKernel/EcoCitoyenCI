package com.dibootcampfinal.apiecocitoyens.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "dechet")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Dechet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "libelle")
    private String libelle;

    @Column(name = "origine")
    private String origine;

    @ManyToOne
    @JoinColumn(name = "type_dechet_id")
    @JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
    private TypeDechet typeDechet;

    @Column(name = "image")
    private String image;

    @Column(name = "create_date")
    private LocalDateTime createDate;

}
