import { Schema } from "mongoose";

export const BookSchema = new Schema({
    id: Number,
    isbn: Number,
    title: {type: String, required: true},
    description: String,
    category: Number,
    year_published: String,
    publishin_house_id: Number,
    createdAt:{
        type: Date,
        default: Date.now
    }
});