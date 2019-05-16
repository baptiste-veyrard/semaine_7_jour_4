const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 :");

entrepreneurs.forEach(entrepreneurs_content => {
  if(entrepreneurs_content.year <= 1980 && entrepreneurs_content.year >= 1969){
    console.log(`${entrepreneurs_content.first} ${entrepreneurs_content.last} est née en ${entrepreneurs_content.year}`);
  }
});

console.log("Sors une array qui contient le prénom et le nom des entrepreneurs");
arrayName = [];
entrepreneurs.forEach(entrepreneurs_content => {
  arrayIndiv = [];
  arrayIndiv.push(entrepreneurs_content.first);
  arrayIndiv.push(entrepreneurs_content.last);
  arrayName.push(arrayIndiv);
})
console.log(arrayName);

console.log("Quel âge aurait chaque inventeur aujourd'hui ?");

entrepreneurs.forEach(entrepreneurs_content => {
  console.log(`${entrepreneurs_content.first} ${entrepreneurs_content.last} aurait aujourd'hui ${2019 - entrepreneurs_content.year} ans.`);
})



console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille : ");
arrayLastName = []
entrepreneurs.forEach(entrepreneurs_content => {
  arrayLastName.push(entrepreneurs_content.last)
})
console.log(arrayLastName.sort());

















