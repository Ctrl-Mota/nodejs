import { Router } from 'express';
import multer from "multer";
import uploadConfig from "./config/upload";

import SessionController from './controllers/SessionController';
import HouseController from './controllers/HouseController';
import DashboardController from './controllers/DashboardController';
import ReserveController from './controllers/ReserveController';


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
///Deletar casas
routes.delete('/houses', HouseController.destroy);

//DashBoard
routes.get('/dashboard', DashboardController.show);

//Reserve
routes.post('/houses/:house_id/reserve', ReserveController.store);

export default routes;