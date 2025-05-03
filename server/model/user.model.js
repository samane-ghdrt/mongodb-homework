const mongoose=require('mongoose');

const users=new mongoose.schema({
age:{type:number},
Gender:{type:String},
Experience:{type:number},
})
// const user=mongoose.
// - **String** `name`: Name of the faculty member.
//      - **Number** `age`: Age of the faculty member.
//      - **String** `gender`: Gender of the faculty member.
//      - **Number** `exp`: Experience of the faculty member.
//      - **String** `type`: Type of employment (e.g., Full Time, Part Time).
//      - **String** `qualification`: Qualification of the faculty member (e.g., Ph.D, Master's).