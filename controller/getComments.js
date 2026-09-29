const Comments = require('../model/commentSchema');

exports.getComments = async(req, res)=> {
    try {
        const response = await Comments.find({});
        if(!response){
            return res.status(404).json({
                success : false,
                message : "No Any Comments Found"
            })
        }

        res.status(200).json({
            success : true,
            comments : response,
            message : "Comments Fetch Successfully"
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


exports.getCommentsById = async (req,res)=>{
    try {
        const id = req.params.id;
        const response = await Comments.find({_id : id});
        if(!response){
            return res.status(404).json({
                success : false,
                message : "No Any Comments Found"
            })
        }

        res.status(200).json({
            success : true,
            comment : response,
            message : "Comments Fetch Successfully"
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