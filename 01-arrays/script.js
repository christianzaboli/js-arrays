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

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3]
console.log(fourthTeacher + " -- é il quarto insegnante nell'array");

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers.splice(4, 1, 'Patrick')
console.log(teachers);
console.log("Patrick -- ha sostituito l'insegnante del quinto indice nell'array, cioé Carlo");

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log(teachers);
console.log(lastTeacher + " -- é l'ultimo/a insegnante dell'array ed é stato rimosso");


// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log(teachers);
console.log(firstTeacher + " -- é il primo/a insengante dell'array ed é stato rimosso");

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push('Vanessa')
console.log(teachers);
console.log("Vanessa -- é stata aggiunta alla fine dell'array");

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift('Sarah')
console.log(teachers);
console.log("Sarah -- é stata aggiunta all'inizio dell'array");

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf('Lewis');
console.log(lewisIndex + " -- é l'indice dell'insegnante Lewis nell'array");

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = teachers.length === 0;
console.log("Alla domanda: l'array é vuoto? la risposta é: " + isTeachersEmpty);

// ---------------- 9. Aggiuntivo per testare l'opposto dell'8 quesisto
const teachers1 = [];
console.log(teachers1);

const isTeachersEmpty1 = teachers.length === 0
console.log("Alla domanda: l'array é vuoto? la risposta é: " + isTeachersEmpty1);
