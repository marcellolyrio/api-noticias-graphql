import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    mesage:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    active:{
        type: Boolean,
        required: true,
    },
});

export default mongoose.model('News', Schema);