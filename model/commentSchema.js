const mongoose = require('mongoose');


const commentSchema = mongoose.Schema(
    {
        post : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Posts',
            required : true
        },
        author : {
            type : String,
            required : true,
            trim : true
        },
        text : {
            type : String,
            required : true,
            trim : true,
            maxlength : 100
        }
    },
    {timestamps : true}
);


module.exports = mongoose.model("Comments", commentSchema);