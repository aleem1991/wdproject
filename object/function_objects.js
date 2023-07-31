/*let person={
    firstName:"joe",
    lastName:"Biden",
    fullName: function()
    {

        return this.firstName+" "+this.lastName;
    }
}
console.log(person.fullname());
*/
let person={
    firstName:"Joe",
    lastName:"Biden",

    fullname:function()
    {
        return this.firstName+" "+ this.lastName;
    }
}
console.log(person.fullname());