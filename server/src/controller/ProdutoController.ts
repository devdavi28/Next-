import { Request, Response } from 'express';
import Knex from '../database/connection'

class ProdutoController {

  



  async index(request: Request, response: Response) {
    const produto = await Knex('produto').select('*');

    const serializedProduto = produto.map(produto => {
      return {
        id: produto.id,
        title: produto.title,
        image: produto.image,
        value:produto.value,
        descriptio:produto.value,
      };
    });
    return response.json(serializedProduto);
  }
  
 
  async create(request: Request, response: Response) {
    const {
      title,
      description,
      value,
      image
    } = request.body;

   const produto = {
      image,
      title,
      description,
      value,
    
    }
    await Knex('produto').insert(produto);

    

    return response.json(produto);
  }
}
export default ProdutoController;