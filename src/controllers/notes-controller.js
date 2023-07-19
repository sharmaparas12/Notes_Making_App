const Noteservice=require('../services/note-service');
const noteservice=new Noteservice();
const {response}=require('express');



const Addnote=async (req,res) => {
    try {
        const response=await noteservice.Addnote(req.body);
        return res.status(200).json({
            message:'Note is creates',
            data:response,
            status:true,
            err:{}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'something went wrong in controllers',
            data:{},
            status:false,
            err:error
        });
        
    }
}
const seenote=async (req,res) => {
    try {
        
        const response=await noteservice.seenote(req.params.id);
        return res.status(200).json({
            message:'Note is fetched from the database',
            data:response,
            status:true,
            err:{}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'something went wrong in controllers',
            data:{},
            status:false,
            err:error
        });
        
    }
}

const deletenote=async (req,res) => {
    try {
        
        const response=await noteservice.deletenote(req.params.id);
        return res.status(200).json({
            message:'Note is deleted',
            data:response,
            status:true,
            err:{}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'something went wrong in controllers',
            data:{},
            status:false,
            err:error
        });
        
    }
}

const updatenote=async (req,res) => {
    try {
        
        const response=await noteservice.updatenote(req.params.id,req.body);
        return res.status(200).json({
            message:'Note update is done',
            data:response,
            status:true,
            err:{}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'something went wrong in controllers',
            data:{},
            status:false,
            err:error
        });
        
    }
}






module.exports={
    Addnote,
    seenote,
    deletenote,
    updatenote
   
}
