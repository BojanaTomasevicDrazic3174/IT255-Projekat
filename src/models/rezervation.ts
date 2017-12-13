export class Rezervacija {
    constructor(
        public idRezervation: number,
        public idCar: number,
        public idClient: number,
        public idDuration: number,
        public dateRezervation: string,
        public startDate: string,
        public endDate: string,
        public validRezervation: boolean,
        public typeRezervation: string,
        public mileagePassed: number,
        public price: number,
        public status: string
    ){}
}
