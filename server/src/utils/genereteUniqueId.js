
const crypto = require('crypto');

module.exports= function generateUniqueId(){
  return crypto.randomBytes(3).toString('hex'); // criando um id aleatório criptografado
  
} 