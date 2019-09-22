const express = require('Express')
const app = express()
const mongoose = require('mongoose')
const port = 3005

//To parse the incoming data from app.post()
app.use(express.json())


//db configuration
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/notes-app',{
    useNewUrlParser:true })
    .then(()=>{
        console.log('successfully connected')
    })
    .catch((err)=>{
        console.log('Error conneting to DB',err)
    })

//Note Schema
const Schema = mongoose.Schema
const noteSchema = new Schema({
    title:{
        type: String
    },
    description:{
        type:String
    },
    CreatedAt:{
        type: Date,
        default:Date.now
    },
    tag:{
        type:String
    }
})

//Note Constructor function
const Note = mongoose.model('Note', noteSchema)

app.get('/',(req,res)=>{
    res.json({
        notice:'welcome to the notes taking app'
    })
})

app.get('/notes',(req,res)=>{
    Note.find()
        .then((notes)=>{
            res.json(notes)
        })
        .catch((err)=>{
            res.json(err)
        })
})

app.post('/notes',(req,res)=>{
    const body = req.body
    const note = new Note({
        title:body.title,
        description:body.description
    })
    note.save()
        .then((note)=>{
            res.json(note)
        })
        .catch((err)=>{
            res.json(err)
        })
})

app.listen(port,()=>{
    console.log('listening on port',port)
})
