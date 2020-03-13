let express = require("express");
let mssql = require("mssql");
let prop = require("../config/mssql_properties");
let module3 = express.Router().put("/",(req,res)=>{
    mssql.connect(prop,(err)=>{
        if(err)
            throw err;
        else{
            let request = new mssql.Request();
            request.query(`update products set p_name='${req.body.p_name}',p_cost=${req.body.p_cost},p_qty=${req.body.p_qty} where p_id=${req.body.p_id}`,(err,result)=>{
                if(err)
                    throw err;
                else
                    res.send({"update":"success"});
                mssql.close();
            });
        }
    });
});
module.exports = module3;