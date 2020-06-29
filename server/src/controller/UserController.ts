import { Request, Response } from 'express';
import Knex from '../database/connection'
const generateUniqueId = require('../utils/genereteUniqueId');

class AuthUserController {
 
  //Listar Usuario
  async index(request: Request, response: Response) {
    const results = await Knex('authUser')
     
    return response.json(results)


  }

  async create(request: Request, response: Response) {
    
    const{name, surname, email, password}= request.body;
    const id = generateUniqueId(); 

    await Knex('authUser').insert({
      name, surname, email, password
    });

    return response.status(201).send()

    
  }
}
export default AuthUserController;




