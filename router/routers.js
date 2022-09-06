// init nodemodules 

const express= require('express')
const router=express.Router()
const {home,about,blog,contact,service,admin,from,fromsub} = require('../controllers/controler')
const path=require('path')
const multer=require('multer')
const { DESTRUCTION } = require('dns')

//inti  config


const storage = multer.diskStorage({

   destination:(req,file,cb)=>{

      cb(null,path.join(__dirname, '../public/images/students/'))
   },
   filename:(req,file,cb)=>{

    cb(null,file.originalname)



   }




}) 


const studentPhotoMulter=multer({


storage:storage




}).single('img');




router.get('/',home)
router.get('/about',about)
router.get('/blog',blog)
router.get('/contact',contact)
router.get('/service',service)
router.get('/admin',admin)
router.get('/from',from)
router.post('/adminf',studentPhotoMulter,fromsub)




 

module.exports=router
