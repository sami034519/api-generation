import connection from "../config/db.js";
export default {
  async getUser(req, res) {
    try {
      const result = await new Promise((resolve, reject) => {
        connection.query(`select*from data1 where id= ?`, req.params.id, (err, results) => {
          if (err) return reject(err);
          else {
            return resolve(results);
          }
        });
      });
      return res.json({
        data: result,
      });
    } catch (err) {
      console.log(err);
    }
  },
  async postdata(req,res){
    try{
    const data= await new Promise((resolve,reject)=>{
      connection.query(`insert into data1 set ?`,req.body,(err,results)=>{
        
          if(err){return reject(err)}
          else{return resolve(results)}
        });
      });
      return res.status(200).json({
        data:data
      });
      
    } catch(err){
      console.log(err);
    }
  
  },
  async updatedata(req,res){
    try{
const newdata= await new Promise((resolve,reject)=>{
  connection.query(`update data1 set name=?, class1=? ,subject=? where id=?`,[req.body.name,req.body.class1,req.body.subject,req.params.id],(err,results)=>{
    if(err){return reject(err)}
    else{return resolve(results)}
  });

});
res.status(200).json({
  data:newdata
})

    }catch(err){
    console.log(err);
    }
  },
async deletedata(req,res){
  try{
    const newdata= await new Promise((resolve,reject)=>{
      connection.query(`delete from data1 where id=?`,req.params.id,(err,results)=>{
        if(err){return reject(err)}
        else{return resolve(results)}
      });
    
    });
    res.status(200).json({
      data:newdata
    })

  }catch{

  }
}

 

};
