// var x= 4
// let y= 10
// // cost y1= 2
// console.log("the result is :" , x , y)

// function printName (fname,Sname) {
//     fullName= fname + Sname;
//     return console.log("the result is :","", fullName);
// }
// printName("fatema", "huda")

// var printName1 = (name1, password) => {
//     return console.log("thr result:",name1,password);
// }
// printName1("ff","786");



// function sum(a, u){
//     s= a*u
//     return console.log(s);
// }
//  sum(2,3);


// function sum(a,b){
//         return a+b;
//     }
// // call way
//     // sum(2,4);or this way var
//     var a = 2
//     var b = 4
//     console.log(sum(a,b))
    // console.log(sum(b,a))
    // console.log(sum(2,4))
//     var s = sum(2,4)
// console.log(s)
// var mult = (a, b) =>
//  {
//     //  or put var for multi
//     // d=a*b the result d
//     return a*b;
// }
// mult(2,2)
// اذن اذا الكانصل خارج الفكشن يجي ذكر الارقام اما اذ كانت مع ال
// الرتنرن return فيجي ذكر كانصل والعملية الحسابية مع الاحرف 
// return مع العملية الحسابية
// console حسب اذا داخل الفكسن نذكر العملية تلحسابية اما اذا كانت نذكر الارقام
// console.log(mult(2,2))



// var result= 23;
// let res= 24;
// let res2= 33;
// let s="aa"
// let d=0.5
// full = result*res;
// full2 = res/res2;
// full3 = result-res;
// console.log("the result", full,"",full2,"",full3)
// console.log(typeof(full))
// console.log(typeof(s))
// console.log(typeof(full2))


// var multi = (no1,no2) => {
//     return console.log("the fresult:", (no1*no2))
// }
// multi(10,30)


// var multi = (no1,no2,no3) => {
//     var result= no1*no2*no3
//     return console.log("the fresult:", result)
// }
// multi(10,30,200)



// array index
// let x =["ali", true, 25] //literal array
// console.log(x)
// console.log(x[0])
// x[1]=false;
// console.log(x)//بدلنا عنصر

// var arr = new Array()//كونه اري واحنه ندخل العتاصر
// arr[0]=3;
// arr[1]=4;
// console.log(arr)

//join two array or push in array
// var arr1=[1,2]
// var arr2=[3,4]
// var arr3=arr1.concat(arr2)
// console.log(arr3)

//Associative Arrays
// var person = []; //empty array //this array treat like object
// person["name"] = "John";
// person["age"] = 46;
// console.log(person.length);//return 0 for leght in this espicial array
// console.log(person["age"]);
// console.log(Math.ceil(Math.random() * 10))

// var n = prompt("Enter a number", "");
// var answer = Math.sqrt(n);
// // var answer = Math.ceil(Math.sqrt(n));//decimal
// alert("The square root of " + n + " is " + answer);

// Json js obj orientation
// let x1 ={
// "name": "Ali",
// "age": 25,
// "isCool": true,

// }
// console.log(x1)
// console.log(x1.name)
// console.log(x1["name"])
// console.log(x1.age)
// console.log(x1.isCool)



// if conditions
// let x = 5
// let y = 3
// if (x == 5 || y == 6){
//     console.log("ali")
//     console.log(x == 5)
// }
// // truthy
// let h = 5
// if (h) {
//     console.log("aa")
// }
// // falsy
// let f; if (f) {
//     console.log("hi");
// }

// let p = 6
// // if (p) تشتغل اعتبرها truthy ينفذ الاوت
// if (p == 3) {
//     console.log("p is 3")
// }
// else if (p == 6) {
//     console.log("p is 6")
// }
// else {console.log("p is not ");}


// // if 2020
// let x4 = 5
// let result = x4 == 5 ? "run" : "is not"
// console.log(result)



// // for with differnt parts
// let arr = [1,2,3,4,5,7]
// for (i = 0; i < arr.length; i++)
// {
// console.log(arr.length)
// console.log(arr[i])
// }

// foreach
// let arr = [1,2,3,4,5,7]
// arr.forEach(element => {
//     console.log(element) 
// });

// for in
// let arr = [1,2,3,4,5,7]
// for (const i in arr) {
//     // if (Object.hasOwnProperty.call(object, i)) {
//     //     const element = object[i];
//         console.log(arr[i])
//     }


    // for of
    // for (const element of arr) {
    //     console.log(element);
        
    // }
// تاخذ اوبجكتobj
//    let user = {name: "ali",age: "28",phone: "266778899444"}
//     for (const i in user) {
//         console.log(i);
//         console.log(user[i]);
//     }


// // string to replace first letter
// let x = "Random";
// let newX = "T";
// for (let i = 1; i < x.length; i++) {
//     newX = newX + x[i]; 
// }
// console.log(newX);
// console.log(x[x.length - 1]); 

// let Fname = "ali";
// let Lname = "Moh";
// let age = {a: 23};
// let fullName = Fname + " " + Lname;
// let newfullName = `theresult is  ${Fname} ${Lname} ${age.a}`
// console.log(fullName);
// console.log(newfullName)

// console.log(Fname.replace('a', 'A'))


// let h = 5;
// Number.prototype.double = function () {return this.valueOf() *2}
// console.log(h.double())

