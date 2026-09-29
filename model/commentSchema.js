const mongoose = require('mongoose');


const commentSchema = mongoose.Schema(
    {
        post : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Posts',
            require : true
        },
        author : {
            type : String,
            require : true,
            trim : true
        },
        text : {
            type : String,
            require : true,
            trim : true,
            maxlength : 100
        }
    },
    {timestamps : true}
);


module.exports = mongoose.model("Comments", commentSchema);