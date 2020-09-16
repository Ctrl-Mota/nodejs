import {Schema , model} from 'mongoose';

const HouseSchema = new Schema({
    upfile: String,
    description: String,
    price: Number,
    location: String,
    status: Boolean,
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

});

export default model('House', HouseSchema);