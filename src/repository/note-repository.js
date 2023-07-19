const {Note}=require('../models/index');
class NoteRepository{



    async create(data){
        try {
            console.log(data);
            const note=await Note.create(data);
            return note;
            
        } catch (error) {
            console.log("error in repository layer");
            throw{error};
            
        }
    }

    async get(noteid){
        try {
            console.log(noteid);
            const note=await Note.findByPk(noteid);
            return note;
            
        } catch (error) {
            console.log("error in repository layer");
            throw{error};
            
        }
    }
    async delete(noteid){
        try {
  
            
            const note=await Note.destroy({
                where:{
                    id:noteid
                }
            });
            return true;
            
        } catch (error) {
            console.log("error in repository layer");
            throw{error};
            
        }
    }
    
    async update(noteid,data){
        try {
            const note=await Note.update(data,{
                where:{
                    id:noteid
                }
            });
            return note;
  
           
            
        } catch (error) {
            console.log("error in repository layer");
            throw{error};
            
        }
    }

    
}
module.exports=NoteRepository;