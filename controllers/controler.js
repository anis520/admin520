const path=require('path')
const {readFileSync,writeFileSync}=require('fs')

 
// const teacherComments=JSON.parse(readFileSync(path.join(__dirname,'../db/data4.json')))



//home router
const home =(req,res)=>{
    const teacherComments=JSON.parse(readFileSync(path.join(__dirname,'../db/data4.json')))
    
    res.render('index',{teacherComments})
    
}



//about router
const about =(req,res)=>{

    
    res.render('about')
    
}



//bolg router
const blog =(req,res)=>{

    
    res.render('blog')
    
}



//contact router
const contact =(req,res)=>{

    
    res.render('contact')
    
}



//service router
const service =(req,res)=>{

    
    res.render('service')
    
}



//admin router
const admin =(req,res)=>{
    const teacherComments=JSON.parse(readFileSync(path.join(__dirname,'../db/data4.json')))
    
    res.render('admin',{teacherComments})
    
}


// req for form

const from = (req,res)=>{


   res.render('from')


}



// submit from 

const fromsub=(req,res)=>{

    const teacherComments=JSON.parse(readFileSync(path.join(__dirname,'../db/data4.json')))     

      const {name,text,img}=req.body
    let last_id = 1;
    if(teacherComments.length > 0){
        last_id=teacherComments[teacherComments.length -1 ].id + 1 ;
    }
      teacherComments.push({
          id:last_id,
          name:name,
          text:text,
          img:req.file.filename


     })


    //  write data 
writeFileSync(path.join(__dirname,'../db/data4.json'),JSON.stringify(teacherComments))


      
    

res.redirect('/admin')



}







    module.exports={home,about,blog,contact,service,admin,from,fromsub}