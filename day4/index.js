const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    {first: 'Galileo', last: 'Galiley', year: 1579, passed: 1655},
    {first: 'Andrey', last: 'Chystiakov', year: 1999, passed: 2070},
    {first: 'Sergey', last: 'Gryaznyukov', year: 1975, passed: 2050},
];
const people =['Aaron, Hank','Abagnale, Frank','Abbey, Edward',
'Abel, Reuben','Abelson, Hal',
'Abourezk, James','Abrams, Creighton',
'Ace, Jane','Acton, John (Lord Acton)','Adams, Abigail',
'Adams, Douglas','Addison, Joseph',
'Adorno, Theodor','Adler, Alfred','Aeschylus',
'Aesop','Affleck, Ben','Agena, Keiko','Agnew, Spiro',
'Ahbez, Eden','Ahern, Bertie']

//Array.prototype.filter()
//1.Filter the list of inventors for those who webe born in the 1500's

const fifteens = inventors.filter((inventor)=> {
   if (inventor.year >=1500 && inventor.year<1600) {
       return true;
   }
});

//Array.prototype.map
//2.give us and array of the inventory first and last names

const names = inventors.map((inventor)=> {
    return `${inventor.first} ${inventor.last}`
})
//Array.prototype.sort() - сортирует
//3.Sort the inventors by the birthdate, oldest to youngest

const olds = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
//Array.prototype.reduce() - сводит к одному значению
//4.How many years did all the inventors live?
const total = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year)
}, 0)

//5.Sort the inventors by years lived

const longer = inventors.sort((a,b)=> {
    let yearsA = a.passed - a.year;
    let yearsB = b.passed- b.year;
    return yearsA > yearsB ? 1 : -1
})
console.log(longer);
//6. create a list of Boulevards in Paris that contain 'de' in the name
//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
