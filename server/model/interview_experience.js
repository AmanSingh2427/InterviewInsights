import mongoose from 'mongoose';

const interviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    collegeName: {
        type: String,
        required: true,
    },
    jobTitle: {
        type: String,
        required: true
    },
    company:{
        type:String,
        required:true
    },
    resumeScreening:{
        type:String,
    },
    round1Name:{
        type:String
    },
    round1:{
        type:String
    },
    round2Name:{
        type:String
    },
    round2:{
        type:String
    },
    round3Name:{
        type:String
    },
    round3:{
        type:String
    },
    round4Name:{
        type:String
    },
    round4:{
        type:String
    },
    round5Name:{
        type:String
    },
    round5:{
        type:String
    }
});


const Form = mongoose.model('Form', interviewSchema);

export default Form;