// // اعرف العنصر باي موقع
// let s = [1, 3, 5];
// for (let i = 0; i < s.length; i++) {
//     if (s[i] == 5) 
        
    
//     console.log(i)
    
// }
// // ابدل كل هذي الخطوات ب prototype
// console.log(s.indexOf(3))


// function ادز متغيرات وتجمعهم بس لازم تتاكد انه المتغيرات ارقام مو غير شي
// function sum(a, b) {
//     if (typeof a != 'number') return "err";
//     if (typeof b != 'number') return "err";
//     return a+b;
// }
// console.log(sum(2,4))
// new path arrow
// let sum = (a, b) => {
//     if (typeof a != 'number') return "err";
//     if (typeof b != 'number') return "err";
//     return a+b;
// }
// console.log(sum(2,5));


// function GetAge(age) {
//     var result = 365 * age;
//     return result
// }
// function GrtFulldetials(fname,lname,age) {
//     var getAgeDay= GetAge(age)
//     return console.log(fname, lname, getAgeDay)
// }

// GrtFulldetials("athraa","faraj",28)

// function ageold(age1) {
//     var result1 = 20 * age1
//     return result1;
// }
// // ageold(20)

// function newage(n1, n2, age1) {
//     var setr = ageold(age1)
//     return console.log(n1, n2, setr)
// }
// newage("hi", "wprl", 2)


// var athraa = (f,e) => {
//     var s = f*e;
//     return console.log("the result", s);
// }
// athraa(2,3)
 
// var athraa = (Fname,age) => {
//     return console.log(Fname, age)
// }
// athraa("athraa", 29)



// var salary = (sa) => {
//     result = sa * 12;
// return result;
// }
// var salaryYear = (Fname, sa) => {
//     var out2 = salary(sa)
//     return console.log(Fname, out2, "$");
// }
// salaryYear("athraa", 1000)

// for (var i = 0; i < 4 ; i++)
// {
//     x = "ataa"
//     console.log("the rname is : ",x )
// }


// array

// var id1 = ["athraa", 28 , false, "Canada"]
// console.log("name :", id1[0], "\n age :", id1[1], "\n matiage :", id1[2], "\n country :", id1[3])

// console.log(id1.indexOf("athraa"))
// console.log(id1.indexOf(28))
// console.log(id1.indexOf(false))
// console.log(id1.indexOf("Canada"))

// console.log(id1.length)

// var n1 = "athraa"
// var n2 = "Canada"
// var n3 = n1+n2
// n1 += n2
// console.log(n1)

// if condition the result is treu or false 


// var x= 100
// if (x>100){
//     alert("pass")
// }
// else if (x<=10){
//     console.log("pass")
// }
// else {
//     console.log("less")
// }


// اله + مو كومة بالاوت ياله طلع الناتج 
// var count = 1;
// while(count<10){
//     document.getElementById("dd").innerHTML +="student :"+ count+ "<br>";
// count++;
// // ++count;
//  }

// for (var x = 0; x<10; ++x){
//     document.getElementById("dd").innerHTML +="student :"+ x+ "<br>";
  
// }


// لعرض مصفوفة بطريقة اللوب وليس كل عنصر وحده للسهولة
// var id1 = ["name: athraa","age:  28" , "marage :false", "country: Canada"]
// for (i=0; i<id1.length; i++){
//     document.getElementById("dd").innerHTML +=id1[i]+ "<br>";
// }

// var id2= ["aa", "bb", "cc"]
// for (let i = 0; i < id2.length; i++) {
//     console.log(id2[i])
//     console.log("letter1 :", id2[0])
//     // console.log("athraa")
//     document.getElementById("dd").innerHTML =id2[i]+ "<br>";
// }


// ضغط ع اي عنصر من html يطلع وظيفة الفكشن
// function arr() {
//     // console.log("aa")
//     alert("Hello")
// }

// استدعاء عناصر html داخل الفكشن/ 
// كذلك قيمة الفكشن بمتغير 
// function arr() {
//     return " <h1>Athraa</h1>"
// }
// document.write(arr())

// function arr1() {
//     return " <h1>Canada</h1>"
// }
// var x = arr1()
// document.write(x)

// function arr3(n1, n2) {
//     return n1+n2
// }
// alert(arr3(2,4))



// array تطلع اوت كلها هي وال دبل بوتيشن
// var arr = new Array()
// arr[0]="a"
// arr[1]="b"
// arr[2]="d"
// console.log(arr)

// var arr = new Array(
//     "a",
//     "b"
// )
// console.log(arr)

// var arr = []
// arr[0]="c";
// arr[1]="d";
// console.log(arr)

// تطلع الاري وية الدبل كتيشن والخ تطلع الاوت من اللوب كيبل 
// var arr1 = ["m", "p"]
// console.log(arr1); //هذي تطلع الاري كلها وية دبل كوتيشن
// console.log(arr1[0]) //هذي تطلع الاوت كبل

// var arr = ["z", "n"]
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(arr[i])  
// }

// اجيك الاري check array
// var arr = ["z", "n"]
// var arrone = "z";
// if (Array.isArray(arr))
// // if (arr.constructor === Array) //other way if array
// {
//     console.log("array")
// }
// else {
//     console.log("not array")
// }

// var x="Athraa"
// console.log(x.length) //طول الاحرف

