import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  constructor(private router: Router,private dataSer:DataService) { }

  isAuth: String;
  cars = undefined;
  ngOnInit() {
     this.dataSer.postCar(undefined);
     if(this.dataSer.getIdUser()!==undefined){
       this.dataSer.getCars().subscribe(
          data => {
            this.cars = data.json();
          }
        );
      }else{
        this.router.navigate(['./prijava']);
      }
      this.isAuth = "yes";
  }


obrisi(car){
  if(confirm("Da li ste sigurni da zelite obrisati automobil "+car.carBrand+" "+car.carModel)) {
  this.dataSer.deleteCar(car.idCar).subscribe(
       data => {
         this.dataSer.getCars().subscribe(
              data => {
                this.cars = data.json();
              }
            );

       }
     );
   }
}


addCar(){
   this.router.navigate(['./adminpage/add-edit-car']);
}


izmeni(car){
  this.dataSer.postCar(car);
  this.router.navigate(['./adminpage/add-edit-car/'+car.idCar]);
}

odjava(){
  this.router.navigate(['/']);
}

}
