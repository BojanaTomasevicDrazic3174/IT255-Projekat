import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  public myForm: FormGroup;
  private sub: any;
  public submitted: boolean;
  public events: any[] = [];

  constructor(private _fb: FormBuilder,private dataService : DataService, private router: Router,private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.myForm = this._fb.group({
        idClient: [''],
        clientName: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
        clientLastName: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
        clientAddress: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
        clientDateOfBirth: ['', [<any>Validators.required, <any>Validators.minLength(8)]],
        clientTelefonNum: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
        clientEmail: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
        clientUsername: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
        clientPassword: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
        REPASSWORD: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
        tip: ['']
   });
  }

  save(klijent: Klijent, isValid: boolean) {
    if(klijent.clientPassword !== klijent.REPASSWORD){
      alert("Ponovite istravno unetu sifru!")
    }else{
    if (this.myForm.valid) {
      klijent.tip ="korisnik"
          this.dataService.addClient(klijent).subscribe(
            data => { if (data["_body"].indexOf('ok')>=0) { this.router.navigate(['prijava']); alert("Uspesno ste se registrovali! Prijavite se na sajt!"); } else {alert("Greska prilikom unosa novog auta!!!") }
            }
          );
    }else{
      alert("Popunite ispravno sva polja!")
    }
  }
  }

}

@Injectable()
export class Klijent {
    constructor(
        public idClient: number,
        public clientName: string,
        public clientLastName: string,
        public clientAddress: string,
        public clientDateOfBirth: string,
        public clientTelefonNum: string,
        public clientEmail: string,
        public clientUsername: string,
        public clientPassword: string,
        public REPASSWORD: string,
        public tip: string
    ){}
}