// set lenght array
// var arr = ["z", "n","m", "p"]
// console.log(arr)
// console.log(arr.length) //get lenght
// arr.length=2; //set lenght تفيد لما عندي هواي منتجات اريد اطلع اول 2 او كم عنصر من امنج مو كلهم
// console.log(arr) 

// var arr = ["z", "n","m", "p"]
// console.log(arr)//array
// arr = arr.toString();//convert arrya to string
// console.log(arr)//تطلع عناصر الاري مو اري string 

// arr = arr.toLocaleString(arr)//string bit local
// console.log(arr)

// var myDate = new Date(),
// myString = myDate.toLocaleString();
// console.log(myDate) //التاريخ الستاندر
// console.log(myString)//local يعني مثل ما كاتبها اني بالحاسبة او بمكاني الخاص


// var arr = ["z", "n","m", "p"]
// console.log(arr)
// console.log(arr[arr.length - 1])
// console.log(arr.slice(-2)[0])

// // arr = arr.join(); //string يطلع يعني العناصر مو اري والكومة هي باي ديفولت تطلع
// // لكن اكدر اغيرها اخلي الي اريدة
// console.log(arr)

// arr = arr.join(" | "); //اغير الفاصل بينهم شحط احط
// console.log(arr)

// var arr = ["z", "n","m", "p"]
// console.log(arr.length)
// console.log(arr)

// // arr[4] = "o"
// //or
// arr[arr.length] = "o" //اضافة عنصر بالاري
// console.log(arr.length)
// console.log(arr)

// arr.push("b") //push تضيف عنصر للاري بالاخير
// console.log(arr)
// console.log(arr.length)

// arr.unshift("f"); //يحط عنصر اول الاري unshift
// console.log(arr)
// console.log(arr.length)

// arr.splice(1,3) //(index, عدد العناصر الي اريد احذفها)
// console.log(arr)
// console.log(arr.length)

// arr.splice(2, 0, "g", "h") //اضافة عنصر باي مكان بالاري
// console.log(arr)
// console.log(arr.length)



//ريام
// var sumNum = (num1, num2) => {
//     if (num1 > 4 && num2 > 10) {
//         return console.log(true)
//     }
//     else {
//         return console.log("the numbers are not meet the requirments")
//     }
// }
// console.log(sumNum(5, 7))

// var sumNum = (num1, num2) => {
//     if (num1 > 4 && num2 > 10) {
//         x= true;
//     }
//     else {
//         x= "f"
//     }
// }
// sumNum(5, 7)
// console.log(x)

// const select = document.querySelector('select');
// const para = document.querySelector('p');

// select.addEventListener('change', setWeather);

// function setWeather() {
//   const choice = select.value;

//   if (choice === 'sunny') {
//     para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
//   } else if (choice === 'rainy') {
//     para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
//   } else if (choice === 'snowing') {
//     para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
//   } else if (choice === 'overcast') {
//     para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
//   } else {
//     para.textContent = '';
//   }
// }


// function lessThan100(a, b) {
//     let sum;
//     if (a + b >= 100) {
//       result = false;
//     } else {
//       result = true;
//     }
//     return result; //ميصير ريتيرن ويه كنصل لوك سوى
//   }
//   lessThan100(2, 6)
//   console.log( lessThan100(2, 6)) //لازم نستدعي الفكشن


//   function countToFive() {
//     let firstFive = "12345";
//     let len = firstFive.length;
//     // Fix the line below
//     for (let i = 0; i < len; i++) {
//       // Do not alter code below this line
//       console.log(firstFive[i]);
//     }
//   }
//   countToFive() //لازم استدعاء للفكشن


//   var arr = [10, 11, 12, 13, 14, 8];
// console.log("print the 3th element from the array :", arr[2])
// console.log("print the 3th element from the array :", arr[arr.length - 3])
// console.log("print the 3th element from the array :", arr.slice(-4)[0])
// console.log("print the 3th element from the array :", arr.slice(-3).pop())//  popيلغي من الاريبس اخر عنصر ديطلع
//   console.log(arr);
//  arr.pop();  // will return "8" AND REMOVES IT from the array 
// because slice creates a new array object 
// arr.length; // returns 6

// for (i=4; i >= 0 ; i--) {
//     if (i>arr.length)
//     console.log(arr[i]);
//     else console.log("gg")  
// }

// console.log(arr[i]);

// var arr = ["z", "n"]
// for (let i = 0; i < arr.length; i++) {
//     // const element = arr[i];
//     console.log(arr[i])  
// }

// var arr = (x) =>{

//     if (x<2)
//      return "g";
//      else 
//      return "f"
// }
// console.log(arr(3))


// function arr1(s,f) {
//     if (s<3 && f<2){
//         var d= s+f;
//         return console.log(d)}
//     else {
//         return console.log(s) 
//     }
// }
// arr1(2,4)

//  arr1 = (s,f) => {
     
//     if (s<3 && f<2){
//         var d= s+f;
//         return console.log(d)}
//     else {
//         return console.log(s) 
//     }
// }
// arr1(2,4)

// sum =(d, h) => {
//     if (d>4 && h>10){
//         // result=d+h //اله يتحقق الشرط ياله يصير عدنا قيمة لل result 
//         //ونكدر نستدعيا وين مكان بكيفنا

//         return  result=d+h;
//     }
//     else{
//         return d  //اما نخلي console or return
        
