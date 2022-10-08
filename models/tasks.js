import mongoose from "mongoose";

const TaskScheema = mongoose.Schema({
    email : {
        type : String,
        required : true
    },

    type : {
        type : String,
        required : true
    },
     
    start : {
        type : Date,
        requried : true
    },

    description : {
        type : String, 
        required : false
    },

    duration : {
        type : Number,
        required : true
    }

})

const Tasks = mongoose.model("Tasks", TaskScheema);

export default Tasks;