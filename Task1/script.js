class Car{
    constructor(Brand,Model,CurrentFuel,FuelFor1Km,Millage){
        this.Brand=Brand;
        this.Model=Model;
        this.CurrentFuel=CurrentFuel;
        this.FuelFor1Km=FuelFor1Km;
        this.Millage=Millage;
    }


    Drive(driveDistance){
        //  let distance =prompt("Nece km surmek isteyirsen?");
        //  Car.driveDistance=parseInt(distance); //80
         
         const NeededFuel=driveDistance*this.FuelFor1Km; //50*4=200   //80*4=320

         if(this.CurrentFuel>=NeededFuel){ //400>=200 //400>320
            this.Millage=this.Millage+driveDistance;
            this.CurrentFuel=this.CurrentFuel-NeededFuel;

            console.log("Gedilen yol:"+ " "+driveDistance +"\n"+ "Cari km:"+" "+this.Millage +"\n"+"Yanacaq:"+" "+this.CurrentFuel)

         }
         else{
            console.log("Benzin kifayet etmir.")
         }
    }


}
const Car1 = new Car("Mercedes-Benz","C-class",400,4,10000);

// Car1.Drive(Car.driveDistance);//50   or //80

Car1.Drive(50);