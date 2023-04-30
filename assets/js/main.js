/**var age = prompt();
age = parseInt(age)
switch (age) {
    case 25:
        console.log("you are 25 years old")
        break;
        case 28:
        console.log("you are 28 years old")
        break;
        case 15:
        console.log("you are 15 years old")
        break;

    default:
        console.log("you are note 25, 28, 15 years")
        break;
}*/
/*for (let i = 1; i < 11; i++){
    console.log("je suis le numero" + i);
};*/

/*let index = 0;
while (index < 21) {
    console.log("je suis le numero :")+ index;
}*/

/*for (let i = 0; i < 11; i++) {
    console.log("5 x " + i + " = " + 5 * i);
}*/

/*let i = 0

while (i < 11) {
    console.log("6 * i = " + 6 * 1);
}*/

/*let say_thanks = () => {
    console.log("merci");
}
say_thanks();*/


/*et table_m = () => {
    for ( let i = 0; i < 11; i++) {
        console.log(`5 * ${i} = ${5*i}`);
    };
};
table_m()*/

/*function Table() {
     for ( let i = 0; i < 11; i++) {
        console.log(`5 * ${i} = ${5*i}`);
    };
}
Table()*/

/*let Table = (N, L) => {
   // console.log("nombre : " + N);
    //console.log("limite : " + L);
    if (!(L && typeof (L) === "number")) {
        let L = 10
    }
    if (N && typeof(N)=== "number") {
         for ( let i = 0; i < L; i++) {
        console.log(`${N} * ${i} = ${N*i}`);
    };
    }else {
        console.log("the params must be a number");
    }
   
}*/

/*let carré = (N) => {
    if (N && typeof (N) === "number") {
      return N *N;
    }else{
        return null;
    }
}*/

//let car = new Object()
/*let car = {
_id : 123312,
name : "Bmw",
year : 2015,
color : "red",

}

let car2 = {...car, _id: 1222, name: "Audi"}*/

/*let person = {
    firstname: "toto",
    lastname: "sam",
    username : "fly",
    email: "fly@fly.com",
    phone: "0650140215",
    address: {
        street: "10 rue de la paix",
        code: 76000,
        country: "china"
    },
    fullname: function () {
       return this.firstname + " " + this.lastname
    },
    hello: function () {
        return "hello, welcome " + this.fullname()
    }
};

let person2 = {...person, firstname: "titi"};

let saw_helle = ({firstname}) => {
    console.log(`hello ${firstname}`);
};

let newPerson = person*/

//let html = document.getElementById("html");

//let section = document.getElementsByClassName("section");
/*let input = document.getElementsByTagName("input");

let body = document.getElementsByTagName("body");

let section = document.querySelector("#css");*/

//let formLine = document.querySelector(".form-line");

/*let article = document.querySelectorAll("article")[0];
let body = document.querySelector("body");
article.innerHTML = "<h2>fly</h2>";

body.style.background = "black";
body.style.color = "white";*/