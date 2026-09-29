const Comments = require('../model/commentSchema');


exports.createComments = async (req, res) => {
    try {
        const {post,author,text} = req.body;

        const response = await Comments.create({post,author, text});

        res.status(200).json({
            success : true,
            data : response,
            mesage : "Comments Added Successfully"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false,
            error : error.message,
            message : "Internal Server Error"
        })
    }
}