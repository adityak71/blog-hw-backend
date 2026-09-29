const Posts = require('../model/postSchema');

exports.getLikesById = async (req,res) =>{
    try {
        const id = req.params.id;
        const response = await Posts.findById({_id : id});
        if(!response){
            return res.status(404).json({
                success : false,
                message: "No Post Found By This ID"
            })

        }

        const likes = response.likes;

        res.status(200).json({
            success : true,
            likes : likes,
            message : "Successfully Fetched Likes"
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