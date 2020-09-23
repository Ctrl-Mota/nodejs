import { Router } from 'express';
import multer from "multer";
import uploadConfig from "./config/upload";

import SessionController from './controllers/SessionController';
import HouseController from './controllers/HouseController';

const routes = new Router();
const upload = multer(uploadConfig);
//Criar sessão
routes.post('/sessions', SessionController.store);
//Listar casas
routes.get('/houses', HouseController.index);
//criar Casa com foto
routes.post('/houses', upload.single('upfile'), HouseController.store);
//Atualizar casas
routes.put('/houses/:house_id', upload.single('upfile'), HouseController.update)


export default routes;