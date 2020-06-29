import { Request, Response } from 'express';
import Knex from '../database/connection'

class ProdutoController {

  
  //buscar um ponto
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const produto = await Knex('produto').where('id', id).first();


    if (!produto) {
      return response.status(400).json({ message: 'Point not foun.'});
    }
    const serializedPoints ={
          ...produto,
          image_url: `http://192.168.0.104:3333/uploads/${produto.image}`,

      };
   
      
    //Retorna os Items Relacionados com o ID



    return response.json({ produto: serializedPoints });
  }





  async index(request: Request, response: Response) {
    const produto = await Knex('produto').select('*');

    const serializedProduto = produto.map(produto => {
      return {
        id: produto.id,
        title: produto.title,
        image: produto.image,
        value:produto.value,
        description:produto.description,
      };
    });
    return response.json(serializedProduto);
  }
  
 
  async create(request: Request, response: Response) {
    const {
      title,
      description,
      value,
      image,
      name,
      departament, 
      salesmn,

    } = request.body;

   const produto = {
    title,
    description,
    value,
    image,
    name,
    departament, 
    salesmn,
    
    }
    await Knex('produto').insert(produto);

    

    return response.json(produto);
  }
}
export default ProdutoController;