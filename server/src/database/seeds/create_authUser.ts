import Knex from 'knex';

export async function seed(knex: Knex){
 await  knex('authUser').insert([
    {name:'David', surname:'Silva', email:'sdavi28@hotmail', password:'123456'},
     
  ]);
}