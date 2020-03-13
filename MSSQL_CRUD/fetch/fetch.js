let express = require("express");
let mssql = require("mssql");
let prop = require("../config/mssql_properties");
let module1 = express.Router().get("/",(req,res)=>{
    mssql.connect(prop,(err)=>{
        if(err)
            throw err;
        else{
            let request = new mssql.Request();
            request.query(`select * from products`,
                                            (err,records)=>{
                if(err)
                    throw err;
                else
                    res.send(records);
                mssql.close();
            });
        }
    });
});
module.exports = module1;