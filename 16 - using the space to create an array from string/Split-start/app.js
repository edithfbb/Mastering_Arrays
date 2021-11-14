
let str = "Natural language has no dominant paradigm, and neither does JavaScript. Developers can select from a grab bag of approaches--procedural, functional, and object oriented--and blend them as appropriate.";

// Aqui vamos criar um array impondo o espaço de cada palavra como o divisor do array, sem incluir o espaço.

let wordArray = str.split(" ");

//tem uma outra forma, posso limitar o tamanho do meu array, quandos arrays eu quero que seja criado antes de parar?

let wordArray2 = str.split(" ", 10); //vai criar só 10 arrays
let wordArray3 = str.split(","); //aqui a vírgula será o demarcador
let regexArray = str.split(/[,.| --]/);
