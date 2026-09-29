const Comments = require('../model/commentSchema');


exports.createComments = async (req, res) => {
    try {
        const {post,author,text} = req.body;
        
        if (!post || !author || !text) {
            return res.status(400).json({
                success: false,
                message: 'post, author, and text are required'
            });
        }

        const response = await Comments.create({post,author, text});

        res.status(201).json({
            success : true,
            data : response,
            message : "Comments Added Successfully"
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