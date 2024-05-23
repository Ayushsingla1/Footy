const Form = require('../Model/basic');

exports.submitControl = async(req,res)=>{
    try{
        const {name,email,message} = req.body;
        const response = await Form.create({name,email,message});

        res.status(200).json({
            success : true,
            message : "Data uplaoded successfully",
            data : response
        })
    }catch(error){
        console.error(error);
        res.status(400).json(
            {
                success : false,
                message : "Error while uploading data"
            }
        )
    }
}