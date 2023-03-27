const user = require('../models/user')
const createuser = async(req,res)=>{
    try {
        const {firstName,lastName, email,phoneNo,password}= req.body;
        const databody = {
            firstName,lastName, email,phoneNo,password
        }
        const data = user.insertMany(databody)
        console.log(data);
    } catch (error) {
        res.send(error)
    }

}
module.exports={createuser};