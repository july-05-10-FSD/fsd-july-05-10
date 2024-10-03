const fileUploaded =require("../models/file.model");

const createfile = async ( req,res)=>{
    try {
        let file = req.file
        let userId = req.userId
        let data ={
            ...file,
            userId,
        }
        let save = await fileUploaded.create(data);
        res.json({
            save,
            message:"file Uploaded completed"
    })
    } catch (error) {
        res.json(error.message)
    }
}

const getfile =async(req,res)=>{
    try {
        let userId = req.userId
        let getdata = await fileUploaded.find({userId})
        if(!getdata || getdata.length===0)
        {
            return res.status(404).json({message:"Data Not Found"})
        }
        res.json(getdata);
    } catch (error) {
        res.json(error.message);
    }
};

const getfileId = async(req,res)=>{
    try {
        let {_id}= req.query
        let getdataid = await fileUploaded.findById(_id)
        if(!getdataid ){
                return res.status(404).json({message:"Object Id Not Found"})
        } 
        res.json(getdataid);
    } catch (error) {
        res.json(error.message)
    }
}

module.exports = {
    createfile,
    getfile,
    getfileId
};