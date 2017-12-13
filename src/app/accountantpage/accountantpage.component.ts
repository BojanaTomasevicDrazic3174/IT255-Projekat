import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-accountantpage',
  templateUrl: './accountantpage.component.html',
  styleUrls: ['./accountantpage.component.css']
})
export class AccountantpageComponent implements OnInit {


  constructor(private router: Router,private dataSer:DataService) { }

  rezervacije = undefined;
  isAuth: String;

  ngOnInit() {
    this.dataSer.postRezervacija(undefined);
    if(this.dataSer.getIdUser()!==undefined){
    this.dataSer.getAllRezervations().subscribe(
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

  izmeni(rez){
    this.dataSer.postRezervacija(rez);
    this.router.navigate(['./racunovodja/add-edit-nalog/'+rez.idRezervation]);
  }


  odjava(){
    this.router.navigate(['/']);
  }
}
