// const name="fifo";
// // ::::creation d'une variable string::::
// console.log(name);
// // ::::le chek dans la console du navigateur(pour savoir si ca fonctionne):::::

// let html='<div>${fifo}</div>'
// // ::::concaténation d'une variable.le dollard accolade pour afficher variable dans html et injecter la div dans le dom::::

// document.getelementById("vacance")
// .innerhtml +=name;
// :::dans la fonction getElementById on utilise l'Id de notre balise html,la fonction onnerhtml permet d'injecter le littreal template dans le dom::::
// let object = {
//     bmw:'allemagne',
//     peugeot:'france',
//     tata:'inde',
//     levus:'japon'
// };

// console.log(object.bmw);

// let html =`<div>${object.bmw}</div>` 
// document.getElementById('vacance').innerHTML += html;

// let array = [1,2,3,4,5,6,7,8,9,10]

// for (let index of array){let html =`<div>${[index]}</div>`

// document.getElementById (`vacance`).innerHTML += html ;
// }

// const starWars = {
//     titre: "faucon millenium",
//     description: "vaisseau d'attaque et furtif",
//     commentaire: "vaisseau utilisé pour échapper à l'empire",
//     atout: "rapide"
// };

// let a =`<div>${starWars.titre}</div>` ;
// document.getElementById("vacance").innerHTML += a;

// let b =`<div>${starWars.description}</div>` ;
// document.getElementById("vacance").innerHTML += b;

// let c=`<div>${starWars.cpmmentaire}</div>` ;
// document.getElementById("vacance").innerHTML += c;

// let d =`<div>${starWars.atout}</div>` ;
// document.getElementById("vacance").innerHTML += d;

// let mytabl ="vingt cinq";
// console.log(mytabl );

// mytabl ="trente cinq cinq";
// console.log(array3 );

// array3=[1,2,3,4,5,6,7,8,9,10];
// console.table(array3);

// array3.push(8);

// console.table(array3);

// array3.push(8,11,12,13,14);

// console.table(array3);

// let array3 = [];
// console.log(array3);

// array3.push('broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato');

// array3.pop();

// array3.shift();

// console.table(array3);
// alert();

// let htmlDom =`<article><p>${array3}<array3.push(1,2,3,4,5);</article>`;

// document.getElementById("vacance").innerHTML +=htmlDom;

// let carré ="geometrie";

// let cercle = carré.split("");
// console.log(cercle);

// let triangle = cercle.reverse("");
// console.log(triangle);

// let rectangle = triangle.join("");
// console.log(rectangle);


// function mathématique() 
//         { let name = prompt ("entrez votre nom");
//         console.log ("my name is hanane") + name+"!";
//         }
// mathématique();


// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

// console.log(plants.pop());

// console.log(plants);
// plants.pop();

// console.log(plants);


// let comptable = 0; 
// let increment = document.getElementById ('increment'); 
// let decrement = document.getElementById ('decrement'); 
// let hacheOne = document.querySelector('h1');  
// increment.addEventListener('click', function () {hacheOne.textContent = ++ comptable; 
// }); 
// decrement.addEventListener('click', function () {hacheOne.textContent = comptable --; 
// });
function recupererValeur() {
  
        let valeur = document.getElementById('maValeur').value;
        
        alert('La valeur du formulaire est : ' + valeur);
        
      }