//         //واذا الكانسل هنا معنى ماكو كانسل برا
//     }
// }

// console.log(sum(5,20))

// querySelector //يحدد اول عنصر محدد من الكود مال html
// var x= document.querySelector("h1")
// console.log(x)

//else {...} block, is basically a "last resort"

// let cheese = 'Cheddar';

// if (cheese) { //معنى ===true ميحتاج نكتبها
//   console.log('Yay! Cheese available for making cheese on toast.');
// } else {
//   console.log('No cheese on toast for you today.');
// }


//if inside if
// x=5
// if (x==5) {
//     if (x<2) {
//         alert("gg")
        
//     }
//     else if (x>4){
//         console.log("ff")

//     }
    
// }

// //نختصرها نكتب شرظ واحد بس بي 2 شرط
// x=5
// if (x==5 && x<2) {
  
//         alert("gg")
        
//     }
//     else if (x==5 && x>4){
//         console.log("ff")

//     }
    
//switch condition



//( condition ) ? run this code : run this code instead   //new syntax if
// var x= 8;  //لازم فارزة
// (x<77) ? console.log("ff") : console.log("jj")



// for (let step = 0; step < 5; step++) {
//     // Runs 5 times, with values of step 0 through 4.
//     console.log('Walking east one step');
//   }

// for (let i = 0; i < 5; i++) {
//     console.log("loop5")
    
// }
// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement

// while (condition)
//   statement

// do 
//   statement
// while (condition);
// var x =2;
// while (x<=4){
 
// if (x == 2) {
//     console.log("tt")
// //   break; //بس يطلع ال tt اذا الشرط تحقق ويكف لان break 
// }
// else {
//     console.log("ff")
    
// }
// // console.log("tt")
// // x++  //حتى يستمر اللوب مال while 

// }

// var arr = [10, 11, 12, 13, 14];
// var i = 0;

// for (; ;) {
    
//     if (i >= 5)
//     break;

//     console.log(arr['0']); //ممكن نخلي '' للاندكس حتى نطبعة
//     console.log(Object.keys(arr))//تطبع الاري وطولها شكد
// //     i++;
// }

// var i =0;

// do{
    
//     alert(i);
//     i++;

// } while(i > 1)

// for (let i = 0; i < 4; i++) {
//     if (i == 2) {
//         break; //2 يوصل لل2 ويكوف ميطلع ناتج ولا يكمل
        
//     }
//    console.log(i) 
// }

// var i = 0;
// for ( ; ;) {

//     if (i < 5) { console.log("gg")}
   
//     i++
// }

// let sum = 0;
// for (let i = 0; i <= 1; i++, sum += i);
// console.log(sum);

// function arr(n1, n2) {
//     const t = []
//     for (let i = 0; i < 3; i++) {
//         t.push(i+5)
//         //      console.log(i) //لان بداخل الوب هنا يطلعالكانسل اي لوب 0 1 2
            
//         // t=i
//     //   return t  //الرتيرن ياخذ اول تنفيذ ويوكف
//     }
//     return t //هنا ميطلع لوب لان خرجنا عن قوس اللوب يطلع اخر قيمة بس
   
// }
// // arr(2, 4)
// console.log(arr(2, 4))

// function sum(n1 , n2) {
//     const t = []
//     for (var n1 = 0; n1 < 3; n1++) {
//         for (var n2 = 0; n2 < 2; n2++) {
//         //   console.log(n1+n2)  //يرجع قيم الn2 لوب
//         //    t.push(n1+n2)
//         }
//         // console.log(n1) //يرجع قيم ال n1  لوب
//         t.push(n1+n2)  //  console.log( n2 ); // يقرا بس n2=4 ال فكشن القيمة بس n1 لوب
//     }
// //    console.log( n1 + n2);  //ديطلع بس الفكشن يرجع قيمها
// return t
// }
// // sum(2 , 4)
// console.log(sum(2 , 4))

// var hobbies = ["sport", "cooking", "programming"]
// console.log("my hoobies are :", hobbies.toString())
// hobbies.push("a walk")
// console.log("my hoobies are :", hobbies.toString())
// hobbies.shift()
// // hobbies.pop()
// // hobbies.length=1
// console.log("my hoobies are :", hobbies.toString())
//  for (let i = 0; i < hobbies.length; i++) { 
//     console.log("my hoobies are :", hobbies[i])
//  }

// function countdown(num) {
//     const arr = [];
//     for (let i = num; i > 0; i--) {
//       arr.push(i);
//     }
//     return arr;
//   };
//   console.log(countdown(10));


// var i =0
// // var r = '';
// do {
//     // console.log(i)
//     i++
//     // console.log(r)
//     r+=i+'';
    
// } while (i<6);
// console.log(r)

// for (i = 0; i <= 10; i++) {
//     if (i == 5) {
//         continue;
//     }
//     document.write(i + "<br />");
// }



    //    var feet = 0; var days = 0;
    //     while (feet < 31)
    //      { days++; 
    //         feet += 7;
    //          if (feet >= 31) { break; } feet -= 2; } 
    //          console.log(days); 
// i=0;
// x='';
//     do {
//         x=i+x;
        
//         i++
//     } while (i<3);
//     console.log(x)

//print the output without using vs
// var x = 5;
// var y = 2;
// console.log(x+y, "x+y")
// console.log(2*3, "2*3")

