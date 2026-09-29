const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            require : true,
            trim : true,
            minlength : 5,
            maxlength : 100
        },
        content : {
            type: String,
            require : true,
            trim : true
        },
        author : {
            type : String,
            require : true,
            trim : true
        },
        likes : [{
            type : String,
            trim : true
        }]
    },
    {timestamps : true}
)


module.exports = mongoose.model("Posts",postSchema);