const StudentModel = require('../Models/StudentsModel');

exports.CreateStudent = async(req, res)=>{
    try{
        
        let reqBody = req.body;
    
        let result =await StudentModel.create(reqBody);

        res.status(201).json({status: "success", data: result});
    }catch(error){
        res.status(400).json({status: "failed", data: "something is broken!"})
    }
};



exports.SelectStudent = async(req, res)=>{
    try{
        
        let id = req.params.id;
        let query = {_id: id};
    
        let result =await StudentModel.find(query);

        res.status(201).json({status: "success", data: result});
    }catch(error){
        res.status(400).json({status: "failed", data: "something is broken!"})
    }
};


exports.UpdateStudent = async(req, res)=>{
    try{
        
        let id = req.params.id;
        let query = {_id: id};
        let reqBody = req.body;
    
        let result =await StudentModel.updateOne(query, reqBody);

        res.status(201).json({status: "success", data: result});
    }catch(error){
        res.status(400).json({status: "failed", data: "something is broken!"})
    }
};




exports.DeleteStudent = async(req, res)=>{
    try{
        
        let id = req.params.id;
        let query = {_id: id};
    
        let result =await StudentModel.deleteOne(query);

        res.status(201).json({status: "success", data: result});
    }catch(error){
        res.status(400).json({status: "failed", data: "something is broken!"})
    }
};