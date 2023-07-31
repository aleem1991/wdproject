let person =
{
    name:"khan " ,
    age:18,
    gender:"male",
    eyecolor:"black",
cars:{
    car1:"honda",
    car2:"bmw"
}
}
for(i in person.cars ){
    console.log(person.name + i + " is " +person.cars[i]);

}