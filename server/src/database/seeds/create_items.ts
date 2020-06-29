import Knex from 'knex';

export async function seed(knex: Knex){
 await  knex('items').insert([
    {title:'Masculino', image:'lampadas.svg'},
    {title:'Feminino', image:'baterias.svg'},
    {title:'Infantil', image:'papeis-papelao.svg'},
    {title:'Esportes', image:'eletronicos.svg'},
    {title:'Acessórios', image:'organicos.svg'},
    
  ]);
}