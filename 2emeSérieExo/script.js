//2eme série d'exos

//Ex1

const personne = {
    prenom: 'Mylan',
    nom: 'BM',
    age: 18,
    ville: 'Caen'
}
console.log('Exo 1 :')
console.log(personne.prenom);
console.log(personne.nom);
console.log(personne.age);
console.log(personne.ville + '\n');

//Ex2
const pers1 =  {prenom: "John", nom: "Doe", age: 25, ville: "Rouen"};
const pers2 =  {prenom: "Jane", nom: "Doe", age: 30, ville: "Paris"};
const pers3 = {prenom: "Jim", nom: "Doe", age: 35, ville: "Caen"};
const tab = [pers1, pers2, pers3];
console.log('Exo 2 :');
console.log(tab);
console.table(tab);
console.log();

//Ex3

const pers4 = {prenom: " Marc", nom: "Doe", age: 32, ville: "Marseille"};
tab.push(pers4);
console.log('Exo 3 :');
console.log(tab);
console.table(tab);
console.log();

//Ex4

tab[0].prenom = "Jean";
tab.splice(2,1);
console.log('Exo 4 :');
console.log(tab);
console.table(tab);
console.log('\n');

//Ex5

const tabNb = [1,2,3,4,5,6,7,8,9,10];
console.log('Exo 5 :');
console.log(tabNb[0]);
console.log(tabNb[tabNb.length-1]);
console.log(tabNb.length);
console.log('\n');

//Ex6

const tabDixEnDix = [10,20,30,40,50,60,70,80,90,100];
console.log('Exo 6 :');
console.table(tabDixEnDix);
tabDixEnDix.reverse();
console.table(tabDixEnDix);
console.log('\n');

//Ex7

const numbers = [2,5,1,9,0,3,7,4,6,8];
console.log('Exo 7 :');
console.table(numbers);
numbers.sort();
console.table(numbers);
console.log('\n');

//Ex 8

console.log('Exo 8 :');
numbers.push(11);
console.log(numbers);
numbers.unshift(0);
console.log(numbers)
numbers.pop(numbers.length-1);
console.log(numbers);
console.log('\n');
