const mongoose = require('mongoose')



const partSchema = new mongoose.Schema(
    {
        id:{
            type:Number,
            required:true
        },
        name: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        productiondate: {
            type: String,
            required: true
        },
        lifespan:{
            type:String,
            required:false,

        },
        count:{
            type:Number,
            required:true,

        },
        buy:{
            type:Number,
            default:0
        }
    },
    {
        timestamps: true
    },
);


// noteSchema.plugin(AutoIncrement, {
//     inc_field: 'rank',
//     id: 'rank_counter',
//     start_seq: 500
// })

module.exports = mongoose.model('Part', partSchema)