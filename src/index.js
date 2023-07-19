const express=require('express');
const bodyparser=require('body-parser');
const app=express();
const {PORT}=require('./config/serverconfig');
const apiRoutes=require('./routes/index');
const NoteRepository=require('./repository/note-repository');

const PrepareAndStartserver= async () => {

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));


   
    app.listen(PORT,async () => {
        app.use(bodyparser.json());
        app.use(bodyparser.urlencoded({extended:true}));
        app.use('/api',apiRoutes);
    
    
        // if(process.env.DB_SYNC=='true')
        // {
            
        //     db.sequelize.sync({alter:true});
        // }
        
    });



}



PrepareAndStartserver();
