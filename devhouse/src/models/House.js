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
},{
    toJSON:{
        virtuals: true
    }
});

HouseSchema.virtual('upfile_url').get(function(){
    return `http://localhost:3333/files/${this.upfile}`
})
export default model('House', HouseSchema);