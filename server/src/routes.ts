import express from 'express';
import multer from 'multer'
import multerConfig from './config/multer';
import PointsControllers from './controller/PointsController'
import UserControllers from './controller/UserController'
import ProdutoControllers from './controller/ProdutoController'
import ItemsControllers from './controller/ItemsController'
import {celebrate,  Joi} from 'celebrate' 

 
const routes = express.Router();

const upload = multer(multerConfig);

const userController = new UserControllers();
const pointeController = new PointsControllers();


const itemsController = new ItemsControllers();

routes.get('/items', itemsController.index)

 //Validação dos campos

routes.post('/points',upload.single('image')
,celebrate({
 body:Joi.object().keys({
   name:Joi.string().required().max(30),
   email:Joi.string().required().lowercase(), 
   whatsapp:Joi.number().required(),
   departament:Joi.string().required().max(30),
   salesmn:Joi.string().required().max(30),
   longitude:Joi.number().required(),
   latitude:Joi.number().required(),
   city:Joi.string().required(),
    uf:Joi.string().max(2),
   items:Joi.string().required()
 })
  },{
    abortEarly:false
  })


, pointeController.create)

routes.get('/points', pointeController.index)

routes.get('/points/:id', pointeController.show)

routes.get('/points/:id', pointeController.show)


routes.post('/user', userController.create)

routes.post('/auth/authenticate', userController.create)

export default routes;