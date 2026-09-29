const Posts = require('../model/postSchema');

exports.likePost = async (req,res)=>{
    try {
        const id = req.params.id;
        const {userId} = req.body;

        const response = await Posts.findById({_id:id});

        if(!response){
            return res.status(404).json({
                success: false,
                message : "No Post Found By this ID"
            })
        }

        const oldLikes = response.likes;

        const alreadyLiked = oldLikes.find((user)=> user === userId);

        if(alreadyLiked){
            return res.status(200).json({
                success: true,
                likes : oldLikes,
                message : "Post Already Liked"
            })
        }

        const newLikes = [...oldLikes, userId];

        const updatedlike = await Posts.findByIdAndUpdate({_id : id},{likes : newLikes},{new : true});
        // without new : true it will return the old data and with new : true it will return the updated data

        res.status(200).json({
            success : true,
            likes : updatedlike,
            message : "Post Liked Successfully"
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

