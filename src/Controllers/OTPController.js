const OTPModel = require('../Models/OTPModel');
exports.SavedOTP = async(req, res)=>{
    let reqBody = req.body;
    let result = await OTPModel.create(reqBody);
    res.status(201).json({status: "success", data: result});
};