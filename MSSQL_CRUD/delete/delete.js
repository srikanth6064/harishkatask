let express = require("express");
let mssql = require("mssql");
let prop = require("../config/mssql_properties");
let module4 = express.Router().delete("/",(req,res)=>{
    mssql.connect(prop,(err)=>{
        if(err)
            throw err;
        else{
            let request = new mssql.Request();
            request.query(`delete from products where p_id=${req.body.p_id}`,(err,result)=>{
                if(err)
                    throw err;
                else
                    res.send({"delete":"success"});
                mssql.close();
            });
        }
    });
});
module.exports = module4;