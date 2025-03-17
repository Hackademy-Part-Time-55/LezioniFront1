import { pi, sum } from './math.js'
import Utente from './User.js';

let result = sum(5, 3);
console.log(result);

let eric = new Utente('Eric', 'Cartman', 10);
console.log(eric.getFirstname());

console.log(pi);
