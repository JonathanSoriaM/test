import { Schema } from "mongoose";


export const FraseSchema = new Schema({
   word : String,
    allowed : Boolean,
    status : String,
    dateCreated :  {
        type: Date,
        default: Date.now
    },
    lastDateUpdated :  {
        type: Date,
        default: Date.now
    },
   dateDeleted : Date
  

});