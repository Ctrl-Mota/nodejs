import House from "../models/House";
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
    async update(request , response){

        const { filename } = request.file;
        const {house_id} = request.params;
        const { description, price, location, status} = request.body;
        const { user_id } = request.headers;
        const houses = await House.updateOne({_id: house_id}, {
            user: user_id,
            upfile: filename,
            description,
            price,
            location,
            status
        });
        return response
    }

}

export default new HouseController();