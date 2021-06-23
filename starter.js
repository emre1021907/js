/*
var mystr = 'i am a "double quoted "string inside "double quotes'
console.log(mystr)

const pi = 3.14
console.log(pi)
*/

/*
code output
\'   single quote
\"   double quote
\\   backslash
\n   newline
\r   carriage return
\t   tab
\b   backspace

*/ 

//var mystring = "firstline \n Tim \\ Secondline \n Thirdline"
//console.log(mystring)

//var ourname = "emre"
//var output = "hello your name is " + ourname + " isn't it?"
//console.log(output)

//var mystrr = "Rello"
//var lastchar = mystrr[mystrr.length - 1 ]
//console.log(lastchar)


/*function wordBlanks(mynoun, myadc, name, user) {
    var result = "";
    result += "The " + mynoun + " is " +  myadc + " most " + name + " " +  user + " finish ";
    return result;

}

console.log(wordBlanks("emre","kose", "nasılsın", "sen"))  */


/*
var myarray = [24,52,55]
var dg = myarray[0] = 12
console.log(dg)

var myarr = [[0,5,2],[4,22,4],[44,21,4]]

myarr.push([231,4,5]) //push fonksiyonu listenin sonuna ekler.
myarr.pop() // sonundaki elemanı siler
myarr.shift() // ilk elemanı siler 
myarr.unshift("emre") // listenin başına eleman ekler.
console.log(myarr) 

*/


/*
function reusablename() {
    console.log("emre kose");
    oppsglobal = 5; // başına var konulmazsa global variable olarak tanımlanır,
    console.log(oppsglobal)
}

reusablename();
console.log(oppsglobal)
*/


/*
var outerwear = "Tshirt"

function myOutfit() {
    var outerwear = "sweater";

    return outerwear

}

console.log(myOutfit())
console.log(outerwear)
*/


/*

function nextinline(arr,item) {
    arr.push(item);
    return item;

}

var testArr = [1,2,3,4,5];

console.log("before" + JSON.stringify(testArr))
console.log(nextinline(testArr,6))
console.log("after " + JSON.stringify(testArr))

*/

/*

function testequal(val){
    if (val == 12 ) {  // val === '12' olsaydı eşitliğin type'ına bakarak return yapardı. Biri string olan 12 diğeri integer olan 12 olduğu için eşit değil ve false döndürür.
        return "equal";
    }
    return "not equal";
}

console.log(testequal(10))



function testequal(val){
    if (val === 12 ) {  // val === '12' olsaydı eşitliğin type'ına bakarak return yapardı. Biri string olan 12 diğeri integer olan 12 olduğu için eşit değil ve false döndürür.
        return "equal";
    }
    return "not equal";
}

console.log(testequal('12'))

*/

/*
function testequal(val){
    if (val !== 12 ) {  //
        return "not equal";
    }
    return "Equal";
}

console.log(testequal('12'))


function testSize(num) {
if (num < 5 ) {
    return "tiny"
}
else if (num < 10 ) {
    return "small"
}

else if (num < 15 ){
    return "medium"
}

else if (num < 20) {
    return "large"
} 
else {
    return "Huge"
}
}

console.log(testSize(19))


// ve işareti = &&
// ya da işarti = ||

*/

/*
function caseinswitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "another"
            break;
        default:
            answer = "default is the same with else statement"
    }
    return answer;
}
console.log(caseinswitch(4))

*/

/*
var count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":      
            count--;
            break;   

    }

    var holdbet = "Hold"
    if (count > 0) {
        holdbet = "Bet"
    }
    return count + " " + holdbet;
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc('A'))

*/

/*
var ourdog = {
    "name" : "camper",
    "legs" : 4,
    "tails": 1,
    "friends": ["everything"]
};

ourdog.name = "not camper" //changing key's value
ourdog['nerede']= "ankara" // adding new key value to the dict
var namee = ourdog.name
var legss = ourdog["legs"]

console.log(namee)
console.log(legss)
console.log(ourdog.nerede)
delete ourdog.tails //deleting object from dict
*/

