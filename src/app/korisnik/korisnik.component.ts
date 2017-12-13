import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-korisnik',
  templateUrl: './korisnik.component.html',
  styleUrls: ['./korisnik.component.css']
})
export class KorisnikComponent implements OnInit {

  constructor(private router: Router,private dataSer:DataService) { }

  isAuth: String;
  rezervacije = undefined;

  ngOnInit() {
    this.dataSer.postRezervacija(undefined);
    if(this.dataSer.getIdUser()!==undefined){
    this.dataSer.getRezervation(this.dataSer.getIdUser()).subscribe(
         data => {
           this.rezervacije = data.json();
         }
       );
      this.isAuth = "yes";
    }else{
      this.router.navigate(['./prijava']);
    }
  }

  obrisi(rez){
    if(confirm("Da li ste sigurni da zelite obrisati rezervaciju "+rez.idRezervation)) {
    this.dataSer.deleteRezervation(rez.idRezervation).subscribe(
         data => {
           this.dataSer.getRezervation(this.dataSer.getIdUser()).subscribe(
                data => {
                  this.rezervacije = data.json();
                }
              );

         }
       );
     }
  }


  addRezervation(){
     this.router.navigate(['/','korisnik/add-edit-rezervacija']);
  }

linkRezervacije(){
   this.router.navigate(['korisnik']);
}

  izmeni(rez){
    this.dataSer.postRezervacija(rez);
    this.router.navigate(['./korisnik/add-edit-rezervacija/'+rez.idRezervation]);
  }


  odjava(){
    this.router.navigate(['/']);
  }

}
