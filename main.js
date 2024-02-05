// ----------Object & how it works
/*----
let laptop = {
  brand:"Apple",
  ram:8,
  isM1:true,
  display:13.3,
  freeStorage:(total,used)=>{
    console.log(total-used)
  }
}
laptop.freeStorage(240,86);
----------*/


// ----------CLASS(Like a blue print of an object) & how it works-----

/*----------
class laptop{
  brand="Apple"
  ram=8
  isM1=true
  display=13.3

  freeStorage=(total,used)=>{
    console.log(total-used);
  }
}

let LaptopObj = new laptop();

LaptopObj.freeStorage(300,200);
console.log(LaptopObj.brand);
console.log(LaptopObj.ram);
--------*/


// -------Constructor function & how it works inside class

class Laptop{
  //This bonus function will execute automatically
  constructor(a,b){
    // console.log("I am constructor");
    let c=a+b;
    console.log(c);
  }
}

let obj = new Laptop() // () is called constructor

