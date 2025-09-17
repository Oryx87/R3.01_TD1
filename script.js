//Ex 1
console.log("Ex 1 :");
let celsius = 20;
let fahrenheit = celsius * 9/5 + 32;
console.log("Celcius : " + celsius);
console.log("Fahrenheit : " + fahrenheit + "\n");

//Ex 2
console.log("\nEx 2 :");
let largeur = 5;
let longueur = 10;
let aire = longueur * largeur;
console.log(aire);

//Ex 3
console.log("\nEx 3 :");
let nom = "Baudin--Marie";
let prenom = "Mylan";
let chaine = prenom + " " + nom;
console.log(chaine);

//Ex 4
console.log("\nEx 4 :");
let HT = 100;
const TVA = 1.2;
let TTC = HT * TVA;
console.log(TTC);

//Ex 5
console.log("\nEx 5 :");
console.log(((4 >= 6) || ("herbe" != "verte")) && !(((12 * 2) == 144) && true))

//Ex 6
console.log("\nEx 6 :");
let poids = 65;
let taille = 1.8;
let IMC = poids / (taille*taille);
console.log(IMC.toFixed(2));

//Ex 7
console.log("\nEx 7 :");
const min_commande = 10;
let total_montant = 100;
if (total_montant > min_commande){
    console.log("Livraison gratuite !");
} else {
    console.log("Frais de livraison : X euros");
}

//Ex 8
console.log("\nEx 8 :");
let nbBinaire = "1101";
let nb = parseInt(nbBinaire,2)
console.log(nbBinaire + " ---> " + nb)