// var arr =[2,4,8,120,9,-4,1,0,100,-5]
// console.log(arr)

// arr.sort((a,b)=>a-b) //تصاعدي عن طريق ارو فكشن فقط فكشن المقارنة
// console.log(arr)

// console.log(arr.sort()) //ترتب احاد فقط الارقام 
// console.log(arr.reverse())
// console.log(arr.concat(20))//add item in final


// function myarr() {           //رتب تصاعديا الارقام لان فكشن
//     arr.sort(function (a,b) {
        
    
//     return a-b})
//     console.log(arr)
// }
// myarr()

//compare function descending
// function myarr2() {    //هنا رتب تنازي لان b-a
//     arr.sort(function (a,c) {
        
    
//     return c-a})
//     console.log(arr)
// }
// myarr2()

// var arr=["athraa", "faraj", "sagban", "bbb"]
// console.log(arr.sort()) //رتب الاحرف الفبتك 

// var x="anhygGDLObftrikJGS"
// var c=x.toUpperCase(); //حرف كبير
// s=x.toLowerCase()   //حرف صغير
// console.log(c)
// console.log(s)



//tolowercase array   uppercase array //احرف كبير وصغير اري

// var arr=["Athraa", "FARAj", "sagban", "bBb"].map(v => v.toLowerCase());
// console.log(arr);
// var arr=["Athraa", "FARAj", "sagban", "bBb"].map(v => v.toUpperCase());
// console.log(arr)

// var arr=["Athraa", "FARAj", "sagban", "bBb"].map(function (v) {
//     return v.toUpperCase();
// })
// console.log(arr)

// var arr=["Athraa", "FARAj", "sagban", "bBb"]
// var s = [];
// for (var i = 0; i < arr.length; i++) {
//     s.push(arr[i].toLowerCase());
// }
// console.log(s);

// var arr=["Athraa", "FARAj", "sagban", "bBb","ali", "zahraa", "fff"]
// console.log(arr.slice(2,5))
// console.log(arr.slice(2))
// console.log(arr.slice(2)[0])//طلع بس العنصر
// console.log(arr.slice(2,-2))
// console.log(arr.slice(2,7))
// console.log(arr.slice(-3))
// console.log(arr.concat("2,5"))// ال نفسpush

// var x="athraa"
// var z="faraj"
// var full=x+z
// console.log(x,z,"x",x+z,"x+z",full,athraa,"athraa")


//include تجيك ع العنصر الي موجود بالاري وترجع ترو او فولس
// let arr = ['a', 'b', 'c']

// arr.includes('c', 3)    // false
// arr.includes('c', 100)  // false
// console.log(arr.includes('c',2)) //true
// console.log([1, 2, 3].includes(3, -1))
// [1, 2, 3].includes(2)         // true
// [1, 2, 3].includes(4)         // false
// [1, 2, 3].includes(3, 3)      // false
// [1, 2, 3].includes(3, -1)     // true
// [1, 2, NaN].includes(NaN)     // true
// ["1", "2", "3"].includes(3)   // false

// let arr = ['a', 'b', 'c']

// arr.includes('a', -100) // true
// arr.includes('b', -100) // true
// arr.includes('c', -100) // true
// arr.includes('a', -2)   // false
// const arr=[1,4,6]
// console.log(arr.includes(7))
// console.log([4,7,6].includes(4))

// const arr=["athraa","noni","lolo"]
// function thename(n) {
//     return arr.includes(n)
    
// }
// console.log("is noni a item", thename("athraa")) //اذا كان حرف كبير 
// // او مو مثل مال مصفوفة حيطلع ارر

//includes
// let arr = ['a', 'b', 'c']
// arr.includes('c', 3)    // false
// arr.includes('c', 100) 
// console.log(arr.includes('b', -5))//الاري تطلع فقط العنصر من تقارنه وية الاندكس من 0 لحد الاندكس الي هو بي 
// //اذا كبر الان\كس عن الحد الي هو بي يطلع ارر 
// //اما اذا بالسالب فيقرا اصغر من اندكس العنصر بالسالب 
// console.log([2,4,5,7,33].includes(33,4))

//نحول المصفوفوة كلها احرف صغيرة ياله نستدعي الانكلود ولازم نستدي كله احرف صغيرة لان حولناها كله صغير
// var arr3=["ATHRAA", "FFGHH", "hgF"].map(v => v.toLowerCase().includes("ffgh"));
// console.log(arr3)
// var arr=["Athraa", "FARAj", "sagban", "bBb"].map(v => v.toLowerCase());
// console.log(arr);

// str="Athraa"
// console.log(str.toLowerCase().includes("athraa".toLowerCase()))

//map function tradition
// function multi(nam) {
//     return nam*nam;
    
// }
// const arr = [2,42,66,98,7000000,68485677838746577736645566336]
// console.log(arr.map(multi))

// function ds(yy) {
//     return yy+5
// }
// var arr5=[3,5,7,2].map(ds)
// console.log(arr5)
// //2 try
// console.log(arr5=[3,5,7,2].map((yy) => yy+5))
// var arr6=[2,4,6,7,9]
// function jj(pa) {
//     return pa/2
// }
// console.log(arr6.map(jj))

//map arrow function
// const arr=[2,3,4,577]
// const s=arr.map(v => v/2);
// console.log(s)
// console.log(arr)

