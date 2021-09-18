
var arr=[3,4,5,7] //لااااااا
// console.log(Array.isArray(users))//true
console.log(Array.isArray(arr))//true
console.log(arr instanceof Array)

///////////////Associative Arrays
var person = []; //empty array //this array treat like object
person["name"] = "John";
person["age"] = 46;
person["Email"] = "Example@gmail.com";
person["married"] = true;
console.log("return 0 lenght in this espicial array : ", person.length);//return 0 for lenght in this espicial array
console.log("print the value of key 'age' : ", person["age"]);
console.log("print the array : ", person);


let users = [
    {name:"athraa", age:29, married:true  },
    {name:"John",   age:22, married:false },
    {name:"Alice",  age:18, married:false },
    {name:"Sara",   age:30, married:true  },
]
// console.log("print the values of 'name' : " , users.map(user => user.name))
// console.log("print the values of 'age' : " , users.map(user => { return user.age}))
// console.log("print the values of 'name' : " , users.map(({ name }) => name))//{ } obj is parameter of function
// console.log("type of users : ", typeof users)
// console.log("print the obj. 2" , users[2])
// console.log("lenght of object's array" , users.length);
// console.log("undifiend becuase its array of obj." , users.name);  //undifiend becuase its array of object

let user = {name:"Mohammad", age:33, married:true};
console.log(user.name); //obj// so it will print the name
users.unshift(user);
console.log("add obj. in start : ",users)
let user1 = {name:"Elis", age:23, married:true}
users.push(user1)
console.log("add obj. in final : ",users)
let user2={name:"Zuha", age:44, married:true}
users.splice(3,0,user2)
console.log("add obj. in index 3",users)
let x= users.find(v => v.age === 22); 
console.log("the user has 22 age who is :",x)


لاااااااااا
// let x= users.find(v => v.age === 44 && v.name === "Bahn"); //هنا يطلع الشرط الثاني بس الاوبجكت ااخير

let user6= users.filter(x => x.age === 44); //فلتر تطلع كل الاوبجكت الي تخص الشرط
// console.log(user6)
 
let Y = users.sort((c1,c2) => (c1.age < c2.age) ? 1 : (c1.age > c2.age) ? -1 : 0);
console.log(Y) //ترتيب تنازلي

لااااا
///////////////object////////////////////////
var person = {name: "athraa", age:"29", hight:"170", degree:"master"}       
//   console.log(person.name)//many ways to print the obj
//   console.log(person['name'])
//   console.log(person.name.length)//يطلع طول كل عنصر 
//   console.log(person.degree.length)
console.log(Object.keys(person));//حتطبع البوبرتيز الكيز بشكل مصفوفة سترنك
console.log(Object.values(person));//تطبع مصفوفة سترنك للفاليوز
console.log(Object.entries(person));//يطلع كل عنصر بالاوبجكت مصمفوفة لوحدة من الكي والفاليو
console.log(person);//يطلع اوبجكت
console.log(Object.entries(person));
console.log(Object.entries(person) [1][1]);




const items = [
    {name: 'Bike',    price: 100 },
    {name: 'TV',      price: 200 },
    {name: 'Book',    price: 20  },
    {name: 'Phone',   price: 1000}
]

console.log(items.filter((item) => {
    return item.price <= 100;
}));
console.log("the items less& equal 100 : ",items);
console.log("the items greater than & equal 100 : ", items.filter(item => item.price >= 100)); //تطلع عنصر الاوربكت كامل
console.log(items.filter(item => item.name === 'TV'));

 items.forEach((item) => {
    console.log("item in object's array : ", item.name); 
});


ماعرف شنو هذا المثال
var athraa = (a) => {
    var d = a*4; 
    return d;
}
var newathraa = (fname, a) => {
    var sss = athraa(a);
    return console.log(fname, sss)
}
athraa("ddd", 55)

x=[1,-2,-45,3,4,6,8,-7,-4,-20].filter(

function arr(num) {
    return num>0
})
console.log(x);


ex
var array = [3, -1, 0, 7, -71, 9, 10, -19];

const getpositiveNumbers = (array) => array.filter(value => value > 0);

var positives = getpositiveNumbers(array);

console.log(positives);
ex


let all = prompt("Give me an array of numbers seperated by ','");

let splitted = all.split`,`.map(x => +x);
function returner(splitted) {
    let positive = [];

    for (let i = 0; i < splitted.length; i++) {
        const el = splitted[i];
        if (el >= 0) {
            positive.push(el);
        }
    }

    return positive;
}

var positive = returner(splitted);
console.log(positive);


example1
array=[1,-2,-45,3,4,6,8,-7,-4,-20];
function postive(num) {
    return num>0
}
console.log(array.filter(postive));

//ex2
array=[1,-2,-45,3,4,6,8,-7,-4,-20].filter(v=> v>0);
console.log(array);