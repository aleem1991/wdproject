let pet=
{
    type:'tiger',
    name:'tiger',
    legs:'four',
    color:'white',
    food:{
        favorite:"bone",
        leastfavorite:"meat",
        allergies:"milk",
    }
    }

for(i in pet ){
    console.log(i+ ":" +pet[i]);

}
console.log(pet.food);
