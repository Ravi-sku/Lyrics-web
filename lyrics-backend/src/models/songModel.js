const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    
    title:{
        type:String,
        required:true,
        trim:true
    },

    artist:{
        type:String,
        required:true,
        trim:true
    },

    slug:{
        type:String,
        required:true,
        unique:true
    },

    lyrics:{
        type:String,
        required:true
    },

    album:{
        type:String,
        default:'Single'
    },

    language:{
        type:String,
        default:'Hindi'
    },

    views:{
        type:Number,
        default:0
    }

},{timestamps:true})

module.exports = mongoose.model('Song',songSchema)