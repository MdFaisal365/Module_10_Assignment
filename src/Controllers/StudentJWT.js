const JWT = require('jsonwebtoken');

exports.StudentLogin = (req, res)=>{

    let email = req.headers['email'];

    let payload = {
        exp: Math.floor(Date.now()/1000) *(24*60*60),
        data: email
    }

    let Token = JWT.sign(payload, "private12345");

    res.status(200).json({status: "success", data:Token});
}