/*
var mystorage = {
    "car" : {
        "inside": {
            "glove box" : "maps",
            "passenger seat" : "crumbs"
        },
        "outside": {
        "trunk" : "jack"
        }
    }
};

var gloveboxcontents = mystorage.car.inside["glove box"]; // dict elemanlarına (.) koyarak ulaşabiliyoruz ama keys'te boşluk varsa kareli parantez içine almamız lazım
console.log(gloveboxcontents)

*/


/*
var myplants = [
    {
        type: "flowers",
        list : [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type : "trees",
        list : [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondtree = myplants[1].list[1]
console.log(secondtree)
*/

/*
var myarray = [];

var i = 0;
while (i < 5) {
    myarray.push(i);
    i++;
}
*/

/*
console.log(myarray)

var ourarray = [];

for (var i=0; i < 5; i++) {
    ourarray.push(i);
}
console.log(ourarray)
*/


/*
var ourarr = [9,10,11,12];
var ourtotal = 0;

for (var i = 0; i < ourarr.length; i++) {
    ourtotal += ourarr[i];
}

console.log(ourtotal)
*/

/*
function multiplyall(arr) {
    var product = 1

    for (var i=0; i< arr.length; i++){
        for (var j=0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product
}

var product = multiplyall([[1,2],[3,4],[5,6,7]])
console.log(product)
*/


/*
function randomfraction() {
    return Math.random(1,10);
}

console.log(randomfraction())

*/


/*
function convertınteger(str) { 
    return parseInt(str); // parseInt type'ını integer yapar.
}
console.log("55")
*/


/*
function converttoınteger(str) {
    return parseInt(str,2) // binary'i integer'a çevirir.
}
converttoınteger("10011");
console.log(converttoınteger())

*/


/*
// condition ? statement-if-true : statement-if-false;
function checkequal(a,b) {
    return a===b ? true : false;
}

console.log(checkequal(1,2))
*/


/*
function checksign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checksign(0))
*/
/*
function checkscope() {
    "use strict";
    let i = "function scope"; //let sadece bulunduğu süslü parantezler içinde tanımlı olur.
    if (true) {
        let i = "block scope";
        console.log("block scope i is ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
        
}

checkscope();
*/
// const değişkenine sadece bir kez atama yapılabilir. Bir kere tanımlandıktan sonra tekrar değiştirilemez.

/*
function freezeobj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

Object.freeze(MATH_CONSTANTS);

try {
    MATH_CONSTANTS.PI=99;
}catch (ex) {
    console.log(ex);
}
return MATH_CONSTANTS.PI;
}
const PI = freezeobj();
*/
/*
const myconcat = (arr1,arr2) => arr1.concat(arr2); // => ile fonksyon oluşturulabilir.
console.log(myconcat([1,2],[3,4,5]))

*/
/*
const sum = (function() {
    return function sum(...args) {
        return args.reduce((a,b) => a+b,0);
    };
})();
console.log(sum(1,23,4,5,5))
*/


/*
const arr1 = ['jan','feb','mar','apr','may'];
let arr2;
(function(){
    arr2 = [...arr1]; // [...arr1] arr2'yw kopyalar arr1'i değiştirdiğimizde arr2'nin içeriği değişmez 
    arr1[0]='potato'
})();
console.log(arr2)
*/


/*
var voxel = {x: 3.6, y:5.4, z:5.22};

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

const {x:a,y:b,z:c} = voxel; // a =3.6 , b=5.4, z=5.22

const avg_temp = {
    today : 77.5,
    tomorrow : 79
};

function gettemp(avgtemp){
    "use strict";
    const {tomorrow : tempoftomorrow} = avg_temp;
    return tempoftomorrow;
}

console.log(gettemp(avg_temp))


*/


const [z,x,,y] = [1,2,3,4,5,6];
console.log(z,x,y)

let a=8 , b=6;
(() => {
    "use strict";
    [a,b] = [b,a]
})();
console.log(a);
console.log(b);