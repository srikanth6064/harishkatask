let express = require("express");
let mssql = require("mssql");
let prop = require("../config/mssql_properties");
let module2 = express.Router().post("/",(req,res)=>{
    mssql.connect(prop,(err)=>{
        if(err)
            throw err;
        else{
            let request = new mssql.Request();
            request.query(`insert into products values(
                ${req.body.p_id},
                '${req.body.p_name}',
                ${req.body.p_cost},
                ${req.body.p_qty})`,(err,result)=>{
                    if(err)
                        throw err;
                    else
                        res.send({"insert":"success"});
                    mssql.close();
            });
        }
    });
});
module.exports = module2;