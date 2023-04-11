class Product{
    constructor(Name,Price){
        this.Name=Name;
        this.Price=Price;
    }
}

class Milk extends Product{
    constructor(Name,Price,FatPercent){
        super(Name,Price);
        this.FatPercent=FatPercent;
    }
}

const Milk1=new Milk("AzerSud", 2.29, 1.5);
const Milk2=new Milk("Milla", 2.10, 2.5);
const Milk3=new Milk("Milla", 2.30, 3.2);




const milks=[Milk1,Milk2,Milk3];

const total=(Milk1.FatPercent+Milk2.FatPercent+Milk3.FatPercent)/3;

// const total=(Milk1.FatPercent+Milk2.FatPercent+Milk3.FatPercent)/milks.length;

console.log("total fatPercent is : "+ " "+total); //2.4