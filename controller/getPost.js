const Posts = require('../model/postSchema');

exports.getAllPosts = async (req,res) =>{
    try {
        const response = await Posts.find({});
        if(response == null || response.length == 0){
            return res.status(404).json({
                success: false,
                message: "No Posts Found"
            })

        }
        res.status(200).json({
            success : true,
            posts : response,
            message: "Post Fethed Successfully"
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
exports.getPostById = async (req,res) =>{
    try {
        const id = req.params.id;
        const response = await Posts.findById({_id : id});
        if(!response){
            return res.status(404).json({
                success: false,
                message : "No Post Found By This ID"
            })
        }

        res.status(200).json({
            success : true,
            post : response,
            message : "Post fetched successfully"
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