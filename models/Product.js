import { Schema, model } from "mongoose";

const productsSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    photos:[
        {
            type: String,
            required: true,
        },
    ],
    stock:{
        type: Number,
        required: true,
        default: 0,
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },

});

export default model("Product", productsSchema);