// const arr=[1,4,4,25].map(Math.sqrt)//ابلعمليات الحسابيه منحتاج فكشن
// console.log(arr)

// const numbers = [65, 44, 12, 4];//خلينا الاري والماب ياله الفكشن
// const newArr = numbers.map(myFunction)

// function myFunction(num) {
//   return num * 10;
// }
// console.log(newArr)


//filter method
// function highScore(grade) {
//     return grade >= 80
// }
// const grades = [45, 100, 90, 90, 60, 55, 78, 60, 95]
// console.log("the results :", grades.filter(highScore))//الفلتر يرجع الارقام الاكبر من 80

// console.log(grades.map(highScore)) //الماب لانه شرط يكول منو ترو منو فولس true false

// const names=["Reyam", "loooolo", "Suah", "Emmmma", "Zahraa", "Athraa"]
// function LongLenght(name) {
//    return name.length > 5
// }
// console.log("the result:", names.filter(LongLenght))
// console.log("the result:", names.find(LongLenght)) //يطلع اول عنصر الي هو اصغر من 5 طوله
// console.log("the result:", names.filter(LongLenght).toString().toLowerCase())
// console.log(names.map(v => v.toLowerCase().includes("athraa")))

// var x="athraa"
// console.log(x.length)

// const arrA=['athraa','lovely','wealthy','lol','369']
// const newArr=arrA.filter(v=> v.length >6)
// console.log(newArr)
// console.log(newArr.toString())


//Find all prime numbers in an array //الاعداد الاولية هي الي تقبل القسمة ع 1 ونفسها بس
// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

//مثال2 العداد الاوليه
// function isPrime(element, index, array) {
//     let start = 2;
//     while (start <= Math.sqrt(element)) {
//       if (element % start++ < 1) {
//         return false;
//       }
//     }
//     return element > 1;
//   }
  
//   console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
//   console.log([4, 5, 8, 12].find(isPrime)); // 5
  
//check adult
// const arr7=[22,15,17,17,50,20]
// function age(adult) {
//     return adult >15
    
// }
// console.log(arr7.filter(age))


// //انكلود للعنصر بس
//Includes method /case sensetivity
// const arrFruits=["Apple","Orange","Pinapple", "GRAPES", "Peach"]
// function theFruit(n) {
//     return n.toLowerCase().includes(n) 
// }
// console.log("The true fruit is :" , theFruit("apple")) //retuen true
// console.log("The true fruit is:", theFruit("Orange".toLowerCase())) //return true
// // console.log("The false fruit is :", theFruit("Pinapple")) //return false becuase of captil letter


// // //using arrow function to return integer 
// const numbers = [2, 5, 9000, 2839, 897];
// console.log(typeof numbers)//object يكول
// // console.log(numbers)
// const newNumbers = numbers.map(v => v/2);
// const numTrunc = numbers.map(v => Math.trunc(v/2));//Returns the integral part of the a numeric expression, x, removing any fractional digits. If x is already an integer, the result is x.
// const numFloor = numbers.map(v => Math.floor(v/2));
// const numCeil = numbers.map(v => Math.ceil(v/2));
// const numB = numbers.map(v => (v/2) >> 0);
// const numRound = numbers.map(v => Math.round(v/2));
// console.log("The array with decimal part is :", newNumbers)
// console.log("The array without decimal part is :", numTrunc)
// console.log("The numbers of array rounds down :", numFloor)
// console.log("The numbers of array rounds up :", numCeil)
// console.log("The numbers of array rounds to the nearest integer :", numRound)
// console.log("The integer :", numB);

// //using tradition function 
// function arrDivide(num) {
//     return Math.trunc(num/2);
  
    
// }
// const numbers2 = [2, 5, 9000, 2839, 897]
// console.log("The new array without decimal is :", numbers2.map(arrDivide))

// //inline calling function

// console.log("The numbers of array without decimal part is" , [2, 5, 9000, 2839, 897].map(c => Math.trunc(c/2)))

// console.log("The numbers of array without decimal part is", [2, 5, 9000, 2839, 897].map(function div(num)
//  {
//     return Math.trunc(num/2)  
// }));


// let x = 5;
// let y = 2;
// let z = x % y //الباقي
// console.log(z)
// console.log(x ** 2)//اس 
// console.log(Math.pow(x,2)) //اس 
// let x = "10";
// let y = "20";
// let z = x + y; 
// console.log(z)
// console.log("x + y")
// console.log(x + y)

// let x = "10";
// let y = 20;
// let z = x + y; 

// let x = "100";
// let y = "10";
// let z = x / y;  //اعتبررها ااقسمة والضرب والطرح يرجع السترنك الارقام الى ارقام ويسوي الحاسب ماعدا ال+ ميشتعل يطلعهم كلهم سوى
// console.log(z) //هنا عتبرها ارقام

// console.log(x === y ) //هاي يخليها لما يقارن التايب التوع وذيج == يساوي


// var towSum = function (num,target) {
//     let arr=[];
//     if (nums.length === 0) {return "theempty"
        
//     }
//     for (let i = 0; i < num.length; i++) {
//         for (let j = i+1; j < nums.length; j++) {
//            if (nums[i]+nums[j] === target) {
//                arr.push(i,j)
//            }
            
