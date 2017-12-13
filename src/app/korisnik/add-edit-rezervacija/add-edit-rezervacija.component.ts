import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Rezervacija } from '../../../models/rezervation';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-add-edit-rezervacija',
  templateUrl: './add-edit-rezervacija.component.html',
  styleUrls: ['./add-edit-rezervacija.component.css']
})
export class AddEditRezervacijaComponent implements OnInit {

  isAuth: String;
  public rez: Rezervacija;
  public myForm: FormGroup;
  private sub: any;
  public submitted: boolean;
  public events: any[] = [];

  constructor(private _fb: FormBuilder,private dataService : DataService, private router: Router,private route: ActivatedRoute) {
  }

cena:number;
  ngOnInit() {
    if(this.dataService.getIdUser()!==undefined){


          this.isAuth = "yes";
          this.rez = this.dataService.getRezervacija();
          if(this.rez!= undefined){
            this.cena=this.rez.price;
          }
          this.myForm = this._fb.group({
              idRezervation: [],
              idCar: ['', [<any>Validators.required, <any>Validators.minLength(1)]],
              idClient: [],
              idDuration: ['', [<any>Validators.required, <any>Validators.minLength(1)]],
              dateRezervation: [],
              startDate: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
              endDate: [],
              validRezervation: [],
              typeRezervation: [''],
              mileagePassed: [],
              price:  [0],
              status: ['', [<any>Validators.required, <any>Validators.minLength(1)]]
         });

         if(this.rez!==undefined){
            this.myForm.setValue(this.rez)
         }
     }else{
       this.router.navigate(['./prijava']);
     }
    }

IdTrajanjaRezervacije:number;
idCar:number;
extraCena:number;
timechange(e){
  this.IdTrajanjaRezervacije=e;
  if(this.idCar!=undefined){
  this.dataService.getPrices(this.idCar,this.IdTrajanjaRezervacije).subscribe(
    data => {
      var cene = data["_body"];
      let x = cene.split("|");
      this.cena=x[0];
      this.extraCena=x[1];
    }
  );
}
}
carchange(e){
  this.idCar=e;
  if(this.IdTrajanjaRezervacije!=undefined){
  this.dataService.getPrices(this.idCar,this.IdTrajanjaRezervacije).subscribe(
    data => {
      var cene = data["_body"];
      let x = cene.split("|");
      this.cena=x[0];
      this.extraCena=x[1];
    }
  );
  }
}


  save(rez: Rezervacija, isValid: boolean) {
    if (this.myForm.valid) {
        if(this.dataService.getRezervacija()!=undefined){
          this.dataService.updateRezervarion(rez).subscribe(
            data => { if (data["_body"].indexOf('updated')>=0) { this.router.navigate(['korisnik']); } else {alert("Greska prilikom izmene rezervacije!!!") }
            }
          );
        }else{
          rez.idClient=this.dataService.getIdUser();
          rez.dateRezervation=new Date().toISOString().substring(0,10);
          this.dataService.addRezervation(rez).subscribe(
            data => { if (data["_body"].indexOf('ok')>=0) { this.router.navigate(['korisnik']); } else {alert("Greska prilikom unosa nove rezervacije!!!") }
            }
          );
      }
    }else{
      alert("Popunite ispravno sva polja!")
    }
  }


  odjava(){
    this.router.navigate(['/']);
  }

  addRezervation(){
    this.dataService.postRezervacija(undefined);
     this.router.navigate(['./korisnik/add-edit-rezervacija']);
  }
}
