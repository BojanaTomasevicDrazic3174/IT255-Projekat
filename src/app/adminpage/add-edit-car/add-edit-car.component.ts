import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Car } from '../../../models/car';

@Component({
  selector: 'app-add-edit-car',
  templateUrl: './add-edit-car.component.html',
  styleUrls: ['./add-edit-car.component.css']
})
export class AddEditCarComponent implements OnInit {
  isAuth: String;
  public car: Car;
  public myForm: FormGroup;
  private sub: any;
  public submitted: boolean;
  public events: any[] = [];

  constructor(private _fb: FormBuilder,private dataService : DataService, private router: Router,private route: ActivatedRoute) {
  }

  ngOnInit() {
      if(this.dataService.getCar()==undefined){
         this.router.navigate(['adminpage/add-edit-car']);
      }
      this.isAuth = "yes";
      this.car = this.dataService.getCar();
      this.myForm = this._fb.group({
          idCar: [],
          idTariffClass: ['', [<any>Validators.required, <any>Validators.minLength(1)]],
          idInsurance: [''],
          carBrand: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
          carModel: ['', [<any>Validators.required, <any>Validators.minLength(2)]],
          dateOfPurchase: [''],
          carPrice: [''],
          kilometras: [''],
          dateOfProduction: [''],
          carPowers: [''],
          urlImage: ['']
     });
     if(this.car!==undefined){
        this.myForm.setValue(this.car)
     }
  }


  save(car: Car, isValid: boolean) {
    if (this.myForm.valid) {
        if(car.idCar!=undefined){
          this.dataService.updateCar(car).subscribe(
            data => { if (data["_body"].indexOf('updated')>=0) { this.router.navigate(['adminpage']); } else {alert("Greska prilikom izmene auta!!!") }
            }
          );
        }else{
          this.dataService.addCar(car).subscribe(
            data => { if (data["_body"].indexOf('ok')>=0) { this.router.navigate(['adminpage']); } else {alert("Greska prilikom unosa novog auta!!!") }
            }
          );
      }
    }else{
      alert("Popunite ispravno sva polja!")
    }
  }

  addCar(){
    this.dataService.postCar(undefined);
     this.router.navigate(['./adminpage/add-edit-car']);
  }


}