//         }
//         // console.log(arr)
//         return arr;
//     };
// }
// const nums=[2,7,5,6];
// var target=9;
// console.log(towSum(nums,target))


// x=5;
// const test= x/2 << 0;
// const test= x/2 | 0;
// console.log(test)
// console.log(Math.round(5/2))


// function main() {
//     var depth = 31;
//    var feet = 0;
//    var days = 0;
//    while(feet < depth){
//        days++
//        feet+=7;

// if (feet >= depth)
// {break;}
// feet-=2;
//    }
//     console.log(days)}
//     main()

      
//   ////////////////objects////////////////////////////////////////////
//   var person = {
//       name: "athraa", age:"29", hight:"170", degree:"master"

//   }       
// //   console.log(person.name)//many ways to print the obj
// //   console.log(person['name'])
// //   console.log(person.name.length)//يطلع طول كل عنصر 
// //   console.log(person.degree.length)
//   console.log(Object.keys(person));//حتطبع البوبرتيز الكيز بشكل مصفوفة سترنك
//   console.log(Object.values(person));//تطبع مصفوفة سترنك للفاليوز
//   console.log(Object.entries(person));//يطلع كل عنصر بالاوبجكت مصمفوفة لوحدة من الكي والفاليو
//   console.log(person);//يطلع اوبجكت
//   console.log(Object.entries(person) [1][1]);//يطلع حسب الاندكس من مصفوفة الانتريز

  //object constructor 

// function person2(name2,age2) {
//     this.name2=name2;
//     this.age2=age2;
    
// }
// var a1= new person2("athraa", 28)
// console.log(a1.name2)
   

// function person(name,age) {
//     this.name=name;
//     this.age=age;
//     this.changeName=function (name) {
//         this.name=name;
//     }
// }
// var p1=new person("athraa",28)
// p1.changeName("athooooor")//اهنا نستدعي المتغير الي سوينا بي الاستدهاء دوت للذس الي يعبر عن الفكشن
// //هذا الاسم دوت ذس لاسم موجود داخل اول فكشن رئيسي اما يسوي فكشن كبل او يساوي اسم الفكشن والفكشن تكون خارجية الي بيها رتيرن تكون ة 
// console.log(p1.name)


// // using method inside the function
// function per4(num,age) {
//     this.num=num;
//     this.age=age;
//     this.changeNew=myMethod;
// }
// function myMethod() {
//     return 2016-this.age;
// }
// var p3=new per4("aaaa",28)
// console.log(p3.changeNew())

// const laptop={
//     name:"Mac",
//     screenSize: 27,
//     cpu: "dd"
// }
// console.log(laptop.name)

// const students={
//     mentor: "athraa",
//     student: ["aa", 'bb', "cc"],
//     // student: {
//     //     st1: "aa",
//     //     st2: "cc",
//     //     st3: "ee"
//     // },
//     day: "sunday"
// }
// console.log(Array.isArray(students)) //false coz its pbject not array
// console.log(typeof students)
// console.log(students.day)
// // console.log(students.student)
// console.log(students.student[0])
// console.log(students)
// console.log(Object(students))



// function contact(name, number) {
//     this.name = name;
//     this.number = number;
//     this.print = method1;
//     this.print = method2;
// }
// function method1() {
//     return this.name;
// }
// function method2() {
//     return this.number;
// }
// var a = new contact("David", 12345);
// var b = new contact("Amy", 987654321);
// console.log(a.print());
// console.log(b.print());

// console.log(new Date) //نطلع تاريخ

// function printTime() { //تطلع وقت مال هسه
//     var d = new Date();
//     var hours = d.getHours();
//     var mins = d.getMinutes();
//     var secs = d.getSeconds();
//     document.body.innerHTML = hours+":"+mins+":"+secs;
// }
// setInterval(printTime, 1000);

//'1ط
// let person = {
//     name: "Alice",
//     age: 25,
//     sayHello : function () {
//     return "Hello"
//     },
//     sayName: function () {
//         return this.name
//     },
//     //other way to write the method
//     // sayName2: method4,
//     // sayName3(){
//     //     return person.name
//     // }
// };
// // function method4() {
// //     return this.name
// // }
// console.log("This person can say : ", person.sayHello())
// console.log("This person can say thier own name : ", person.sayName())
// // console.log(person.sayName2())
// // console.log(person.sayName3())

//ط2 
//  function person(name,age) {
//     this.name=name;
//     this.age=age;
//     this.sayHello = myMethod;
//     this.sayName =myMethod2;
// }
// function myMethod() {
//     return "Hello";
// }
// function myMethod2() {
//     return this.name
// }
// var p3=new person("Alice",25)
// console.log("This person can say : ", p3.sayHello())
// console.log("This person can say thier own name : ", p3.sayName())

// function contact(name, number) {
//     this.name = name;
//     this.number = number;
//     this.print = function() {
//          return this.name + ": " + this.number;//هذي طريقة نطلع اكث من معلومة لاكثر من شخص يعني اكثر من اوبجكت
//      } //اله + ياله تشتغل
// }
// var a = new contact("David", 12345);
// var b = new contact("Amy", 987654321);
// console.log(a.print())
// console.log(b.print())

//اجمع كل عنصر من المصفوفة برقم معين
// function main() {
//     var increase = 10;
//     var prices = [98.99, 15.2, 20, 1026];
//     //your code goes here
//         for (let i = 0; i < prices.length; i++) {
//           x =  prices[i]
//           v= x+increase
//           prices[i]=v   }
//         console.log(prices) }
// main()


