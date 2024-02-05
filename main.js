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