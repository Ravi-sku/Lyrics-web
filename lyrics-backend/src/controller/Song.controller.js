const authmodel = require('../models/authModel')
const songModel=require('../models/songModel')
const makeSlug = require('../utils/slug')

async  function AddSong(req,res){

    if(req.user.role !=='admin'){
     return res.status(403).json({
         success:false,
         message:"Access denied"
      })
    }
    const { title,artist,lyrics,album,language }=req.body
    if(!title || !artist || !lyrics){
        return res.status(400).json({
            success:false,
            message:'please fill required feild'
        })
    }
    try{ 
    const slug=makeSlug(title)
    const existingSong=await songModel.findOne({slug})
    if(existingSong){
        return res.status(400).json({
        success:false,
        message:'Song already exists'
        })
    }
   
    const SongPost=await songModel.create( {title,artist,slug,lyrics,album,language})
    res.status(201).json({
        success:true,
        Data:SongPost
    })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }


}

async function getsong(req,res) {
    const slug=req.params.slug
    const lyric=await songModel.findOne({slug})
    if(!lyric){
        const song=await songModel.find()
        return  res.status(200).json({
                message:song
            })
    }
    try{
        res.status(200).json({
            success:true,
            message:lyric
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
    
}

async function getAllsong(req,res) {
    try{
            const song=await songModel.find().select('slug -_id')
            res.status(200).json({
                success:true,
                message:song
            })
    
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }

}


async  function UpdateSong(req,res){
    const SongId=req.params.id
    const id=await songModel.findById(SongId)
    if(!id){
        return res.send("Song not found")
    }
    try{

        if(req.body.title){ 
            req.body.slug=makeSlug(req.body.title)
            const existSong=await songModel.findOne({
                slug:req.body.slug,
                _id:{$ne:req.params.id}
                // title:req.body.title => use karne par already exist if same slug in same id
            })           
            if(existSong){
                return res.status(400).json({
            success:false,
            message:"Song already exists"
})
            }
            
        }
    const UpdateSong=await songModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
        
    )
    res.status(200).json({
        success:true,
        Data:UpdateSong
    })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }


}
async  function DeleteSong(req,res){

    try{
    const DeleteSong=await songModel.findByIdAndDelete(
        req.params.id,
    )
    res.status(200).json({
        success:true,
    })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }


}

// search song by lyrics name using regix

async function searchSong(req,res) {
    try{
    const q=req.query.q
    if(!q){
        return res.status(400).json({
            success:false,
            message:"searching keyboard is required"
        })
    }
    // console.log(q);
    const lyrics=await songModel.find({
        $or:[
            {
            title:{
            $regex:q,
            $options:'i'
        }},
        {
            artist:{
                $regex:q,
                $options:'i'
            }
        }
        ]

    }).limit(10)
    if(lyrics.length===0){
       return res.status(404).json({
            success:false,
            message:"song could not found using this keyboard"
        })
    }
    res.status(200).json({
        success:true,
        message:lyrics
    })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
   
}

module.exports={AddSong,UpdateSong,DeleteSong,getAllsong,getsong,searchSong}