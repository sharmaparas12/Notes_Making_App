const express=require('express');
const router=express.Router();
const notescontroller=require('../../controllers/notes-controller');






router.post('/addnote',notescontroller.Addnote);

router.get('/seenote/:id',notescontroller.seenote);

router.delete('/deletenote/:id',notescontroller.deletenote);

router.patch('/updatenote/:id',notescontroller.updatenote);








module.exports=router;