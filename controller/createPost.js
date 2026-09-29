const Posts = require('../model/postSchema');

exports.createPost = async (req, res)=>{
    try {
        const {title, content, author} = req.body;

        if (!title || !content || !author) {
            return res.status(400).json({
                success: false,
                message: 'title, content, and author are required'
            });
        }
        
        const response = await Posts.create({title, content, author});

        res.status(201).json({
            success : true,
            data : response,
            message : "Post Added Successfully"
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