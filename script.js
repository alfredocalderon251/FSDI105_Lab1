const salon={
    name:"Fashion Pets",
    phone:"8675309",
    address:{
        street:"Hope Ave",
        number:"1313-5"
    },
    workingHours:{
        days:"Mon-Fri",
        open:'8:00 am',
        close:'5:00 pm'

    },
    pets:[],

    ShowPets:function(){
        var PetsMsg="Total Pets: "+this.pets.length;

        for(i=0;i<this.pets.length;i++){
            PetsMsg=PetsMsg+`<br>Pet Name: ${this.pets[i].name}`; 
        }

        document.getElementById("Pets").innerHTML=PetsMsg;

    }
}

let{name,phone,address:{street,number},workingHours:{days,open,close}}=salon;
console.log(salon);

document.getElementById("shop").innerHTML=`<h1>Pet Saloon : ${name}</h1> <br> Contact : ${phone}, ${street}${number} <br> ${days}, ${open} - ${close}`

class Pet {
    constructor(name, age, type, gender, breed, service, ownerName, contactPhone) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.ownerName = ownerName;
        this.contactPhone = contactPhone;
        this.hunger=10;
        this.hapiness=5;

        
    }
    status=function(){
        console.log("Hapiness: "+this.hapiness+" Hunger: "+this.hunger);

    }
    feed=function(){
        this.hunger-=10;
        this.hapiness+=10;
        console.log("Feeding...");

    }

    ownerContact=function(){
        console.log("OwnerName: "+this.ownerName+" Phone:"+this.contactPhone);
    }
    ;

    
}

const pet1=new Pet("Shaggy",5,"Dog","Male","German Shepard","Hair Cut","Oliver","0123456");
const pet2=new Pet("Scooby-Do",3,"Dog","Male","Great Dane","Shower","Alfredo","789456");
const pet3=new Pet("Firulais",1,"Dog","Male","Chihuahua","Hair Cut","Adrian","48974566");
const pet4=new Pet("Mindy",2,"Cat","Female","Munchkin","Hair Cut","Tom","6620194");


salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);
salon.pets.push(pet4);

pet1.status();
pet1.feed();
pet1.ownerContact();

console.table(salon.pets);

salon.ShowPets();


