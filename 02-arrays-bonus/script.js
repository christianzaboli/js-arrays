const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE
console.log(teachers);

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [...teachers].reverse();
console.log(reversedTeachers);
console.log("Questa é l'array con l'ordine inverto dei propri elementi");

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = teachers.filter(words => words.length >= 5);
console.log(longNames);
console.log("Questa é l'array filtrata con nomi lunghi >= 5 lettere");

// 3. Rimuovi 'Ed' dall'array teachers


// ------------------------------ V1
// teachers.splice(1, 1)
// console.log(teachers);
// console.log("Ed é stato rimosso dall'array");

// ------------------------------ V2
const EdIndex = teachers.indexOf("Ed");
if (EdIndex !== -1) {
  teachers.splice(EdIndex, 1);
}
console.log(teachers);
console.log("Ed é stato rimosso dall'array")

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.includes("Fabio");
console.log("Fabio é presente? " + isFabioPresent);


// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join();
console.log(teachersString);
console.log("Questa é l'array sotto forma di stringa separata da virgole");
