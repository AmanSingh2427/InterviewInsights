import mongoose from "mongoose";

const Connection=async()=>{
    // const URL=`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@internshala-project.nequb6t.mongodb.net/?retryWrites=true&w=majority`;

    const URL='mongodb+srv://shubhamss105:shubhamss105@career-edge.6ty3rnd.mongodb.net/?retryWrites=true&w=majority';

    try{
        mongoose.set("strictQuery",false);
        await mongoose.connect(URL, {useNewUrlParser:true});
        console.log('database connected successfully');

    }catch(error){
        console.log('error while connecting the database',error);
    };
}
export default Connection