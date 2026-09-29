const Posts = require('../model/postSchema');

exports.createPost = async (req, res)=>{
    try {
        const {title, content, author} = req.body;

        const response = await Posts.create({title, content, author});

        res.status(200).json({
            success : true,
            data : response,
            mesage : "Post Added Successfully"
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