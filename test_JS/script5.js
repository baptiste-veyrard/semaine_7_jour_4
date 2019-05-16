const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")

arrayRented = [];

books.forEach(content => {
  arrayRented.push(content.rented)
});

if(arrayRented.includes(0)) {
  console.log("Les livres n'ont pas tous été empruntés au moins une fois.")
}
else{
  console.log("Oui, les livres ont tous été empruntés au moins une fois.")
};

console.log("Quel est livre le plus emprunté ?")
maxValue = Math.max.apply(Math, books.map(function(o) { return o.rented; }));
console.log(books.find(function(o){ return o.rented === maxValue; }));


console.log("Trouve le livre avec l'ID: 873495 ;")
console.log(books.find(function(o){ return o.id === 873495; }));

console.log("Supprime le livre avec l'ID: 133712")
valueToDelete = books.find(function(o){return o.id === 133712; })
delete books[books.indexOf(valueToDelete)];
  console.log(`Le livre avec l'ID: 133712 a bien été supprimé, voici le nouvel array books :`);
  console.log(books);


console.log("Trie les livres par ordre alphabétique :")
let arrTitle = [];
let booksInOrder = [];
books.forEach(content => {
  arrTitle.push(content.title)
});
arrTitle.sort().forEach(title => {  
  books.forEach (book => {
    if(book.title === title ){
      booksInOrder.push(book);
    }
  })
});
console.log(booksInOrder);