//array of object///////////////////////////////////////////////////
///////////////js array methods////////////////
// let users = [
//     {name:"athraa", age:29, work:true},
//     {name:"ALi", age:22, work:false},
//     {name:"Alice", age:88, work:false}
// ]
// // console.log(users[1])//يطلع مثل الاري بس يطلع اوجبكت هنا مو عنصر

// let user={name:"Mohammad", age:33};
// users.unshift(user);//ضاف اوبجكت اول شي
// // console.log(users)
// let user1={name:"Elis", age:23}
// users.push(user1)//ضاف اوبجكت للاري بالاخير
// // console.log(users)
// let user2={name:"Sara", age:44}
// users.splice(3,0,user2)//ضفنا اوبجكت بالاندكس الثالث
// // console.log(users)
// let user3={name:"Bahn", age:44}
// users.splice(4,0,user3)
// // console.log(users)

// let x= users.find(v => v.age === 44); //سوى بحث بالاري الاوبجكت الي عمره 44
// // console.log(x)
// // let x= users.find(v => v.age === 44 && v.name === "Bahn"); //هنا يطلع الشرط الثاني بس الاوبجكت ااخير

// let user6= users.filter(x => x.age === 44); //فلتر تطلع كل الاوبجكت الي تخص الشرط
// // console.log(user6)
 
// let Y = users.sort((c1,c2) => (c1.age < c2.age) ? 1 : (c1.age > c2.age) ? -1 : 0);
// console.log(Y) //ترتيب تنازلي

// console.log(users.some(x => x.age === 44)); //true or false o/p
// console.log(users.every(d => d.age > 44)); //false 
// // console.log(typeof users)
// var arr=[3,4,5,7]
// console.log(Array.isArray(users))//true
// console.log(Array.isArray(arr))//true
// // console.log(arr instanceof Array)
// let users = [
//     {name:"athraa", age:29, work:true},
//     {name:"ALi", age:22, work:false},
//     {name:"Alice", age:88, work:false}
// ]
// console.log(users.map(v => v.name))
// console.log(users.map(v => v.age))
// console.log(users.map(v => v.work))
// console.log(users.map(({ age }) => age))


////////////shecodestoo///////////////////////
// let arr=[2,3,"Athraa", 4,true,[4,6,7,8],function () {}]//مصفوفة تاخذ كل انواع الداتا بنفس الوقت ممكن فكشن مصفوفة لخ وكذا
// let x = (v) => { //متغير ياخذ فكشن لخ
//     v("Hi!");
// };
// let fun= (txt) => {
//     console.log('fun $(txt)');
// }
// console.log(x(fun))

//call stack فكشن تستدعي فكشن لخ
// let one = () => {
//     console.log("A")
//     two(); //يروح ع فكشن تو ياله يكمل البقية الطبع
// console.log("C")
// };
// let two = () => {
//     console.log("B")
// };
// one() //اول وحدة دتنفذ

//synchr  يتنفذ بالتسلسل
//Asynchr  ينفذ مو بالتسلسل ولكن حسب سرعة الطلب والكود/ينفذ بنفس الوقت اكثر من سطر يستدعي
// setTimeout(funcion, ms) //هذي asynchr تنفذ الي وراها ياله تنفذ هي حسب الوقت
// setTimeout(v => {console.log(" print after 5ms");}, 5000)
// console.log("hi");
//  let bar = () => {console.log("first");}; //من شلت الاقواس تخربط التنفيذ
//  let foo = () => {setTimeout(()=> console.log("second"),0);} //من خليت 0 حتى تنفذها اخر شي لان بس شافها هذي الفكشن كلها انت تتاخرين بعدين
//  let buz = () => {console.log("third");
//  console.log("third");
//  console.log("third");}//من شلت الاقواس اتخربط الحل
// bar()
// foo()
// buz()


// const items = [
//     {name: 'Bike',    price: 100 },
//     {name: 'TV',      price: 200 },
//     {name: 'Book',    price: 20  },
//     {name: 'Phone',   price: 1000}
// ]
// // console.log(items.filter((item) => {
// //     return item.price <= 100;
// // }));
// // console.log(items);
// // console.log(items.filter(item => item.price >= 100)); //تطلع عنصر الاوربكت كامل
// // console.log(items.filter(item => item.name === 'TV'));
// // console.log(items.map(item => {return item.name}));
// // console.log(items.map(item => item.price));
// // console.log(items.map(({name}) => name));
//  items.forEach((item) => {
//     console.log(item.name); //ترجع فقط العناصر عنصر عنصر
// });
// console.log(items.some(item => item.price <= 100));
// console.log(items.every(item => item.price <= 100));
// console.log(items.reduce((currentTotal, item) => { return item.price+currentTotal},0));

//////////array of obj Rayim
  //     let  obj1={name:"athraa", age:29, work:true};
  //     let obj2= {name:"ALi", age:22, work:false};
  //    let obj3= {name:"Alice", age:88, work:false};
  // arrayOfObj=[obj1,obj2,obj3]
  //   console.log(arrayOfObj[1])
  //   console.log(arrayOfObj[1].age)
    // console.log(arrayOfObj[obj2])//undefined

