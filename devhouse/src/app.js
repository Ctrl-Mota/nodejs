import express from "express";
import path from "path";
import cors from "cors"
import mongoose from "mongoose"
import routes from "./routes";

class App{

    constructor(){
        this.server = express();
        mongoose.connect('mongodb+srv://devhouse:motorola123@devhouse.kheh3.mongodb.net/devhouse?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(cors({}));
        this.server.use('/files', 
            express.static(path.resolve(__dirname, '..', 'uploads'))
        );
        
        this.server.use(express.json());
    }
    routes(){
        this.server.use(routes);
    }
}
export default new App().server;