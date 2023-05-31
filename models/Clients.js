const mongoose = require('mongoose')

const clientSchema = mongoose.Schema(
    {
    username:{
        type:String,
        required:true
    },

    orders:[{
        type:String,
        default:null,
    }],
    active:{
        type:Boolean,
        default:true,
    },
    location:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },

},
{
    timestamps: true
},
)

module.exports = mongoose.model('Client',clientSchema)

