import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Car } from '../models/car';
import { Klijent } from './registracija/registracija.component';
import { Rezervacija } from '../models/rezervation';

@Injectable()
export class DataService {

  basicUrl = 'http://localhost/RentACarAngular2Project/php/';

  constructor(private http: Http) { }

  fetchData(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.basicUrl + 'getCars.php', {
            headers: headers
          });
  }

  login(username,password){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.basicUrl + 'login.php?clientUsername='+username+'&clientPassword='+password, {
            headers: headers
          });
  }

  getCars(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.basicUrl + 'getCars.php', {
            headers: headers
          });
  }

  addCar(car: Car){
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      return this.http.post
      (this.basicUrl + 'addCar.php', car, { headers: headers })
    }

  updateCar(car: Car){
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      return this.http.post(this.basicUrl + 'updateCar.php', car, { headers: headers })
    }

  deleteCar(id){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.basicUrl + 'deleteCar.php?id='+id, {
            headers: headers
          });
  }

addClient(klijent: Klijent){
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  return this.http.post(this.basicUrl + 'addClient.php',klijent, {
          headers: headers
        });
}

getRezervation(id){
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  return this.http.post(this.basicUrl + 'getRezervation.php?idClient='+id, {
          headers: headers
        });
}

getAllRezervations(){
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  return this.http.post(this.basicUrl + 'getAllRezervations.php', {
          headers: headers
        });
}

addRezervation(rez: Rezervacija){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.basicUrl + 'addRezervation.php', rez, { headers: headers })
  }

updateRezervarion(rez: Rezervacija){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.basicUrl + 'updateRezervation.php', rez, { headers: headers })
  }

deleteRezervation(id){
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  return this.http.post(this.basicUrl + 'deleteRezervation.php?id='+id, {
          headers: headers
        });
}

getPrices(idCar,idTipTrajanja){
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  return this.http.post(this.basicUrl + 'getPrices.php?idCar='+idCar+'&idTipTrajanja='+idTipTrajanja, {
          headers: headers
        });
}

  private car:Car;
  private idUser:undefined;
  private rezervacija:Rezervacija;

  postCar(car){
   this.car=car;
  }
  getCar(){
    return this.car;
  }
  postIdUser(idUser){
   this.idUser=idUser;
  }
  getIdUser(){
    return this.idUser;
  }

  postRezervacija(rezervacija){
   this.rezervacija=rezervacija;
  }
  getRezervacija(){
    return this.rezervacija;
  }
}
