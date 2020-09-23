import House from "../models/House";
import User from "../models/User";

import { request, response } from "express";

class HouseController{
    
    async index (req,res){

        const { status } = req.query
        const house = await House.find({ status });
        return res.json(house)
    }
    //criar
    async store(req, res){

        const { filename } = req.file;
        const { description, price, location, status} = req.body;
        const { user_id } = req.headers;

        const house = await House.create({
            user: user_id,
            upfile: filename,
            description,
            price,
            location,
            status
        });
        return res.json(house)
    }
    async update(request, res){

        const { filename } = request.file;
        const { house_id } = request.params;
        const { description, price, location, status} = request.body;
        const { user_id } = request.headers;

        const user = await User.findById(user_id);
        const houses = await House.findById(house_id);

        if (String(user._id) !== String(houses.user)){
            return res.status(401).json({error: 'Não autorizado.'});
        }
       await House.updateOne({_id: house_id}, {
            user: user_id,
            upfile: filename,
            description,
            price,
            location,
            status
        });
        return res.send();
    }
    async destroy(req, res){
        const {house_id} = req.body;
        const {user_id} = req.headers;
        
        if (String(user._id) !== String(houses.user)){
            return res.status(401).json({error: 'Não autorizado.'});
        }
        await House.findByIdAndDelete({_id: house_id});
        return res.json({message: "Excluida com sucesso!"});

    }
}

export default new HouseController();