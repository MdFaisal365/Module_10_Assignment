const WorksModel = require('../Models/WorksModel');
exports.CreateWork = async(req, res)=>{
    try{
        
        let reqBody = req.body;
    
        let result =await WorksModel.create(reqBody);

        res.status(201).json({status: "success", data: result});
    }catch(error){
        res.status(400).json({status: "failed", data: "something is broken!"})
    }
}



exports.SelectWork = async(req, res)=>{
    try{
        
        let id = req.params.id;
        let query = {_id: id};
    
        let result =await WorksModel.find(query);

        res.status(201).json({status: "success", data: result});
    }catch(error){
        res.status(400).json({status: "failed", data: "something is broken!"})
    }
}

exports.UpdateWork = async(req, res)=>{
    try{
        
        let id = req.params.id;
        let query = {_id: id};
        let reqBody = req.body;
    
        let result =await WorksModel.updateOne(query, reqBody);

        res.status(201).json({status: "success", data: result});
    }catch(error){
        res.status(400).json({status: "failed", data: "something is broken!"})
    }
};


exports.DeleteWork = async(req, res)=>{
    try{
        
        let id = req.params.id;
        let query = {_id: id};
    
        let result =await WorksModel.deleteOne(query);

        res.status(201).json({status: "success", data: result});
    }catch(error){
        res.status(400).json({status: "failed", data: "something is broken!"})
    }
};